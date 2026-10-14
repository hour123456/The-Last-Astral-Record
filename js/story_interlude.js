// -*- coding: utf-8 -*-
/**
 * 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
 * INTERLUDE Script : 백야당의 심야 다과회와 세 개의 단서
 * Interactive Atelier Investigation & Character Bonding Chapter
 */

window.STORY_INTERLUDE = [
  {
    id: "inter_01",
    chapter: "INTERLUDE",
    chapterTitle: "막간 : 백야당의 커피와 열세 시의 태엽",
    chapterSub: "MIDNIGHT COFFEE AT THE WHITE NIGHT ATELIER",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    fx: "zoom_reset",
    sfx: "sfx_clock_tick",
    hud: { divergence: "0.477184%", countdown: "D-64:20:00", location: "제7구 안개 골목 · 고물 시계방 『백야당』" },
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "enter" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "enter" }
    },
    speaker: "녹스",
    text: "「세상에나. 지하 수몰 구역에 내려가신다더니, 정말로 전설 속의 잠자는 숲속의 성녀님을 모시고 올라오실 줄은 몰랐습니다, 소장님.」"
  },
  {
    id: "inter_02",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「처음 뵙겠습니다, 녹스 씨. 아니… 『망각 수집가』 닥터 녹턴이라고 부르는 편이 맞을까요? 백야당의 지하 서고를 관리해 주셔서 늘 감사하고 있었어요.」"
  },
  {
    id: "inter_03",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "pulse" }
    },
    speaker: "녹스",
    text: "「오호, 제 암시장 가명까지 알고 계시다니 영광이군요. 소장님, 이 아가씨 보통내기가 아닙니다. 눈동자 속에 돌아가고 있는 저 황금 초침… 고대 제0시계탑의 직계 공명 각인이 틀림없어요.」"
  },
  {
    id: "inter_04",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「바깥의 심문국 순찰대가 움직이기 전까지 잠시 숨을 고르자. 마침 사이폰에 물이 끓었군. 셀레스티아, 커피 마실 줄 아나? 설탕은 얼마나 넣지?」"
  },
  {
    id: "inter_05",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "셀레스티아",
    text: "「각설탕 두 개에, 계피 가루를 아주 조금만 뿌려 주세요. 카일런 님이 내려 주시는 에티오피아산 다크 로스트는… 그렇게 마실 때 가장 따뜻하니까요.」"
  },
  {
    id: "inter_06",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    speaker: null,
    text: "찻잔을 건네려던 내 손이 다시 한번 멈칫했다.\n계피 가루를 살짝 얹은 각설탕 두 개.\n그것은 내가 5년 전, 기억도 나지 않는 누군가를 위해 매일 밤 커피를 내릴 때마다 무의식적으로 준비하곤 하던 버릇과 정확히 일치했다."
  },
  {
    id: "inter_07",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「……출발하기 전에 몇 가지 확인해 둘 단서가 있어. 작업대 위에서 무엇부터 조사해 볼까?」",
    choices: [
      {
        text: "【단서 1】 셀레스티아의 『13시 회중시계』 내부 기구를 루페로 정밀 감정한다",
        next: "inter_watch_01",
        effects: { divergenceDelta: 0.035, celestiaResonance: 15, flag: "examined_13watch" }
      },
      {
        text: "【단서 2】 녹스가 입수한 『제1시계탑 시계호박 수송 명세서』의 암호를 해독한다",
        next: "inter_amber_01",
        effects: { divergenceDelta: 0.035, isoldeBond: 10, flag: "decoded_manifest" }
      },
      {
        text: "【단서 3】 창밖의 성회 농도를 측정하고 즉시 제7구 시가지로 정찰을 나간다",
        next: "act2_01",
        effects: { divergenceDelta: 0.015 }
      }
    ]
  },
  {
    id: "inter_watch_01",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_01",
    weather: "rain_ash",
    sfx: "sfx_clock_tick",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: null,
    text: "나는 셀레스티아가 건넨 13시 회중시계를 작업대 위에 올려놓고 루페로 내부 무브먼트를 들여다보았다.\n시계장인으로서 수천 개의 시계를 고쳐 보았지만, 이런 구조는 생전 처음이었다.\n\n태엽의 중심축에 강철 스프링 대신, 머리카락보다 가느다란 백금빛 결정 섬유——마치 살아 있는 인간의 신경망을 결정화한 듯한 코어가 맥동하고 있었다."
  },
  {
    id: "inter_watch_02",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_01",
    weather: "rain_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "카일런",
    text: "「셀레스티아… 이 회중시계의 태엽 축에 새겨진 미세한 눈금들, 설마 시간을 되감을 때마다 하나씩 깎여 나가는 구조인가? 이미 사백 번 넘게 마모된 흔적이 남아 있어.」"
  },
  {
    id: "inter_watch_03",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_01",
    weather: "rain_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「역시 명장(名匠)이시네요, 카일런 님. 시계는 거짓말을 하지 않으니까요. 하지만 걱정하지 마세요. 마지막 눈금 하나가 남았을 때, 우리가 함께 열세 번째 시간을 열면 되니까요.」",
    next: "act2_01"
  },
  {
    id: "inter_amber_01",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    sfx: "sfx_page_turn",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "녹스",
    text: "「이쪽이 오늘 새벽 제가 심문국 수송열차에서 빼돌린 『특등급 시계호박』 명세서입니다. 산지 표기란을 보십시오. 광산 번호가 아니라 『제0구 무명가 거주민 등록번호』로 적혀 있습니다.」"
  },
  {
    id: "inter_amber_02",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「광산에서 캐낸 광물이 아니라… 하층민들의 생애 기억을 통째로 추출해서 시계탑의 연료로 쓰고 있었다는 결정적 물증이군. 좋아, 이 명세서를 들고 제7구 시가지의 현장을 확인하러 가자.」",
    next: "act2_01"
  }
];
