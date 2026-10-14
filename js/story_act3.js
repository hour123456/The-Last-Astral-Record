// -*- coding: utf-8 -*-
/**
 * 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
 * ACT III, ACT IV & 4 FULL ENDINGS Script
 */

window.STORY_ACT3 = [
  // =========================================================================
  // ACT III : 황금 화로의 심판정과 사백네 번째 루프의 진실
  // =========================================================================
  {
    id: "act3_01",
    chapter: "ACT III",
    chapterTitle: "제3장 : 황금 화로의 심판정과 사백네 번째 기적",
    chapterSub: "THE TRIBUNAL OF THE GOLDEN FURNACE & THE 404TH LOOP",
    mode: "nvl",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    fx: "zoom_in",
    sfx: "sfx_bell_toll",
    hud: { divergence: "0.774310%", countdown: "D-01:15:00", location: "제1시계탑 최상층 · 대심판정 황금 화로" },
    chars: {},
    speaker: null,
    text: "종말까지 한 시간 십오 분.\n\n이졸데가 남긴 암호 『동백꽃』을 통해 제1시계탑의 중추 승강기를 돌파한 우리는, 마침내 에텔가르드 권력의 심장부인 대심판정(Grand Tribunal Hall)의 거대한 흑대리석 회랑에 발을 들였다.\n\n회랑 중앙에는 건물 십 층 높이에 달하는 유리 용광로가 솟아 있었고, 그 안에서는 수백만 갤런의 액체화된 황금빛 『시계호박(Chronos-Amber)』이 소용돌이치며 타오르고 있었다."
  },
  {
    id: "act3_02",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    fx: "zoom_reset",
    sfx: "sfx_heartbeat",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "enter" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "enter" }
    },
    speaker: "녹스",
    text: "「……세상에. 소장님, 저 유리 용광로 속에서 들리는 소리가 느껴지십니까? 저건 광물이 타는 소리가 아닙니다. 수십만 명의 웃음소리, 울음소리, 자장가 소리가 한데 뒤엉켜 비명을 지르고 있어요.」"
  },
  {
    id: "act3_03",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      center: { id: "justinia", sprite: "assets/images/char_justinia_normal.png", anim: "enter" }
    },
    speaker: "유스티니아",
    speakerTitle: "칠대 시계탑 수석 집정관 · 영원정지의 설계자",
    text: "「비명이 아니라 합창이란다, 방황하는 어린 양들아. 유한한 육체에서 해방되어 영원한 호박(琥珀)의 성소로 귀의하는 축복의 찬가이지.」"
  },
  {
    id: "act3_04",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      center: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: null,
    text: "황금 화로의 계단 위에서 백금빛 왕관 땋은 머리를 한 여인이 천천히 내려왔다.\n그녀의 등 뒤에는 중력을 무시한 채 회전하는 세 겹의 황금 아스트롤라베 광륜이 성스러운 후광처럼 떠 있었다.\n칠대 시계탑의 수석 집정관, 아키텍트 유스티니아였다."
  },
  {
    id: "act3_05",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      center: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: "카일런",
    text: "「유스티니아 각하…! 당신, 제정신입니까? 자정이 되면 방벽을 역전시켜 팔십만 시민 전원을 유리 조각상으로 만들 셈입니까?!」"
  },
  {
    id: "act3_06",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      center: { id: "justinia", sprite: "assets/images/char_justinia_normal.png", anim: "pulse" }
    },
    speaker: "유스티니아",
    text: "「그렇다면 묻겠다, 카일런 반 에버그린. 너는 밤하늘의 『창백한 테』가 매년 12퍼센트씩 팽창하고 있다는 사실을 알고 있느냐? 지금처럼 기억을 태워 방벽을 유지한다 해도, 길어야 7년 뒤면 에텔가르드의 모든 인과 연료는 고갈되고 인류는 고통 속에 전멸한다.」"
  },
  {
    id: "act3_07",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      center: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: "유스티니아",
    text: "「하지만 오늘 밤 『영원정지(Grand Freeze)』를 통해 도시 전체의 시간을 가장 행복한 꿈속에 결정화시키면——인류는 배고픔도, 노화도, 사랑하는 이를 잊어버리는 상실의 아픔도 없이 영원불멸의 예술품으로 남게 된다. 이것보다 완전한 구원이 어디에 있지?」"
  },
  {
    id: "act3_08",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_battle.png" },
      right: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「틀렸어요, 유스티니아 님! 내일이 오지 않는 박제된 행복은 구원이 아니에요! 아픔과 슬픔이 있더라도, 누군가의 손을 잡고 다음 페이지의 아침을 넘기는 것만이 살아 있다는 증거란 말이에요!」"
  },
  {
    id: "act3_09",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "amber_embers",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_battle.png" },
      right: { id: "justinia", sprite: "assets/images/char_justinia_normal.png", anim: "pulse" }
    },
    speaker: "유스티니아",
    text: "「가엾구나, 『제0호 관측체 셀레스티아』. 그렇게 내일을 외치는 네가… 정작 옆에 서 있는 그 남자에게 네 진짜 정체를 말하지 못하는 이유는 무엇이냐?」"
  },
  {
    id: "act3_10",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    sfx: "sfx_heartbeat",
    fx: "vignette_pulse",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "shake" },
      right: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「그만하세요, 유스티니아 님…! 부디 그것만큼은—!」"
  },
  {
    id: "act3_11",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "justinia", sprite: "assets/images/char_justinia_normal.png" }
    },
    speaker: "유스티니아",
    text: "「카일런 반 에버그린. 네 왼쪽 눈에 박힌 『라플라스』의 출력 제한을 끝까지 풀어 보아라. 네가 오늘 처음 만났다고 믿고 있는 그 소녀의 회중시계에… 몇 번의 죽음이 새겨져 있는지 똑똑히 보란 말이다.」"
  },
  {
    id: "act3_12",
    mode: "nvl",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    fx: "glitch_rewind",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.892041%", countdown: "D-00:42:00", location: "라플라스 심층 관측 · 기억의 역류" },
    chars: {},
    speaker: null,
    text: "우우우웅——!\n\n내 왼쪽 의안 라플라스가 핏빛 눈물을 흘리며 과부하를 일으켰다.\n셀레스티아의 가슴에서 빛나는 13시 회중시계 너머로, 차마 인간이 감당할 수 없는 아득한 시간의 지층이 해일처럼 내 뇌수로 쏟아져 들어왔다.\n\n제1회차 세계선 : 제0시계탑 붕괴. 나를 감싸다 심장이 꿰뚫려 죽은 연구원 소녀——셀레스티아.\n제42회차 세계선 : 나를 살리기 위해 자신의 육체를 시계탑의 태엽 코어로 개조한 셀레스티아.\n제189회차 세계선 : 시간 역행의 대가로 내 기억 속에서 자신의 이름이 지워지는 것을 보며 홀로 오열하던 셀레스티아.\n\n그리고——이번이 『사백네 번째(404th)』의 72시간이었다.",
    next: "flash_01"
  },
  {
    id: "act3_13",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    sfx: "sfx_heartbeat",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "shake" }
    },
    speaker: "카일런",
    text: "「……셀레스티아. 너, 처음부터 미래에서 온 타인이 아니었어. 5년 전 제0시계탑에서 나와 함께 별을 관측하고… 나와 미래를 약속했던 내 약혼자였잖아…!」"
  },
  {
    id: "act3_14",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「내가 널 구하려고 제0시계탑에 내려갔던 게 아니었어… 네가 죽어가는 나를 살리기 위해 사백세 번이나 이 사흘을 되감으며, 네가 존재했다는 기억을 내 머릿속에서 스스로 태워버렸던 거였어…?!」"
  },
  {
    id: "act3_15",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "셀레스티아",
    text: "「……기억해 내버리셨군요. 바보 같은 카일런 님… 절 기억해 내면, 제가 마지막에 사라질 때 당신이 또다시 아파하실 텐데.」"
  },
  {
    id: "act3_16",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: null,
    text: "셀레스티아의 보랏빛 눈동자에서 굵은 눈물방울이 흘러내려, 손끝에서 하얀 유리 결정으로 부서졌다.\n사백네 번의 루프 끝에, 그녀의 육체 또한 이미 망각 유리화의 최종 단계에 이르러 있었던 것이다."
  },
  {
    id: "act3_17",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「괜찮아요, 카일런. 당신이 절 기억하지 못하는 사백세 번의 시간선 동안에도… 당신은 단 한 번의 예외도 없이 제 손을 잡아 주셨어요. 처음 만나는 낯선 소녀일 뿐인 저를 위해 매번 목숨을 걸어 주셨으니까… 저는 그것만으로도 충분히 행복했단 말이에요.」"
  },
  {
    id: "act3_18",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    sfx: "sfx_sword_clash",
    fx: "flash_crimson",
    hud: { divergence: "0.948102%", countdown: "D-00:15:00", location: "제1시계탑 대심판정 · 최후의 공방" },
    chars: {
      left: { id: "isolde", sprite: "assets/images/char_isolde_normal.png", anim: "enter" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "이졸데",
    text: "「울고 있을 시간 없다, 두 사람 다!! 대심판정 문을 부수고 들어왔다! 유스티니아 각하, 당신의 그 기만적인 『영원정지』는 시간심문국 집행국장인 나의 이름으로 여기서 끝내겠다!」"
  },
  {
    id: "act3_19",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    chars: {
      left: { id: "isolde", sprite: "assets/images/char_isolde_normal.png" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "pulse" }
    },
    speaker: "녹스",
    text: "「하하, 우리 국장님이 제때 와주셨군요! 소장님, 황금 화로의 중앙 역류 밸브에 제0시계탑의 공명 회로를 연결했습니다! 이졸데 국장님과 제가 유스티니아의 자동인형 근위대를 막는 동안, 두 분이 화로의 심장부에서 최종 관측을 끝내십시오!」"
  },
  {
    id: "act3_20",
    chapter: "ACT IV : FINALE",
    chapterTitle: "최종장 : 열세 번째 종소리가 울리는 곳",
    chapterSub: "WHERE THE THIRTEENTH BELL TOLLS — FATE DIVERGENCE",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    sfx: "sfx_bell_toll",
    fx: "heavy_shake",
    hud: { divergence: "0.998412%", countdown: "D-00:03:00", location: "황금 화로 중심부 · 인과 수렴점" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_battle.png" }
    },
    speaker: "셀레스티아",
    text: "「자정이 되기까지 앞으로 3분…! 카일런 님, 이제 결정해야 해요! 화로의 에너지를 어떻게 처리하느냐에 따라 이 세계선의 결말이 영원히 확정됩니다!」",
    choices: [
      {
        text: "【여명 세계선 돌파】 내 『라플라스 의안』에 기록된 모든 잊힌 자들의 기억과 셀레스티아의 13시 시계를 공명시켜 밤하늘의 『창백한 테』 자체를 파쇄한다",
        next: "end_true_01",
        effects: { divergenceDelta: 0.250, celestiaResonance: 30, isoldeBond: 20, flag: "true_dawn" }
      },
      {
        text: "【셀레스티아 루트】 세계를 구하는 대가로 네가 사라지게 둘 순 없다. 화로의 동력을 제0시계탑으로만 돌려 너와 나만의 영원한 성역을 만든다",
        next: "end_celestia_01",
        effects: { divergenceDelta: 0.010, celestiaResonance: 40, flag: "glass_garden" }
      },
      {
        text: "【이졸데 루트】 셀레스티아의 마지막 아리아로 황금 화로를 파괴하고, 이졸데와 함께 시계탑 없는 인간의 도시를 재건한다",
        next: "end_isolde_01",
        effects: { divergenceDelta: 0.045, isoldeBond: 40, flag: "crimson_camellia" }
      },
      {
        text: "【루프 엔딩】 차마 방아쇠를 당기지 못하고 망설인다 (태엽을 다시 감는다)",
        next: "end_loop_01",
        effects: { divergenceDelta: -0.900, flag: "loop_reset" }
      }
    ]
  },

  // =========================================================================
  // ENDING A [TRUE END] : 새벽을 여는 열세 번째 종소리 (1.048596%)
  // =========================================================================
  {
    id: "end_true_01",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_06",
    weather: "dawn_petals",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "1.048596%", countdown: "13:00:00 [DAWN]", location: "여명 세계선 · 제1시계탑 정상" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_battle.png", anim: "shake" }
    },
    speaker: "카일런",
    text: "「셀레스티아, 넌 사백네 번이나 홀로 짐을 짊어졌어. 하지만 이번엔 네 기억을 태우지 마. 내 왼쪽 눈——『라플라스』 속에 보관된 지난 5년간의 모든 잊힌 사람들의 기억과 황금 화로의 시계호박을 전부 해방시켜 하늘로 쏘아 올리는 거야!」"
  },
  {
    id: "end_true_02",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_06",
    weather: "dawn_petals",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_battle.png" }
    },
    speaker: "셀레스티아",
    text: "「카일런 님?! 하지만 그러면 당신의 왼쪽 의안이 부서지고, 5년간 버텨온 반동이 한꺼번에—!」"
  },
  {
    id: "end_true_03",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_06",
    weather: "dawn_petals",
    speaker: "카일런",
    text: "「과거의 잔향을 보는 눈 따윈 이제 없어도 돼! 내 오른쪽 눈으로… 살아 있는 너와 함께 내일 아침의 해가 뜨는 걸 볼 수만 있다면!」"
  },
  {
    id: "end_true_04",
    mode: "nvl",
    bg: "bg_title_clocktower",
    bgm: "bgm_06",
    weather: "dawn_petals",
    fx: "flash_white",
    sfx: "sfx_bell_toll",
    speaker: null,
    text: "뎅——————!!\n\n자정을 넘어선 시계탑의 종이 열두 번을 울리고, 이어서 세상에 존재하지 않던 『열세 번째 종소리』가 성도 에텔가르드의 하늘을 뒤흔들었다.\n\n내가 뽑아낸 청금석 의안 라플라스와 셀레스티아의 13시 회중시계가 하나로 맞물리는 순간, 황금 화로에 갇혀 있던 수백만 시민의 기억이 찬란한 금빛 은하수가 되어 밤하늘로 치솟았다.\n\n그 거대한 인과의 역류는 삼백 년간 하늘을 가로막고 있던 『창백한 테』를 정면으로 꿰뚫었다.\n소리 없는 성회를 뿌리던 죽은 달의 고리가 유성우처럼 찬란하게 부서져 내리고——"
  },
  {
    id: "end_true_05",
    mode: "adv",
    bg: "cg_true_ending_dawn",
    bgm: "bgm_06",
    weather: "dawn_petals",
    fx: "zoom_in",
    sfx: "sfx_ui_confirm",
    unlockCG: "cg_true_ending_dawn",
    chars: {},
    speaker: null,
    text: "삼백 년 만의 첫 번째 태양이 지평선 너머로 눈부신 황금빛 여명을 터뜨렸다.\n\n유리화되어 사라졌던 사람들의 기억이 따스한 봄비처럼 도시 위로 되돌아왔고, 언덕 위를 가득 메운 하얀 별빛 백합 꽃밭 한가운데서——소멸하지 않은 셀레스티아가 아침 햇살을 받으며 내게로 뒤돌아보았다."
  },
  {
    id: "end_true_06",
    mode: "adv",
    bg: "cg_true_ending_dawn",
    bgm: "bgm_06",
    weather: "dawn_petals",
    speaker: "셀레스티아",
    speakerTitle: "여명을 맞이한 소녀",
    text: "「보세요, 카일런…! 열세 시를 가리키던 바늘이 드디어 움직이기 시작했어요. 사백네 번의 밤을 건너… 마침내 우리가 함께 맞이하는 첫 번째 아침이에요!」"
  },
  {
    id: "end_true_07",
    mode: "nvl",
    bg: "cg_true_ending_dawn",
    bgm: "bgm_06",
    weather: "dawn_petals",
    endingBadge: "TRUE ENDING : 새벽을 여는 열세 번째 종소리 (DIVERGENCE 1.048596%)",
    speaker: null,
    text: "바람에 흩날리는 은빛 머리카락 사이로, 아침 햇살을 머금은 그녀의 눈물이 보석처럼 반짝였다.\n나는 기꺼이 그 따뜻한 손을 맞잡고, 멈춰 있던 우리의 다음 페이지를 향해 걸음을 옮겼다.\n\n하늘에서는 더 이상 차가운 성회가 내리지 않았다.\n\n——《창백한 별의 레퀴엠 : 제0시계탑의 관측자》\n【TRUE ENDING : 새벽을 여는 열세 번째 종소리 — Fin.】"
  },

  // =========================================================================
  // ENDING B [CELESTIA END] : 유리 정원의 두 사람 (0.999999%)
  // =========================================================================
  {
    id: "end_celestia_01",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "flash_cyan",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.999999%", countdown: "ETERNAL", location: "제0시계탑 · 영원한 유리의 정원" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「세계를 구하기 위해 네가 사백네 번째로 부서져야 한다면… 난 그런 구원 따위 거절하겠어. 황금 화로의 동력을 제0시계탑의 결계로만 돌린다. 지상의 시간이 멈추더라도, 이 수몰된 정원 속에서 너와 함께 살아가겠어.」"
  },
  {
    id: "end_celestia_02",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: "셀레스티아",
    text: "「아아, 카일런 님… 당신은 어쩜 그렇게 마지막까지 잔인하고도 다정한 분이신가요. …네, 좋아요. 이제 어디로도 가지 않을게요. 영원히 멈춘 이 열두 시 오십구 분의 정원에서, 영원히 당신 곁에 있을게요.」"
  },
  {
    id: "end_celestia_03",
    mode: "nvl",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    endingBadge: "CELESTIA ENDING : 유리 정원의 두 사람 (DIVERGENCE 0.999999%)",
    speaker: null,
    text: "지상의 성도 에텔가르드는 고요한 유리의 잠에 빠져들었고, 지하 육백 미터 아래의 제0시계탑에는 두 사람만을 위한 따뜻한 오르골 소리가 영원토록 울려 퍼졌다.\n비록 새벽은 오지 않았으나, 두 사람의 손끝만큼은 시리지 않았다.\n\n——《창백한 별의 레퀴엠 : 제0시계탑의 관측자》\n【CELESTIA ENDING : 유리 정원의 두 사람 — Fin.】"
  },

  // =========================================================================
  // ENDING C [ISOLDE END] : 잿더미 위에 피는 붉은 동백 (1.012400%)
  // =========================================================================
  {
    id: "end_isolde_01",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_05",
    weather: "amber_embers",
    fx: "flash_white",
    sfx: "sfx_glass_shatter",
    hud: { divergence: "1.012400%", countdown: "D+01:00:00", location: "무너진 제1시계탑 광장 · 새벽의 잿더미" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "셀레스티아",
    text: "「고마웠어요, 카일런 님. 그리고 이졸데 님. 제 마지막 『아리아』로 황금 화로의 영원정지 술식을 완전히 소각했어요. 제 태엽은 여기서 멈추지만… 두 분이라면 시계탑의 거짓된 보호 없이도 진짜 인간의 내일을 만들어 가실 수 있을 거예요.」"
  },
  {
    id: "end_isolde_02",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_02",
    weather: "dawn_petals",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png", anim: "enter" }
    },
    speaker: "이졸데",
    text: "「……그 소녀가 남긴 13시의 태엽 덕분에 도시의 유리화가 멈췄어. 칠대 시계탑은 무너졌고 앞으로의 재건은 험난하겠지만… 카일런, 내 깨진 회중시계를 다시 고쳐 주겠어? 이번엔 절대 기억을 잃어버리지 않을 테니까.」"
  },
  {
    id: "end_isolde_03",
    mode: "nvl",
    bg: "bg_city_street",
    bgm: "bgm_02",
    weather: "dawn_petals",
    endingBadge: "ISOLDE ENDING : 잿더미 위에 피는 붉은 동백 (DIVERGENCE 1.012400%)",
    speaker: null,
    text: "무너진 시계탑의 잿더미 위로 차가운 눈이 녹아내리고, 이졸데의 붉은 리본을 닮은 동백꽃 한 송이가 돌틈에서 피어났다.\n나는 그녀가 건넨 낡은 황동 회중시계를 받아 들며, 오랜 소꿉친구의 손을 굳게 잡았다.\n\n——《창백한 별의 레퀴엠 : 제0시계탑의 관측자》\n【ISOLDE ENDING : 잿더미 위에 피는 붉은 동백 — Fin.】"
  },

  // =========================================================================
  // ENDING D [LOOP / BAD END] : 망각의 태엽은 다시 감긴다 (0.041829%)
  // =========================================================================
  {
    id: "end_loop_01",
    mode: "adv",
    bg: "bg_inquisition_hall",
    bgm: "bgm_03",
    weather: "star_ash",
    fx: "glitch_rewind",
    sfx: "sfx_glass_shatter",
    hud: { divergence: "0.041829%", countdown: "D-00:00:00", location: "제1시계탑 · 영원정지 임계점" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "shake" }
    },
    speaker: "셀레스티아",
    text: "「아… 늦어버렸어요. 황금 화로의 역류가 이미 도시 전체를 덮쳤어요! 안 돼, 카일런 님만큼은 유리화되게 둘 수 없어요…! 『성흔연주 : 아리아』 최종악장——제 사백다섯 번째 태엽을 감습니다!」"
  },
  {
    id: "end_loop_02",
    mode: "nvl",
    bg: "bg_atelier",
    bgm: "bgm_01",
    weather: "rain_ash",
    fx: "glitch_rewind",
    sfx: "sfx_worldline_shift",
    endingBadge: "LOOP ENDING #405 : 망각의 태엽은 다시 감긴다 (DIVERGENCE 0.041829%)",
    speaker: null,
    text: "째깍, 째깍, 째깍——.\n\n시야가 새하얀 유리 파편으로 뒤덮였다가 정신을 차렸을 때, 나는 백야당의 작업대 앞에 앉아 핀셋을 쥐고 있었다.\n창밖에는 비와 성회가 내리고, 커피 포트에서는 쌉싸름한 향기가 피어올랐다.\n\n어째서일까. 누군가 아주 소중한 은발의 소녀가 내 이름을 부르며 울고 있었던 것 같은데, 그 소녀의 이름이 도무지 떠오르지 않는다.\n\n그때, 딸랑——하며 백야당의 현관 종이 다시 울렸다.\n\n——《창백한 별의 레퀴엠 : 제0시계탑의 관측자》\n【LOOP ENDING : 망각의 태엽은 다시 감긴다 — Fin.】"
  }
];
