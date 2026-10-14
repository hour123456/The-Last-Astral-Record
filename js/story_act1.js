// -*- coding: utf-8 -*-
/**
 * 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
 * PROLOGUE & ACT I Script
 * Literary Korean Light Novel / Visual Novel Script
 */

window.STORY_ACT1 = [
  // =========================================================================
  // PROLOGUE : 백색 낙하의 밤, 열세 시를 가리키는 바늘
  // =========================================================================
  {
    id: "pro_01",
    chapter: "PROLOGUE",
    chapterTitle: "프롤로그 : 백색 낙하의 밤",
    chapterSub: "THE NIGHT OF THE WHITE FALL — DIVERGENCE 0.041829%",
    mode: "nvl",
    bg: "bg_title_clocktower",
    bgm: "bgm_01",
    sfx: "sfx_bell_toll",
    weather: "star_ash",
    fx: "zoom_in",
    hud: { divergence: "0.041829%", countdown: "D-72:00:00", location: "성도 에텔가르드 · 상공 관측역" },
    unlockCodex: ["pale_ring", "star_ash"],
    speaker: null,
    text: "하늘이 부서진 지 올해로 삼백 년째가 된다.\n\n밤하늘 한가운데 걸린 『창백한 테』는 죽은 달이 남긴 유골함이었다. 부서진 백색 결정의 고리로부터 오늘 밤도 소리 없는 눈이 내린다.\n\n사람들은 그것을 『성회(星灰)』라 불렀다."
  },
  {
    id: "pro_02",
    mode: "nvl",
    bg: "bg_title_clocktower",
    weather: "star_ash",
    sfx: "sfx_clock_tick",
    speaker: null,
    text: "보통의 눈은 체온에 닿으면 물이 되어 흘러내린다.\n하지만 성회는 손바닥 위에서 녹지 않는다. 그 대신 손바닥의 주인이 품고 있던 『어제의 기억』을 한 줌씩 갉아먹고 사라진다.\n\n처음에는 사소한 것부터 잊힌다.\n아침에 마신 홍차의 향기, 어릴 적 길렀던 개의 이름, 오래전 헤어진 연인의 눈동자 색깔.\n\n그리고 마침내 자기 자신의 이름마저 성회에 씻겨 내려가는 날——"
  },
  {
    id: "pro_03",
    mode: "nvl",
    bg: "bg_title_clocktower",
    weather: "star_ash",
    fx: "flash_white",
    sfx: "sfx_glass_shatter",
    unlockCodex: ["vitrification", "aethelgard"],
    speaker: null,
    text: "인간은 한 송이의 투명한 유리꽃으로 굳어 부서진다.\n『망각 유리화(Lacuna Vitrification)』.\n\n세상의 구 할이 하얀 유리의 사막으로 변해버린 이 종말의 시대에서, 인류가 살아남기 위해 세운 최후의 방주(方舟)가 바로 이곳——일곱 개의 거대 천문시계탑이 지키는 성도(星都) 에텔가르드였다.\n\n…적어도, 표면상의 역사책에는 그렇게 적혀 있었다."
  },
  {
    id: "pro_04",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_02",
    weather: "rain_ash",
    fx: "zoom_reset",
    sfx: "sfx_clock_tick",
    hud: { divergence: "0.041829%", countdown: "D-71:55:00", location: "제7구 안개 골목 · 고물 시계방 『백야당』" },
    chars: {},
    speaker: "카일런",
    speakerTitle: "백야당 주인 · 전직 특무 감사관",
    text: "「……삼번 톱니의 마모율이 영점 칠 밀리미터. 태엽 장력은 아직 살아 있군. 이 정도면 주인이 죽기 전까지는 그럭저럭 굴러가겠어.」"
  },
  {
    id: "pro_05",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    speaker: null,
    text: "접안 확대경(루페)을 낀 오른쪽 눈을 가늘게 좁히며, 나는 핀셋 끝으로 손톱만 한 황동 이스케이프먼트를 맞물렸다.\n\n찰칵, 째깍, 째깍——.\n\n멈춰 있던 구식 회중시계의 초침이 마치 막힌 숨을 토해내듯 다시 맥박을 되찾았다. 작업대 한구석에 놓인 알코올램프 위에서는 사이폰 포트 속의 검은 커피가 보글거리며 쌉싸름한 헤이즐넛 향기를 공방 안으로 퍼뜨리고 있었다."
  },
  {
    id: "pro_06",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "enter" }
    },
    speaker: "녹스",
    speakerTitle: "백야당의 조수 · 망각 수집가",
    text: "「오호라, 또 돈 안 되는 고물 시계의 수명을 늘려 주셨군요, 우리 자비로운 카일런 소장님. 수리비로는 이번에도 구멍 난 동전 세 닢과 『고맙습니다』 한 마디를 받으실 예정입니까?」"
  },
  {
    id: "pro_07",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「동전 다섯 닢에 설탕 두 봉지까지 받기로 했다, 녹스. 제7구 하층민들한테 설탕 두 봉지가 얼마나 귀한 사치품인지 네놈 같은 암시장 연금술사가 알 턱이 있나.」"
  },
  {
    id: "pro_08",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "pulse" }
    },
    speaker: "녹스",
    text: "「하하, 그러시겠죠. 하지만 소장님이 방금 고친 그 은장 시계의 주인인 제빵사 영감님은… 이미 사흘 전에 『망각 유리화』 판정을 받고 격리 구역으로 실려 갔는걸요.」"
  },
  {
    id: "pro_09",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    sfx: "sfx_heartbeat",
    fx: "vignette_pulse",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: null,
    text: "핀셋을 쥐고 있던 내 손끝이 일순 멈칫했다.\n\n창밖을 두드리는 빗물 사이로 창백한 성회 입자가 아치형 유리창에 달라붙었다가 스르르 녹아내렸다. 제빵사 한스 영감. 매일 새벽 구운 호밀빵 냄새를 풍기며 공방 앞을 지나가던 노인이었다."
  },
  {
    id: "pro_10",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "녹스",
    text: "「오늘 아침 그 빵집 앞을 지나오는데, 영감님의 친딸조차 이렇게 말하더군요. 『이상하다, 왜 우리 집 부엌에 남의 남자 노인네 외투가 걸려 있지?』라고요. 시계를 찾아갈 사람은 이제 이 도시 어디에도 없습니다.」"
  },
  {
    id: "pro_11",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    unlockCodex: ["laplace_eye"],
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「……아니, 한 명은 기억하고 있어.」"
  },
  {
    id: "pro_12",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: null,
    text: "내가 검은 안대 아래의 왼쪽 눈꺼풀을 살짝 들어 올리자, 청금석으로 깎아 만든 미세한 태엽 홍채——『역광의 의안 : 라플라스』가 차가운 푸른 인광을 토해냈다.\n\n내 왼쪽 시야 속에서, 방금 수리를 마친 은장 회중시계 위로 희미한 은백색 실루엣이 겹쳐 보였다. 밀가루 묻은 앞치마를 두른 노인이 인자하게 웃으며 시계 뚜껑을 어루만지는 잔향(Echo)이었다."
  },
  {
    id: "pro_13",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「세상이 전부 그 사람을 지워버렸다면, 적어도 고장 난 시계 하나쯤은 그 사람이 살았던 시간을 증언해 줘야지. 그게 내가 이 구석진 골목에서 시계방을 여는 이유니까.」"
  },
  {
    id: "pro_14",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "pulse" }
    },
    speaker: "녹스",
    text: "「지독한 감상주의자시군요. 그 왼쪽 의안의 신경 부하 때문에 매일 밤 진통제를 세 병씩 들이켜면서 말입니다. …그런데 소장님, 오늘 밤 손님은 한스 영감님의 유령만이 아닌 것 같습니다만.」"
  },
  {
    id: "pro_15",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    sfx: "sfx_bell_toll",
    fx: "shake",
    chars: {},
    speaker: null,
    text: "딸랑——.\n\n바람 한 점 들어오지 않던 백야당의 현관 종이 기이한 불협화음을 내며 울렸다.\n아니, 울린 것은 현관의 종만이 아니었다.\n\n공방 벽면을 가득 채운 삼백여 개의 괘종시계와 회중시계들이——태엽이 감기지 않아 수년 전부터 멈춰 있던 고장 난 시계들까지 일제히 미친 듯이 역방향으로 돌아가기 시작했다!"
  },
  {
    id: "pro_16",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.110492%", countdown: "D-71:50:00", location: "제7구 안개 골목 · 고물 시계방 『백야당』" },
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "shake" }
    },
    speaker: "녹스",
    text: "「잠깐, 이 인과 파장은 뭐죠?! 공방 내부의 시간 밀도가 뒤틀리고 있습니다! 소장님, 작업대 위를 보십시오!」"
  },
  {
    id: "pro_17",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    sfx: "sfx_clock_tick",
    chars: {},
    speaker: null,
    text: "작업대 한가운데, 조금 전까지만 해도 비어 있던 벨벳 천 위에 물기가 뚝뚝 떨어지는 검은 철제 문서함 하나가 놓여 있었다.\n\n문서함 표면에 양각된 문장을 본 순간, 내 심장이 차갑게 내려앉았다.\n거꾸로 맞물린 열세 개의 톱니바퀴와 부러진 초침.\n\n5년 전, 내 손으로 수장시켰고 제국 역사에서 영구 말소되었던 금기의 문장——『제0시계탑(The Zeroth Spire)』의 봉인이었다."
  },
  {
    id: "pro_18",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    unlockCodex: ["zeroth_spire"],
    speaker: "카일런",
    text: "「……말도 안 돼. 제0시계탑의 지하 수문 열쇠는 5년 전 참사 때 수몰된 심층 예배당과 함께 가라앉았을 텐데.」",
    choices: [
      {
        text: "라플라스의 의안을 개방해 문서함에 남은 인과 잔향을 정밀 관측한다",
        next: "act1_01a",
        effects: { divergenceDelta: 0.085, celestiaResonance: 10, flag: "inspected_seal" }
      },
      {
        text: "함정일 가능성에 대비해 단검으로 봉인 자물쇠를 즉시 해체한다",
        next: "act1_01b",
        effects: { divergenceDelta: 0.042, isoldeBond: 5, flag: "forced_seal" }
      }
    ]
  },

  // =========================================================================
  // ACT I : 수몰된 성당의 태엽성녀
  // =========================================================================
  {
    id: "act1_01a",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.195492%", countdown: "D-71:45:00", location: "제7구 · 백야당 작업실" },
    speaker: null,
    text: "나는 안대를 완전히 벗어 던지고 청금석 의안의 출력 제한기를 풀었다.\n관자놀이를 찌르는 날카로운 신경통과 함께, 철제 문서함을 감싼 시간의 궤적이 푸른 빛의 실타래처럼 풀려 나왔다.\n\n놀랍게도 이 문서함은 『과거』에서 전해진 유물이 아니었다.\n문자 그대로 아직 도래하지 않은 시간——『72시간 뒤의 미래』에서 역류해 온 물건이었다!",
    next: "act1_02"
  },
  {
    id: "act1_01b",
    mode: "adv",
    bg: "bg_atelier",
    weather: "rain_ash",
    sfx: "sfx_sword_clash",
    hud: { divergence: "0.152492%", countdown: "D-71:45:00", location: "제7구 · 백야당 작업실" },
    speaker: null,
    text: "나는 품에서 시계 수리용 초경합금 스틸레토를 뽑아 들고 봉인 자물쇠의 정밀 핀을 단숨에 찔러 넣었다.\n찰칵, 하는 경쾌한 금속음과 함께 문서함 내부의 압력 밸브가 열리며 하얀 냉기가 뿜어져 나왔다.\n\n그 냉기 속에는 지상의 것이 아닌, 지하 수백 미터 아래 수몰된 심연의 물비린내와 성스러운 은빛 마력이 섞여 있었다."
  },
  {
    id: "act1_02",
    chapter: "ACT I",
    chapterTitle: "제1장 : 수몰된 성당의 태엽성녀",
    chapterSub: "THE CLOCKWORK SAINTESS OF THE SUNKEN CATHEDRAL",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_03",
    weather: "rain_ash",
    sfx: "sfx_page_turn",
    speaker: null,
    text: "열린 문서함 안에는 지하 대수층으로 통하는 구식 황동 승강기 기동 키와 함께, 반쯤 불에 그을린 양피지 편지 한 장이 들어 있었다.\n\n양피지 위에 적힌 필체를 확인한 순간, 내 호흡이 멎었다.\n오른쪽 아래로 미세하게 기운 만년필 습관, 숫자 7에 가로획을 긋는 버릇까지——틀림없는 『내 필체』였기 때문이다."
  },
  {
    id: "act1_03",
    mode: "nvl",
    bg: "bg_atelier",
    bgm: "bgm_03",
    weather: "rain_ash",
    sfx: "sfx_heartbeat",
    speaker: null,
    text: "『10월 14일 밤의 나, 카일런 반 에버그린에게.\n\n이 편지를 읽고 있다면 역류 전송이 성공했다는 뜻이겠지.\n결론부터 말한다. 지금으로부터 정확히 72시간 뒤인 10월 17일 자정, 칠대 시계탑의 인과방벽이 역전되며 성도 에텔가르드의 80만 시민 전원이 망각 유리화된다.\n\n심문국도, 원로원도 믿지 마라.\n지하 호수 아래 수몰된 제0시계탑 최심층으로 내려가라.\n그곳의 유리 관 속에서 잠들어 있는 소녀——셀레스티아 아스트레아를 깨워라.\n\n그녀만이 열세 번째 종소리를 울릴 수 있다.』"
  },
  {
    id: "act1_04",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_03",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "녹스",
    text: "「……농담치고는 취향이 퍽 고약하군요, 소장님. 미래의 소장님이 보낸 연애편지라니. 게다가 제0시계탑 수몰 구역은 지금 제국 시간심문국의 중무장 경비대가 24시간 봉쇄하고 있는 금렵구잖습니까.」"
  },
  {
    id: "act1_05",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_03",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「위조가 아니야. 편지지의 섬유 조직에 스며든 건 사흘 뒤의 고농도 성회 결정이고, 봉인에 찍힌 건 내 라플라스 의안의 고유 마력 파장이야. 무엇보다……」"
  },
  {
    id: "act1_06",
    mode: "adv",
    bg: "bg_atelier",
    bgm: "bgm_03",
    weather: "rain_ash",
    chars: {
      center: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "카일런",
    text: "「『셀레스티아 아스트레아』. 왜인지 모르겠지만… 그 이름을 소리 내어 읽는 순간, 왼쪽 눈이 타들어 갈 것처럼 시려 왔어. 마치 수백 번이나 불러본 적 있는 이름을 이제야 다시 떠올린 것처럼.」"
  },
  {
    id: "act1_07",
    mode: "nvl",
    bg: "bg_zeroth_spire",
    bgm: "bgm_03",
    weather: "sunken_runes",
    fx: "zoom_in",
    sfx: "sfx_bell_toll",
    hud: { divergence: "0.218940%", countdown: "D-70:15:00", location: "에텔가르드 지하 600미터 · 수몰된 제0시계탑" },
    chars: {},
    speaker: null,
    text: "한 시간 뒤.\n제7구 하수도의 버려진 배수 수직갱을 따라 지하 육백 미터 아래로 하강한 나는, 마침내 5년 전 내 인생의 모든 것을 앗아갔던 심연의 성소 앞에 다시 섰다.\n\n『제0시계탑(The Zeroth Spire)』.\n\n발목까지 차오른 검은 거울 같은 수면 위로, 직경 수십 미터에 달하는 황금빛 천문시계 태엽과 아스트롤라베 궤도환들이 중력을 거스른 채 허공에 매달려 있었다."
  },
  {
    id: "act1_08",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_03",
    weather: "sunken_runes",
    fx: "zoom_reset",
    sfx: "sfx_clock_tick",
    speaker: null,
    text: "첨벙, 첨벙——.\n\n정적만이 감도는 수몰 예배당의 물결을 가르며 제단 중앙으로 걸어갈 때마다, 수면 아래 가라앉은 창백한 룬 문자들이 내 발걸음에 반응하듯 청록색 인광을 피워 올렸다.\n\n그리고 부서진 주제의 제단 한가운데, 하얀 유리 백합 꽃밭에 둘러싸인 투명한 수정 관(棺) 하나가 모습을 드러냈다."
  },
  {
    id: "act1_09",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_03",
    weather: "sunken_runes",
    sfx: "sfx_heartbeat",
    fx: "vignette_pulse",
    speaker: "카일런",
    text: "「……숨을 쉬고 있어? 아니, 관 내부의 시간 자체가 완전히 정지해 있군.」"
  },
  {
    id: "act1_10",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_03",
    weather: "sunken_runes",
    speaker: null,
    text: "유리 관 너머로 보이는 소녀는 마치 성화(聖畫) 속에서 걸어 나온 것만 같았다.\n달빛을 직조해 놓은 듯한 긴 은백색 머리카락, 짙은 프러시안 블루와 상아색이 어우러진 대성당 예복.\n그녀의 가녀린 두 손은 가슴팍 위에서 자그마한 황금 회중시계 하나를 소중히 감싸 쥐고 있었다.\n\n문자판의 로마 숫자가 『XII(12)』에서 끝나지 않고 『XIII(13)』까지 새겨진 기묘한 회중시계였다."
  },
  {
    id: "act1_11",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_03",
    weather: "sunken_runes",
    sfx: "sfx_glass_shatter",
    fx: "flash_cyan",
    speaker: null,
    text: "내가 문서함에서 가져온 기동 키를 유리 관의 봉인 홈에 꽂아 넣자——\n\n파아아아앙——!\n\n수백 년간 얼어붙어 있던 시간의 껍질이 깨어지듯, 수정 관의 덮개가 수천 조각의 빛나는 유리 꽃잎으로 산산이 부서져 허공으로 흩날렸다!"
  },
  {
    id: "act1_12",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "zoom_in",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.337184%", countdown: "D-69:58:00", location: "제0시계탑 심층 · 제0관측좌" },
    unlockCG: "cg_awakening_coffin",
    chars: {},
    speaker: "???",
    speakerTitle: "유리 관 속의 소녀",
    text: "「……아.」"
  },
  {
    id: "act1_13",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: null,
    text: "떨리는 은빛 속눈썹이 천천히 들어 올려졌다.\n그 아래에서 드러난 보랏빛과 푸른빛이 공존하는 신비로운 눈동자——정교한 황금색 시계 바늘 문양이 새겨진 두 눈이 어둠 속에서 정확히 내 얼굴을 담아냈다.\n\n소녀는 깨어진 빛의 파편 사이로 창백하고 가녀린 손을 뻗어, 망설임 없이 내 손을 붙잡았다."
  },
  {
    id: "act1_14",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: "셀레스티아",
    speakerTitle: "은빛 성회의 태엽성녀",
    text: "「찾아내 주셨군요, 카일런 님. ……다행이에요. 이번 세계선에서는, 종소리가 멎기 전에 당신을 만날 수 있었네요.」"
  },
  {
    id: "act1_15",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: "카일런",
    text: "「날… 알고 있나? 미안하지만 난 당신을 오늘 처음 보는데.」"
  },
  {
    id: "act1_16",
    mode: "adv",
    bg: "cg_awakening_coffin",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: null,
    text: "소녀의 눈가에 아주 찰나, 가슴이 저릿해질 만큼 깊고 쓸쓸한 그림자가 스쳐 지나갔다.\n하지만 그녀는 이내 눈물방울이 맺힌 속눈썹을 깜빡이며, 봄눈처럼 부드럽고 단정한 미소를 지어 보였다."
  },
  {
    id: "act1_17",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "zoom_reset",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "enter" }
    },
    speaker: "셀레스티아",
    speakerTitle: "은빛 성회의 태엽성녀",
    text: "「네, 지금의 카일런 님께 저는 처음 만나는 낯선 방문자일 뿐이니까요. 제 이름은 셀레스티아 아스트레아. 제0시계탑에 귀속된 기록관이자… 지금으로부터 72시간 뒤, 백색으로 사멸한 에텔가르드에서 되감겨 온 관측자입니다.」"
  },
  {
    id: "act1_18",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「미래의 내가 보낸 편지에 적혀 있던 게 바로 당신이군. 72시간 뒤에 에텔가르드 전원이 망각 유리화된다는 게 대체 무슨 소리야? 칠대 시계탑의 『인과방벽』은 건재할 텐데.」"
  },
  {
    id: "act1_19",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    unlockCodex: ["chronos_amber", "eternal_stasis"],
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "셀레스티아",
    text: "「방벽이 무너지는 것이 아닙니다, 카일런 님. 칠대 시계탑을 다스리는 수석 집정관 유스티니아 님이… 사흘 뒤 자정, 시계탑의 황금 화로를 역회전시켜 도시 전체를 스스로 유리화시키려 하고 계세요.」"
  },
  {
    id: "act1_20",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "shake",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「뭐라고? 원로원이 스스로 도시를 유리화시킨다고?! 바깥의 성회로부터 인류를 지키는 방벽을 왜 자기들 손으로—」"
  },
  {
    id: "act1_21",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「칠대 시계탑이 태우고 있는 『시계호박(Chronos-Amber)』이 이미 한계에 달했기 때문입니다. 그리고 그 시계호박의 진짜 정체가 무엇인지… 카일런 님의 그 왼쪽 눈이라면 이미 어렴풋이 짐작하고 계시지 않나요?」"
  },
  {
    id: "act1_22",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    speaker: null,
    text: "셀레스티아는 가슴에 품고 있던 13시 회중시계를 들어 내 앞에 내밀었다.\n시계의 황금 뚜껑이 열리자, 그 안에서는 째깍거리는 초침 대신 맑고 서글픈 오르골 소리 같은 공명이 흘러나왔다."
  },
  {
    id: "act1_23",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    unlockCodex: ["worldline_divergence"],
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「현재 세계선 편차율은 『0.337184%』. 이 수치로는 사흘 뒤의 『영원정지(Grand Freeze)』를 막을 수 없어요. 세계의 수렴을 부수고 아침을 맞이하려면, 편차율 『1.048596%』의 임계벽을 넘어야만 합니다.」"
  },
  {
    id: "act1_24",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「부디 저와 계약해 주세요, 제0시계탑의 최후 관측자여. 당신의 눈이 잊힌 자들의 과거를 기억한다면, 제 검은 당신의 내일을 가로막는 운명을 베어낼게요.」",
    choices: [
      {
        text: "「좋아. 어차피 고장 난 시계를 고치는 게 내 본업이니까. 네 손을 잡지, 셀레스티아.」",
        next: "act1_25a",
        effects: { divergenceDelta: 0.125, celestiaResonance: 20, flag: "trusted_celestia" }
      },
      {
        text: "「조건이 있다. 네가 내게 숨기고 있는 '이전 시간선의 대가'가 무엇인지도 전부 밝히겠다고 약속해.」",
        next: "act1_25b",
        effects: { divergenceDelta: 0.140, celestiaResonance: 15, isoldeBond: 5, flag: "questioned_cost" }
      }
    ]
  },
  {
    id: "act1_25a",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "flash_cyan",
    sfx: "sfx_ui_confirm",
    hud: { divergence: "0.462184%", countdown: "D-69:40:00", location: "제0시계탑 심층 · 제0관측좌" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "pulse" }
    },
    speaker: "셀레스티아",
    text: "「……변하지 않으셨네요. 언제나 그렇게 투덜대면서도, 결국 가장 무거운 짐을 망설임 없이 들어 올리는 분이셨죠. 고맙습니다, 카일런 님.」",
    next: "inter_01"
  },
  {
    id: "act1_25b",
    mode: "adv",
    bg: "bg_zeroth_spire",
    bgm: "bgm_01",
    weather: "sunken_runes",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.477184%", countdown: "D-69:40:00", location: "제0시계탑 심층 · 제0관측좌" },
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "shake" }
    },
    speaker: "셀레스티아",
    text: "「……! 역시 라플라스의 눈을 속일 수는 없군요. 네, 약속드릴게요. 모든 싸움이 끝나는 열세 번째 시간의 문턱에서… 제가 무엇을 태워 이 시간을 되돌렸는지 전부 말씀드리겠습니다.」"
  }
];
