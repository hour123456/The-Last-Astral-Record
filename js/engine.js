// -*- coding: utf-8 -*-
/**
 * 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
 * CHRONOS-ARIA AAA Visual Novel & Cinema Directing Engine
 */

class ChronosAriaEngine {
  constructor() {
    this.nodes = [
      ...(window.STORY_ACT1 || []),
      ...(window.STORY_INTERLUDE || []),
      ...(window.STORY_ACT2 || []),
      ...(window.STORY_ACT3 || []),
      ...(window.STORY_FLASHBACK || [])
    ];
    this.nodeMap = new Map();
    this.nodes.forEach((n, idx) => {
      this.nodeMap.set(n.id, { node: n, index: idx });
    });

    // Game State
    this.state = {
      currentId: "pro_01",
      divergence: 0.041829,
      countdown: "D-72:00:00",
      location: "성도 에텔가르드",
      celestiaResonance: 50,
      isoldeBond: 50,
      flags: {},
      unlockedCodex: new Set(["pale_ring", "star_ash", "aethelgard"]),
      unlockedCGs: new Set(["bg_title_clocktower", "bg_atelier", "bg_city_street", "bg_zeroth_spire", "bg_inquisition_hall"]),
      loopCount: parseInt(localStorage.getItem("chronos_loop_count") || "404", 10)
    };

    this.backlog = [];
    this.isTyping = false;
    this.typeTimer = null;
    this.fullCurrentText = "";
    this.forceNVL = false;
    this.autoMode = false;
    this.skipMode = false;
    this.autoTimer = null;
    this.currentBgmKey = null;
    this.bgmAudio = new Audio();
    this.bgmAudio.loop = true;
    this.bgmVolume = 0.65;
    this.sfxVolume = 0.80;
    this.audioCtx = null;

    // Canvas Weather & Directing FX
    this.weatherType = "star_ash";
    this.particles = [];
    this.activeFx = [];
    this.mouseX = 0;
    this.mouseY = 0;

    this.initDOM();
    this.initCanvases();
    this.bindEvents();
    this.loadPersistentUnlocks();
  }

  initDOM() {
    this.elViewport = document.getElementById("game-viewport");
    this.elBg = document.getElementById("bg-layer");
    this.elVignette = document.getElementById("vignette-layer");
    this.elFlash = document.getElementById("flash-overlay");

    this.elSlotLeft = document.getElementById("slot-left");
    this.elSlotCenter = document.getElementById("slot-center");
    this.elSlotRight = document.getElementById("slot-right");

    this.elHudDivergence = document.getElementById("hud-divergence");
    this.elHudLocation = document.getElementById("hud-location");
    this.elHudCountdown = document.getElementById("hud-countdown");
    this.elResCelestia = document.getElementById("res-celestia");
    this.elResIsolde = document.getElementById("res-isolde");

    this.elAdvBox = document.getElementById("adv-container");
    this.elSpeakerPlate = document.getElementById("speaker-plate");
    this.elSpeakerName = document.getElementById("speaker-name");
    this.elSpeakerTitle = document.getElementById("speaker-title");
    this.elAdvText = document.getElementById("adv-text");

    this.elNvlBox = document.getElementById("nvl-container");
    this.elNvlText = document.getElementById("nvl-text");
    this.elEndingBanner = document.getElementById("ending-badge-banner");

    this.elChoiceOverlay = document.getElementById("choice-overlay");
    this.elChoiceList = document.getElementById("choice-list");

    this.elChapterCard = document.getElementById("chapter-card");
    this.elChapMain = document.getElementById("chap-main-title");
    this.elChapSub = document.getElementById("chap-sub-title");

    this.elTitleScreen = document.getElementById("title-screen");
    this.elModal = document.getElementById("modal-backdrop");
    this.elModalTitle = document.getElementById("modal-title");
    this.elModalBody = document.getElementById("modal-body");
    this.elToastBox = document.getElementById("toast-box");
  }

  loadPersistentUnlocks() {
    try {
      const savedCGs = JSON.parse(localStorage.getItem("chronos_unlocked_cgs") || "[]");
      savedCGs.forEach(c => this.state.unlockedCGs.add(c));
      const savedCodex = JSON.parse(localStorage.getItem("chronos_unlocked_codex") || "[]");
      savedCodex.forEach(c => this.state.unlockedCodex.add(c));
    } catch (e) {}
  }

  savePersistentUnlocks() {
    try {
      localStorage.setItem("chronos_unlocked_cgs", JSON.stringify([...this.state.unlockedCGs]));
      localStorage.setItem("chronos_unlocked_codex", JSON.stringify([...this.state.unlockedCodex]));
    } catch (e) {}
  }

  ensureAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playVoiceBlip(speakerName) {
    if (!this.audioCtx || this.skipMode) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      let basePitch = 220;
      if (speakerName && speakerName.includes("셀레스티아")) basePitch = 330;
      else if (speakerName && speakerName.includes("이졸데")) basePitch = 265;
      else if (speakerName && speakerName.includes("녹스")) basePitch = 185;
      else if (speakerName && speakerName.includes("유스티니아")) basePitch = 295;
      else if (speakerName && speakerName.includes("카일런")) basePitch = 145;

      osc.type = "sine";
      osc.frequency.setValueAtTime(basePitch + (Math.random() * 24 - 12), now);
      gain.gain.setValueAtTime(0.018, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.048);
    } catch (e) {}
  }

  playBGM(bgmKey) {
    if (!bgmKey || bgmKey === this.currentBgmKey) return;
    const track = window.GAME_METADATA.bgmList.find(t => t.id === bgmKey);
    if (!track) return;
    this.currentBgmKey = bgmKey;
    this.bgmAudio.src = track.file;
    this.bgmAudio.volume = this.bgmVolume;
    this.bgmAudio.play().catch(() => {});
  }

  playSFX(sfxName) {
    if (!sfxName) return;
    const sfx = new Audio(`assets/sfx/${sfxName}.wav`);
    sfx.volume = this.sfxVolume;
    sfx.play().catch(() => {});
  }

  showToast(msg) {
    const item = document.createElement("div");
    item.className = "toast-item";
    item.textContent = msg;
    this.elToastBox.appendChild(item);
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transition = "opacity 0.4s ease";
      setTimeout(() => item.remove(), 400);
    }, 3200);
  }

  // =========================================================================
  // GAME FLOW & SCENE RENDERING
  // =========================================================================
  startNewGame() {
    this.ensureAudioContext();
    this.playSFX("sfx_ui_confirm");
    this.state.currentId = "pro_01";
    this.state.divergence = 0.041829;
    this.state.celestiaResonance = 50;
    this.state.isoldeBond = 50;
    this.backlog = [];
    this.elTitleScreen.classList.add("hidden");
    this.renderNode("pro_01");
  }

  jumpToChapter(nodeId) {
    this.ensureAudioContext();
    this.playSFX("sfx_ui_confirm");
    this.closeModal();
    this.elTitleScreen.classList.add("hidden");
    this.renderNode(nodeId);
  }

  renderNode(nodeId) {
    const entry = this.nodeMap.get(nodeId);
    if (!entry) return;
    const node = entry.node;
    this.state.currentId = nodeId;

    // 1. Background update
    if (node.bg) {
      const bgUrl = `assets/images/${node.bg}.png`;
      this.elBg.style.backgroundImage = `url('${bgUrl}')`;
      this.state.unlockedCGs.add(node.bg);
      this.savePersistentUnlocks();
    }

    // 2. BGM & SFX
    if (node.bgm) this.playBGM(node.bgm);
    if (node.sfx) this.playSFX(node.sfx);

    // 3. Weather Shader
    if (node.weather) {
      this.weatherType = node.weather;
    }

    // 4. HUD & Unlocks
    if (node.hud) {
      if (node.hud.divergence) {
        this.animateDivergence(node.hud.divergence);
      }
      if (node.hud.countdown) this.elHudCountdown.textContent = node.hud.countdown;
      if (node.hud.location) this.elHudLocation.textContent = node.hud.location;
    } else {
      this.elHudDivergence.textContent = `${this.state.divergence.toFixed(6)}%`;
    }
    this.elResCelestia.textContent = `셀레스티아 공명 ${this.state.celestiaResonance}%`;
    this.elResIsolde.textContent = `이졸데 인연 ${this.state.isoldeBond}%`;

    if (node.unlockCodex) {
      node.unlockCodex.forEach(cid => {
        if (!this.state.unlockedCodex.has(cid)) {
          this.state.unlockedCodex.add(cid);
          const cItem = window.GAME_METADATA.codex.find(c => c.id === cid);
          if (cItem) this.showToast(`📖 백과사전 갱신 : 【${cItem.term}】`);
        }
      });
      this.savePersistentUnlocks();
    }

    if (node.unlockCG) {
      if (!this.state.unlockedCGs.has(node.unlockCG)) {
        this.state.unlockedCGs.add(node.unlockCG);
        this.showToast(`🖼️ 이벤트 CG 해금!`);
        this.savePersistentUnlocks();
      }
    }

    // 5. Directing FX
    if (node.fx) {
      this.triggerDirectingFX(node.fx);
    } else {
      this.elBg.classList.remove("laplace-vision");
    }

    // 6. Character Stage Slots
    this.updateCharacters(node.chars, node.speaker);

    // 7. Chapter Title Card
    if (node.chapterTitle) {
      this.showChapterCard(node.chapterTitle, node.chapterSub || "");
    }

    // 8. Dialogue Mode (ADV vs NVL)
    const effectiveMode = this.forceNVL ? "nvl" : (node.mode || "adv");
    if (effectiveMode === "nvl") {
      this.elAdvBox.style.opacity = "0";
      this.elAdvBox.style.pointerEvents = "none";
      this.elNvlBox.classList.add("active");
    } else {
      this.elNvlBox.classList.remove("active");
      this.elAdvBox.style.opacity = "1";
      this.elAdvBox.style.pointerEvents = "auto";
    }

    // Speaker Badge
    if (node.speaker) {
      this.elSpeakerPlate.style.display = "flex";
      this.elSpeakerName.textContent = node.speaker;
      this.elSpeakerTitle.textContent = node.speakerTitle || "";
      this.elSpeakerTitle.style.display = node.speakerTitle ? "inline" : "none";
      this.elAdvText.classList.remove("narration-italic");
    } else {
      this.elSpeakerPlate.style.display = "none";
      this.elAdvText.classList.add("narration-italic");
    }

    // Ending Banner
    if (node.endingBadge) {
      this.elEndingBanner.style.display = "block";
      this.elEndingBanner.textContent = `❖ ${node.endingBadge} ❖`;
      if (node.id === "end_loop_02") {
        this.state.loopCount += 1;
        localStorage.setItem("chronos_loop_count", String(this.state.loopCount));
      }
    } else {
      this.elEndingBanner.style.display = "none";
    }

    // Backlog record
    this.backlog.push({
      id: node.id,
      speaker: node.speaker || "지문 (Narration)",
      text: node.text
    });

    // Typewriter Text Reveal
    const targetEl = effectiveMode === "nvl" ? this.elNvlText : this.elAdvText;
    this.startTypewriter(targetEl, node.text, node.speaker, () => {
      if (node.choices && node.choices.length > 0) {
        this.presentChoices(node.choices);
      } else if (this.autoMode || this.skipMode) {
        const delay = this.skipMode ? 120 : 2200;
        clearTimeout(this.autoTimer);
        this.autoTimer = setTimeout(() => this.advance(), delay);
      }
    });
  }

  updateCharacters(charsConfig, activeSpeaker) {
    const slots = [
      { key: "left", el: this.elSlotLeft },
      { key: "center", el: this.elSlotCenter },
      { key: "right", el: this.elSlotRight }
    ];

    if (charsConfig === undefined) {
      // Keep existing characters, just update speaking state
      slots.forEach(({ el }) => this.applySpeakingHighlight(el, activeSpeaker));
      return;
    }

    slots.forEach(({ key, el }) => {
      const cfg = charsConfig[key];
      if (!cfg) {
        el.className = `char-slot ${key === "center" ? "center-slot" : ""}`;
        el.innerHTML = "";
        return;
      }
      el.innerHTML = `<img src="${cfg.sprite}" alt="${cfg.id}" />`;
      el.dataset.charId = cfg.id;
      el.className = `char-slot ${key === "center" ? "center-slot" : ""} active`;
      if (cfg.anim === "pulse") el.classList.add("anim-pulse");
      if (cfg.anim === "shake") el.classList.add("anim-shake");
      this.applySpeakingHighlight(el, activeSpeaker);
    });
  }

  applySpeakingHighlight(slotEl, activeSpeaker) {
    if (!slotEl.classList.contains("active")) return;
    const charId = slotEl.dataset.charId;
    if (!activeSpeaker || activeSpeaker === "카일런") {
      slotEl.classList.remove("dimmed", "speaking");
      return;
    }
    const mapName = {
      celestia: "셀레스티아",
      isolde: "이졸데",
      nox: "녹스",
      justinia: "유스티니아"
    };
    const expected = mapName[charId];
    if (expected && activeSpeaker.includes(expected)) {
      slotEl.classList.add("speaking");
      slotEl.classList.remove("dimmed");
    } else {
      slotEl.classList.add("dimmed");
      slotEl.classList.remove("speaking");
    }
  }

  startTypewriter(targetEl, rawText, speakerName, onDone) {
    clearInterval(this.typeTimer);
    this.isTyping = true;
    this.fullCurrentText = rawText;
    this.currentTargetEl = targetEl;
    this.currentOnDone = onDone;

    if (this.skipMode) {
      this.finishTypewriter();
      return;
    }

    targetEl.textContent = "";
    let idx = 0;
    const len = rawText.length;

    this.typeTimer = setInterval(() => {
      if (idx < len) {
        targetEl.textContent += rawText[idx];
        if (idx % 3 === 0 && rawText[idx].trim() !== "") {
          this.playVoiceBlip(speakerName);
        }
        idx++;
      } else {
        this.finishTypewriter();
      }
    }, 22);
  }

  finishTypewriter() {
    clearInterval(this.typeTimer);
    this.isTyping = false;
    if (this.currentTargetEl) {
      this.currentTargetEl.innerHTML = this.decorateCodexTerms(this.fullCurrentText);
      this.currentTargetEl.querySelectorAll(".codex-inline").forEach(span => {
        span.addEventListener("click", (e) => {
          e.stopPropagation();
          this.openCodexModal(span.dataset.codexId);
        });
      });
    }
    if (this.currentOnDone) {
      const cb = this.currentOnDone;
      this.currentOnDone = null;
      cb();
    }
  }

  decorateCodexTerms(text) {
    let safe = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    window.GAME_METADATA.codex.forEach(entry => {
      entry.keywords.forEach(kw => {
        const reg = new RegExp(`(${kw})`, "g");
        safe = safe.replace(reg, `<span class="codex-inline" data-codex-id="${entry.id}" title="클릭하여 백과사전 열람">$1</span>`);
      });
    });
    return safe;
  }

  presentChoices(choices) {
    this.autoMode = false;
    this.skipMode = false;
    this.updateQuickButtons();
    this.elChoiceList.innerHTML = "";
    choices.forEach((ch) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = ch.text;
      btn.addEventListener("mouseenter", () => this.playSFX("sfx_ui_hover"));
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.playSFX("sfx_ui_confirm");
        if (ch.effects) {
          if (ch.effects.divergenceDelta) {
            this.state.divergence = Math.max(0.0, this.state.divergence + ch.effects.divergenceDelta);
          }
          if (ch.effects.celestiaResonance) {
            this.state.celestiaResonance = Math.min(100, this.state.celestiaResonance + ch.effects.celestiaResonance);
          }
          if (ch.effects.isoldeBond) {
            this.state.isoldeBond = Math.min(100, this.state.isoldeBond + ch.effects.isoldeBond);
          }
          if (ch.effects.flag) {
            this.state.flags[ch.effects.flag] = true;
          }
        }
        this.elChoiceOverlay.classList.remove("active");
        this.renderNode(ch.next);
      });
      this.elChoiceList.appendChild(btn);
    });
    this.elChoiceOverlay.classList.add("active");
  }

  advance() {
    this.ensureAudioContext();
    if (this.elChoiceOverlay.classList.contains("active")) return;
    if (this.elChapterCard.classList.contains("active")) {
      this.elChapterCard.classList.remove("active");
      return;
    }
    if (this.isTyping) {
      this.finishTypewriter();
      return;
    }

    const curr = this.nodeMap.get(this.state.currentId);
    if (!curr) return;
    const node = curr.node;

    if (node.choices && node.choices.length > 0) {
      this.presentChoices(node.choices);
      return;
    }

    // If ending reached, return to Title or open Flowchart
    if (node.endingBadge) {
      this.autoMode = false;
      this.skipMode = false;
      this.updateQuickButtons();
      this.showToast("❖ 엔딩에 도달했습니다. 세계선 차트에서 다른 분기를 탐색해 보세요.");
      setTimeout(() => {
        this.elTitleScreen.classList.remove("hidden");
      }, 600);
      return;
    }

    if (node.next) {
      this.renderNode(node.next);
    } else if (curr.index + 1 < this.nodes.length) {
      this.renderNode(this.nodes[curr.index + 1].id);
    }
  }

  showChapterCard(mainTitle, subTitle) {
    this.elChapMain.textContent = mainTitle;
    this.elChapSub.textContent = subTitle;
    this.elChapterCard.classList.add("active");
    setTimeout(() => {
      this.elChapterCard.classList.remove("active");
    }, 2500);
  }

  animateDivergence(targetStr) {
    let steps = 0;
    const timer = setInterval(() => {
      steps++;
      if (steps < 12) {
        const rnd = (Math.random() * 1.2).toFixed(6);
        this.elHudDivergence.textContent = `${rnd}%`;
      } else {
        clearInterval(timer);
        this.elHudDivergence.textContent = targetStr;
        const parsed = parseFloat(targetStr);
        if (!isNaN(parsed)) this.state.divergence = parsed;
      }
    }, 45);
  }

  // =========================================================================
  // CINEMA DIRECTING FX & WEATHER SHADERS
  // =========================================================================
  initCanvases() {
    this.wCanvas = document.getElementById("weather-canvas");
    this.wCtx = this.wCanvas.getContext("2d");
    this.fxCanvas = document.getElementById("fx-canvas");
    this.fxCtx = this.fxCanvas.getContext("2d");

    const resize = () => {
      this.wCanvas.width = window.innerWidth;
      this.wCanvas.height = window.innerHeight;
      this.fxCanvas.width = window.innerWidth;
      this.fxCanvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 110; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.8 + 0.8,
        vx: Math.random() * 0.8 - 0.4,
        vy: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.75 + 0.2,
        phase: Math.random() * Math.PI * 2
      });
    }

    const loop = (ts) => {
      this.renderWeather(ts);
      this.renderDirectingFX(ts);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  renderWeather(ts) {
    const ctx = this.wCtx;
    const w = this.wCanvas.width;
    const h = this.wCanvas.height;
    ctx.clearRect(0, 0, w, h);

    this.particles.forEach((p) => {
      p.phase += 0.02;
      if (this.weatherType === "rain_ash") {
        // Slanted rain + glowing ash
        ctx.strokeStyle = `rgba(148, 163, 184, ${p.alpha * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - 4, p.y + 18);
        ctx.stroke();
        p.x -= 1.6;
        p.y += p.vy * 5.2;
      } else if (this.weatherType === "sunken_runes") {
        // Rising cyan astral bubbles
        ctx.fillStyle = `rgba(125, 211, 252, ${p.alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x + Math.sin(p.phase) * 1.2, p.y, p.r * 1.2, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.vy * 0.85;
      } else if (this.weatherType === "amber_embers") {
        // Golden Chronos-Amber embers rising
        ctx.fillStyle = `rgba(251, 191, 36, ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x + Math.sin(p.phase) * 1.8, p.y, p.r * 1.3, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.vy * 1.4;
      } else if (this.weatherType === "crimson_sparks") {
        // Clashing crimson & cyan battle sparks
        const isCyan = (p.r > 2.0);
        ctx.fillStyle = isCyan
          ? `rgba(56, 189, 248, ${p.alpha})`
          : `rgba(248, 113, 113, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 1.1, 0, Math.PI * 2);
        ctx.fill();
        p.x += Math.cos(p.phase) * 2.4;
        p.y -= p.vy * 1.8;
      } else if (this.weatherType === "dawn_petals") {
        // Warm golden & white glass-lily petals
        ctx.fillStyle = `rgba(254, 240, 138, ${p.alpha * 0.8})`;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.r * 1.8, p.r * 0.9, p.phase, 0, Math.PI * 2);
        ctx.fill();
        p.x += Math.sin(p.phase) * 1.1 + 0.5;
        p.y += p.vy * 0.9;
      } else {
        // Default: Star-Ash snow
        ctx.fillStyle = `rgba(226, 232, 240, ${p.alpha * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x + Math.sin(p.phase) * 0.9, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += Math.sin(p.phase) * 0.4;
        p.y += p.vy;
      }

      if (p.y > h + 20) { p.y = -10; p.x = Math.random() * w; }
      if (p.y < -20) { p.y = h + 10; p.x = Math.random() * w; }
      if (p.x < -20) p.x = w + 10;
      if (p.x > w + 20) p.x = -10;
    });
  }

  triggerDirectingFX(fxType) {
    if (fxType === "zoom_in") {
      this.elBg.classList.add("zoom-in");
    } else if (fxType === "zoom_reset") {
      this.elBg.classList.remove("zoom-in");
    } else if (fxType === "shake") {
      this.elViewport.classList.remove("screen-shake");
      void this.elViewport.offsetWidth;
      this.elViewport.classList.add("screen-shake");
    } else if (fxType === "heavy_shake") {
      this.elViewport.classList.remove("screen-heavy-shake");
      void this.elViewport.offsetWidth;
      this.elViewport.classList.add("screen-heavy-shake");
    } else if (fxType === "vignette_pulse") {
      this.elVignette.classList.remove("vignette-pulse");
      void this.elVignette.offsetWidth;
      this.elVignette.classList.add("vignette-pulse");
    } else if (fxType.startsWith("flash_")) {
      const colorMap = {
        flash_white: "rgba(255, 255, 255, 0.85)",
        flash_cyan: "rgba(56, 189, 248, 0.72)",
        flash_crimson: "rgba(239, 68, 68, 0.72)"
      };
      this.elFlash.style.background = colorMap[fxType] || "white";
      this.elFlash.style.opacity = "1";
      setTimeout(() => { this.elFlash.style.opacity = "0"; }, 90);
    } else if (fxType === "laplace_eye") {
      this.elBg.classList.add("laplace-vision");
      this.activeFx.push({ type: "laplace", start: performance.now(), duration: 2200 });
    } else if (fxType === "sword_slash") {
      this.elViewport.classList.add("screen-heavy-shake");
      this.activeFx.push({ type: "slash", start: performance.now(), duration: 950 });
    } else if (fxType === "stigma_circle") {
      this.activeFx.push({ type: "stigma", start: performance.now(), duration: 2600 });
    } else if (fxType === "glitch_rewind") {
      this.activeFx.push({ type: "rewind", start: performance.now(), duration: 2400 });
    }
  }

  renderDirectingFX(now) {
    const ctx = this.fxCtx;
    const w = this.fxCanvas.width;
    const h = this.fxCanvas.height;
    ctx.clearRect(0, 0, w, h);

    this.activeFx = this.activeFx.filter(fx => (now - fx.start) < fx.duration);

    this.activeFx.forEach(fx => {
      const p = (now - fx.start) / fx.duration;
      const alpha = Math.sin(p * Math.PI);

      if (fx.type === "slash") {
        ctx.save();
        ctx.strokeStyle = `rgba(248, 113, 113, ${1 - p})`;
        ctx.shadowColor = "#ef4444";
        ctx.shadowBlur = 28;
        ctx.lineWidth = (1 - p) * 18;
        ctx.beginPath();
        ctx.moveTo(w * 0.12, h * 0.82);
        ctx.lineTo(w * (0.12 + 0.76 * Math.min(1, p * 3)), h * (0.82 - 0.68 * Math.min(1, p * 3)));
        ctx.stroke();

        ctx.strokeStyle = `rgba(125, 211, 252, ${1 - p})`;
        ctx.shadowColor = "#38bdf8";
        ctx.lineWidth = (1 - p) * 14;
        ctx.beginPath();
        ctx.moveTo(w * 0.88, h * 0.80);
        ctx.lineTo(w * (0.88 - 0.76 * Math.min(1, p * 3)), h * (0.80 - 0.65 * Math.min(1, p * 3)));
        ctx.stroke();
        ctx.restore();
      } else if (fx.type === "stigma" || fx.type === "laplace" || fx.type === "rewind") {
        const cx = w * 0.5;
        const cy = h * 0.44;
        const radius = Math.min(w, h) * 0.27;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(p * (fx.type === "rewind" ? -Math.PI * 3 : Math.PI * 1.2));
        ctx.strokeStyle = fx.type === "laplace"
          ? `rgba(56, 189, 248, ${alpha * 0.75})`
          : `rgba(212, 175, 55, ${alpha * 0.8})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.82, 0, Math.PI * 2);
        ctx.stroke();

        // 13 Clockwork Numerals
        ctx.font = "14px 'Cinzel Decorative', serif";
        ctx.fillStyle = ctx.strokeStyle;
        for (let i = 1; i <= 13; i++) {
          const ang = (i / 13) * Math.PI * 2;
          const rx = Math.cos(ang) * (radius * 0.91);
          const ry = Math.sin(ang) * (radius * 0.91);
          ctx.fillText(i === 13 ? "XIII" : "•", rx - 6, ry + 4);
        }
        ctx.restore();
      }
    });
  }

  // =========================================================================
  // SAVE / LOAD, CODEX, GALLERY, OST, BACKLOG, FLOWCHART MODALS
  // =========================================================================
  saveSlot(slotIdx) {
    const data = {
      timestamp: new Date().toLocaleString("ko-KR"),
      currentId: this.state.currentId,
      divergence: this.state.divergence,
      countdown: this.elHudCountdown.textContent,
      location: this.elHudLocation.textContent,
      celestiaResonance: this.state.celestiaResonance,
      isoldeBond: this.state.isoldeBond,
      flags: this.state.flags
    };
    localStorage.setItem(`chronos_save_${slotIdx}`, JSON.stringify(data));
    this.playSFX("sfx_ui_confirm");
    this.showToast(`💾 슬롯 ${slotIdx}에 관측 기록을 저장했습니다.`);
  }

  loadSlot(slotIdx) {
    const raw = localStorage.getItem(`chronos_save_${slotIdx}`);
    if (!raw) {
      this.showToast(`⚠️ 슬롯 ${slotIdx}에 저장된 기록이 없습니다.`);
      return;
    }
    const data = JSON.parse(raw);
    this.state.currentId = data.currentId;
    this.state.divergence = data.divergence;
    this.state.celestiaResonance = data.celestiaResonance;
    this.state.isoldeBond = data.isoldeBond;
    this.state.flags = data.flags || {};
    this.playSFX("sfx_worldline_shift");
    this.closeModal();
    this.elTitleScreen.classList.add("hidden");
    this.renderNode(data.currentId);
    this.showToast(`⏳ 슬롯 ${slotIdx}의 세계선(${data.divergence.toFixed(6)}%)으로 복원했습니다.`);
  }

  openSaveLoadModal(mode = "save") {
    this.elModalTitle.textContent = mode === "save" ? "관측 기록 보존 (SAVE RECORD)" : "관측 기록 복원 (LOAD RECORD)";
    let html = `<div class="grid-cards">`;
    for (let i = 1; i <= 6; i++) {
      const raw = localStorage.getItem(`chronos_save_${i}`);
      const info = raw ? JSON.parse(raw) : null;
      html += `
        <div class="info-card" style="cursor:pointer;" data-slot="${i}">
          <span class="badge">CHRONOS SLOT 0${i}</span>
          <h3>${info ? info.location : "비어 있는 관측 슬롯"}</h3>
          <p>${info ? `편차율: ${info.divergence.toFixed(6)}% | ${info.countdown}<br><small>${info.timestamp}</small>` : "클릭하여 이 슬롯을 선택하세요."}</p>
        </div>
      `;
    }
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModalBody.querySelectorAll(".info-card").forEach(card => {
      card.addEventListener("click", () => {
        const slot = card.dataset.slot;
        if (mode === "save") {
          this.saveSlot(slot);
          this.openSaveLoadModal("save");
        } else {
          this.loadSlot(slot);
        }
      });
    });
    this.elModal.classList.add("active");
  }

  openCodexModal(highlightId = null) {
    this.playSFX("sfx_page_turn");
    this.elModalTitle.textContent = "제0시계탑 대서고 백과사전 (ARCHIVES : CODEX)";
    let html = `<div class="grid-cards">`;
    window.GAME_METADATA.codex.forEach(item => {
      const isTarget = item.id === highlightId;
      html += `
        <div class="info-card" style="${isTarget ? 'border-color:#7dd3fc; box-shadow:0 0 25px rgba(125,211,252,0.4);' : ''}">
          <span class="badge">${item.category}</span>
          <h3>${item.term}</h3>
          <p style="color:#f3e5ab; margin-bottom:8px; font-weight:600;">${item.summary}</p>
          <p>${item.content}</p>
        </div>
      `;
    });
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModal.classList.add("active");
  }

  openGalleryModal() {
    this.playSFX("sfx_page_turn");
    this.elModalTitle.textContent = "화상 기록실 (VISUAL ART & EVENT CG GALLERY)";
    let html = `<div class="grid-cards">`;
    window.GAME_METADATA.cgList.forEach(cg => {
      html += `
        <div class="info-card">
          <img class="cg-thumb" src="${cg.file}" alt="${cg.title}" onclick="window.open('${cg.file}', '_blank')" />
          <span class="badge">${cg.subtitle}</span>
          <h3>${cg.title}</h3>
          <p>${cg.quote}</p>
        </div>
      `;
    });
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModal.classList.add("active");
  }

  openMusicModal() {
    this.playSFX("sfx_page_turn");
    this.elModalTitle.textContent = "백야당 축음기 음악실 (GRAMOPHONE OST JUKEBOX)";
    let html = `<div class="grid-cards">`;
    window.GAME_METADATA.bgmList.forEach(track => {
      const playing = this.currentBgmKey === track.id;
      html += `
        <div class="info-card" style="${playing ? 'border-color:#fbbf24;' : ''}">
          <span class="badge">${track.key} · ${track.bpm}</span>
          <h3>${track.title}</h3>
          <p style="margin-bottom:14px;">${track.desc}</p>
          <button class="q-btn ost-play-btn" data-bgm="${track.id}" style="padding:8px 16px; font-size:0.85rem;">
            ${playing ? "♫ 현재 재생 중 (다시 듣기)" : "▶ 이 트랙 재생하기"}
          </button>
        </div>
      `;
    });
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModalBody.querySelectorAll(".ost-play-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentBgmKey = null;
        this.playBGM(btn.dataset.bgm);
        this.openMusicModal();
      });
    });
    this.elModal.classList.add("active");
  }

  openFlowchartModal() {
    this.playSFX("sfx_page_turn");
    this.elModalTitle.textContent = "세계선 관측 차트 (WORLDLINE CHAPTER SELECT)";
    const chapters = [
      { id: "pro_01", badge: "PROLOGUE · DIVERGENCE 0.041829%", title: "프롤로그 : 백야당과 역회전의 편지", desc: "성회가 내리는 밤, 고물 시계방 백야당에 72시간 뒤의 미래로부터 온 검은 철제 문서함이 도착한다." },
      { id: "act1_07", badge: "ACT I · DIVERGENCE 0.218940%", title: "제1장 : 수몰된 성당의 태엽성녀", desc: "지하 600미터 수몰된 제0시계탑으로 내려간 카일런은 수정 관 속에서 잠든 셀레스티아를 깨운다." },
      { id: "inter_01", badge: "INTERLUDE · DIVERGENCE 0.477184%", title: "막간 : 백야당의 커피와 열세 시의 태엽", desc: "백야당에서 잠시 숨을 고르며 13시 회중시계의 비밀과 시계호박 수송 명세서를 조사한다." },
      { id: "act2_01", badge: "ACT II · DIVERGENCE 0.512040%", title: "제2장 : 잿빛의 단죄자와 잊힌 이름들의 거리", desc: "제7구 시가지의 망각 유리화 참상을 목격하고, 첨탑 지붕 위에서 집행국장 이졸데와 격돌한다." },
      { id: "act3_01", badge: "ACT III · DIVERGENCE 0.774310%", title: "제3장 : 황금 화로의 심판정과 영원정지", desc: "제1시계탑 대심판정에서 수석 집정관 유스티니아와 대면하고 시계호박의 진실을 파헤친다." },
      { id: "flash_01", badge: "MEMORY RECORD #000 · LOOP #001", title: "단장(斷章) : 사백네 번의 겨울과 한 잔의 커피", desc: "라플라스의 의안을 통해 5년 전 제0시계탑 수몰 참사와 셀레스티아의 첫 번째 회귀를 관측한다." },
      { id: "act3_20", badge: "ACT IV FINALE · DIVERGENCE 0.998412%", title: "최종장 : 열세 번째 종소리가 울리는 곳 (엔딩 분기점)", desc: "종말까지 남은 시간 3분. 4개의 운명 엔딩(트루 / 셀레스티아 / 이졸데 / 루프)을 결정짓는 최종 선택." }
    ];
    let html = `<div class="grid-cards">`;
    chapters.forEach(ch => {
      html += `
        <div class="info-card" style="cursor:pointer;" data-jump="${ch.id}">
          <span class="badge">${ch.badge}</span>
          <h3>${ch.title}</h3>
          <p style="margin-bottom:12px;">${ch.desc}</p>
          <span style="color:#fbbf24; font-size:0.84rem;">⏳ 이 시간선으로 도약하기 →</span>
        </div>
      `;
    });
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModalBody.querySelectorAll(".info-card").forEach(card => {
      card.addEventListener("click", () => this.jumpToChapter(card.dataset.jump));
    });
    this.elModal.classList.add("active");
  }

  openBacklogModal() {
    this.elModalTitle.textContent = "관측 회상록 (DIALOGUE BACKLOG)";
    let html = `<div style="display:flex; flex-direction:column; gap:14px;">`;
    this.backlog.slice().reverse().forEach(entry => {
      html += `
        <div class="info-card" style="cursor:pointer;" data-node="${entry.id}">
          <span class="badge">${entry.speaker}</span>
          <p style="white-space:pre-wrap;">${entry.text}</p>
        </div>
      `;
    });
    html += `</div>`;
    this.elModalBody.innerHTML = html;
    this.elModalBody.querySelectorAll(".info-card").forEach(card => {
      card.addEventListener("click", () => {
        this.closeModal();
        this.renderNode(card.dataset.node);
      });
    });
    this.elModal.classList.add("active");
  }

  closeModal() {
    this.elModal.classList.remove("active");
  }

  updateQuickButtons() {
    document.getElementById("btn-auto").classList.toggle("active", this.autoMode);
    document.getElementById("btn-skip").classList.toggle("active", this.skipMode);
    document.getElementById("btn-nvl").classList.toggle("active", this.forceNVL);
  }

  bindEvents() {
    // Advance on stage click
    document.getElementById("adv-container").addEventListener("click", () => this.advance());
    document.getElementById("nvl-container").addEventListener("click", () => this.advance());
    document.getElementById("chapter-card").addEventListener("click", () => {
      this.elChapterCard.classList.remove("active");
    });

    // Keyboard shortcuts
    window.addEventListener("keydown", (e) => {
      if (this.elModal.classList.contains("active")) {
        if (e.key === "Escape") this.closeModal();
        return;
      }
      if (!this.elTitleScreen.classList.contains("hidden")) return;

      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        this.advance();
      } else if (e.key.toLowerCase() === "v") {
        this.forceNVL = !this.forceNVL;
        this.updateQuickButtons();
        this.renderNode(this.state.currentId);
      } else if (e.key.toLowerCase() === "a") {
        this.autoMode = !this.autoMode;
        this.updateQuickButtons();
        if (this.autoMode && !this.isTyping) this.advance();
      } else if (e.key.toLowerCase() === "s") {
        this.skipMode = !this.skipMode;
        this.updateQuickButtons();
        if (this.skipMode) this.advance();
      } else if (e.key.toLowerCase() === "l") {
        this.openBacklogModal();
      } else if (e.key.toLowerCase() === "c") {
        this.openCodexModal();
      } else if (e.key === "F5") {
        e.preventDefault();
        this.saveSlot(1);
      } else if (e.key === "F8") {
        e.preventDefault();
        this.loadSlot(1);
      }
    });

    // Quick Bar Buttons
    document.getElementById("btn-nvl").addEventListener("click", (e) => {
      e.stopPropagation();
      this.forceNVL = !this.forceNVL;
      this.updateQuickButtons();
      this.renderNode(this.state.currentId);
    });
    document.getElementById("btn-auto").addEventListener("click", (e) => {
      e.stopPropagation();
      this.autoMode = !this.autoMode;
      this.skipMode = false;
      this.updateQuickButtons();
      if (this.autoMode && !this.isTyping) this.advance();
    });
    document.getElementById("btn-skip").addEventListener("click", (e) => {
      e.stopPropagation();
      this.skipMode = !this.skipMode;
      this.autoMode = false;
      this.updateQuickButtons();
      if (this.skipMode) this.advance();
    });
    document.getElementById("btn-log").addEventListener("click", (e) => {
      e.stopPropagation();
      this.openBacklogModal();
    });
    document.getElementById("btn-qsave").addEventListener("click", (e) => {
      e.stopPropagation();
      this.saveSlot(1);
    });
    document.getElementById("btn-qload").addEventListener("click", (e) => {
      e.stopPropagation();
      this.loadSlot(1);
    });
    document.getElementById("btn-save").addEventListener("click", (e) => {
      e.stopPropagation();
      this.openSaveLoadModal("save");
    });
    document.getElementById("btn-load").addEventListener("click", (e) => {
      e.stopPropagation();
      this.openSaveLoadModal("load");
    });
    document.getElementById("btn-codex").addEventListener("click", (e) => {
      e.stopPropagation();
      this.openCodexModal();
    });
    document.getElementById("btn-flow").addEventListener("click", (e) => {
      e.stopPropagation();
      this.openFlowchartModal();
    });
    document.getElementById("btn-title").addEventListener("click", (e) => {
      e.stopPropagation();
      this.autoMode = false;
      this.skipMode = false;
      this.updateQuickButtons();
      this.elTitleScreen.classList.remove("hidden");
    });

    // Title Screen Menu
    document.getElementById("t-start").addEventListener("click", () => this.startNewGame());
    document.getElementById("t-load").addEventListener("click", () => this.openSaveLoadModal("load"));
    document.getElementById("t-flow").addEventListener("click", () => this.openFlowchartModal());
    document.getElementById("t-codex").addEventListener("click", () => this.openCodexModal());
    document.getElementById("t-gallery").addEventListener("click", () => this.openGalleryModal());
    document.getElementById("t-music").addEventListener("click", () => this.openMusicModal());

    document.getElementById("modal-close-btn").addEventListener("click", () => this.closeModal());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.VN_ENGINE = new ChronosAriaEngine();
});
