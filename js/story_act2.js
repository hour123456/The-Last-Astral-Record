// -*- coding: utf-8 -*-
/**
 * 《창백한 별의 레퀴엠 : 제0시계탑의 관측자》
 * ACT II Script : 잿빛의 단죄자와 잊힌 이름들의 거리
 */

window.STORY_ACT2 = [
  {
    id: "act2_01",
    chapter: "ACT II",
    chapterTitle: "제2장 : 잿빛의 단죄자와 잊힌 이름들의 거리",
    chapterSub: "THE ASHEN EXECUTIONER & THE STREET OF FORGOTTEN NAMES",
    mode: "nvl",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    fx: "zoom_in",
    sfx: "sfx_bell_toll",
    hud: { divergence: "0.477184%", countdown: "D-48:12:00", location: "성도 에텔가르드 · 제7구 황혼의 자갈길" },
    chars: {},
    speaker: null,
    text: "종말까지 마흔여덟 시간.\n\n지상으로 올라온 제7구의 거리는 평소보다 두 배나 짙은 성회(星灰) 안개에 잠겨 있었다.\n비에 젖은 자갈길 위로 가스등의 호박색 불빛이 길게 번졌고, 하늘을 가로지르는 비행선들의 탐조등이 구름 사이로 서늘한 빛기둥을 드리웠다.\n\n하지만 거리를 걷는 시민들의 표정은 기이할 만큼 평온하고 공허했다."
  },
  {
    id: "act2_02",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    fx: "zoom_reset",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "enter" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png", anim: "enter" }
    },
    speaker: "녹스",
    text: "「보셨습니까, 소장님? 오늘 새벽 원로원이 제1시계탑부터 제7시계탑까지 『방벽 출력 증폭령』을 내렸습니다. 명목상으로는 성회 폭풍에 대비한다는 거지만… 실제로는 하층 구역의 인과 에너지를 중앙 화로로 빨아들이고 있는 겁니다.」"
  },
  {
    id: "act2_03",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "nox", sprite: "assets/images/char_nox_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「영원정지 술식의 예비 가동이 시작된 거예요. 이대로 시계탑의 흡수가 계속되면, 외곽 구역의 주민들부터 차례대로 기억의 임계점을 잃고 유리화되고 말아요.」"
  },
  {
    id: "act2_04",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    sfx: "sfx_glass_shatter",
    fx: "flash_white",
    chars: {},
    speaker: null,
    text: "챙그랑——.\n\n그때, 가스등 아래 골목 어귀에서 무언가 유리 깨지는 듯한 맑고 잔혹한 파열음이 울렸다.\n달려간 우리의 눈앞에는, 낡은 숄을 두른 한 젊은 여인이 무릎을 꿇은 채 아이의 손을 꼭 붙잡고 있었다.\n\n여인의 손끝과 발끝은 이미 피와 살이 아닌, 창백하게 빛나는 반투명한 유리 결정으로 변해 가고 있었다."
  },
  {
    id: "act2_05",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    sfx: "sfx_heartbeat",
    fx: "vignette_pulse",
    speaker: "유리화되는 여인",
    speakerTitle: "제7구 거주민",
    text: "「울지 마렴, 클라라… 엄마가 오늘 아침 『기억 헌납소』에 가서… 네 겨울 코트 값을 받으려고 내 옛날 기억을 조금 더 팔았더니… 어라, 이상하네. 내가 방금 누구 이름을 불렀지…?」"
  },
  {
    id: "act2_06",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    speaker: "어린 소녀",
    speakerTitle: "클라라",
    text: "「엄마…? 손이 왜 그래, 엄마 손이 차가운 유리처럼 변하고 있어…! 아저씨, 언니! 우리 엄마 좀 살려 주세요, 제발요!」"
  },
  {
    id: "act2_07",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png", anim: "shake" }
    },
    speaker: "셀레스티아",
    text: "「안 돼…! 인과 결손율이 이미 98퍼센트를 넘었어요! 제가 아리아의 술식으로 시간을 고정해 볼게요—!」"
  },
  {
    id: "act2_08",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    sfx: "sfx_glass_shatter",
    fx: "flash_white",
    chars: {},
    speaker: null,
    text: "셀레스티아의 손끝이 닿기도 전에, 여인의 몸 전체가 천 송이의 하얀 유리 백합으로 피어나며 밤바람 속에 소리 없이 부서져 내렸다.\n\n거리 바닥에는 그 어떤 핏자국도, 시신도 남지 않았다.\n오직 여인이 손에 쥐고 있던 녹슨 구리 로켓 시계 하나만이 자갈길 위를 데구르르 굴러 내 발치에 멈춰 섰다."
  },
  {
    id: "act2_09",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    speaker: "어린 소녀",
    speakerTitle: "클라라",
    text: "「……어라? 이상하다. 나 왜 여기서 혼자 울고 있었지…? 아저씨, 나는 원래 엄마가 없는데 왜 눈물이 멈추지 않는 거예요?」"
  },
  {
    id: "act2_10",
    mode: "nvl",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    sfx: "sfx_heartbeat",
    speaker: null,
    text: "그것이 『망각 유리화』의 진짜 지옥이었다.\n\n죽음보다 잔인한 것은, 사랑하던 사람이 죽었다는 사실조차 슬퍼할 권리를 빼앗기는 것이다.\n가슴 한복판에는 거대한 구멍이 뚫려 눈물이 흐르는데, 정작 누구를 위해 흘리는 눈물인지 영원히 알 수 없게 되는 형벌.\n\n내 왼쪽 눈——라플라스의 의안 속에서만, 부서진 유리꽃 자리에 무릎을 꿇은 채 아이의 머리를 쓰다듬고 있는 어머니의 푸른 잔향이 선명하게 일렁이고 있었다."
  },
  {
    id: "act2_11",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    fx: "laplace_eye",
    sfx: "sfx_worldline_shift",
    speaker: "카일런",
    text: "「……여기 떨어진 이 구리 시계를 가져가렴, 꼬마야. 네 이름은 클라라. 그리고 방금까지 네 손을 잡고 있던 분은 세상에서 널 가장 사랑했던 네 어머니, 마르타 부인이시다.」"
  },
  {
    id: "act2_12",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "star_ash",
    chars: {
      center: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" }
    },
    speaker: "카일런",
    text: "「비록 네 머릿속에서는 그분이 지워졌어도, 네 눈물이 그분을 기억하고 있어. 시계 바늘이 도는 한 절대 잊지 마라.」"
  },
  {
    id: "act2_13",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    sfx: "sfx_sword_clash",
    fx: "flash_crimson",
    hud: { divergence: "0.512040%", countdown: "D-47:30:00", location: "제7구 시계탑 광장 · 시간심문국 포위망" },
    unlockCodex: ["inquisition", "dies_irae"],
    chars: {},
    speaker: "???",
    speakerTitle: "시간심문국 집행국장",
    text: "「여전하군, 카일런 반 에버그린. 망각된 자의 이름을 발설해 시민의 인과 인식을 교란하는 행위——제국 시간보안법 제4조 위반이다.」"
  },
  {
    id: "act2_14",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_normal.png", anim: "enter" }
    },
    speaker: null,
    text: "타앙——!\n\n진홍빛 마력 조명탄이 안개 자갈길의 밤하늘을 갈랐다.\n성당 지붕과 가로등 난간 위로 검은 군복을 입은 시간심문국 집행 기사단이 일제히 모습을 드러냈고, 그 선두에서 칠흑 같은 머리카락에 붉은 리본을 매단 여인이 천천히 계단을 내려왔다.\n\n제1시계탑 집행국장, 이졸데 폰 발켄하인이었다."
  },
  {
    id: "act2_15",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_normal.png" }
    },
    speaker: "카일런",
    text: "「오랜만이군, 이졸데. 고물 시계방 주인장 하나 잡겠다고 제1시계탑의 집행국장 각하께서 친히 행차하실 줄은 몰랐는데.」"
  },
  {
    id: "act2_16",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_normal.png", anim: "pulse" }
    },
    speaker: "이졸데",
    speakerTitle: "제1시계탑 집행국장 · 잿빛의 단죄자",
    text: "「농담 따먹을 시간 없다, 카일런. 한 시간 전 수몰된 제0시계탑의 봉인이 파괴되었고, 비허가 시간 역행 파장이 관측되었다. 네 등 뒤에 서 있는 그 은발의 소녀——당장 심문국에 인계해라.」"
  },
  {
    id: "act2_17",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_battle.png", anim: "enter" },
      right: { id: "isolde", sprite: "assets/images/char_isolde_normal.png" }
    },
    speaker: "셀레스티아",
    text: "「이졸데 폰 발켄하인 국장님…! 제발 들어주세요! 당신이 지키고 있는 원로원의 『방벽 증폭령』은 시민들을 구하기 위한 게 아니에요! 사흘 뒤면 당신이 지키려는 이 도시 전체가—」"
  },
  {
    id: "act2_18",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    sfx: "sfx_sword_clash",
    fx: "shake",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_battle.png" },
      right: { id: "isolde", sprite: "assets/images/char_isolde_normal.png", anim: "shake" }
    },
    speaker: "이졸데",
    text: "「입 다물어라, 미등록 특이점! 칠대 시계탑의 황금 화로가 단 1초라도 멈추면 바깥의 성회 폭풍이 팔십만 시민을 그 자리에서 몰살시킨다! 설령 그것이 불완전한 방벽이라 할지라도, 나는 이 도시의 『오늘』을 무너뜨리는 자를 결코 용서하지 않는다!」"
  },
  {
    id: "act2_19",
    mode: "adv",
    bg: "cg_rooftop_duel",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    fx: "sword_slash",
    sfx: "sfx_sword_clash",
    hud: { divergence: "0.589310%", countdown: "D-47:10:00", location: "제7구 대시계탑 첨탑 지붕 · 결전" },
    unlockCG: "cg_rooftop_duel",
    unlockCodex: ["stigma_aria"],
    chars: {},
    speaker: null,
    text: "콰아아아앙——!!\n\n첨탑 지붕 위로 솟구친 두 줄기의 섬광이 밤하늘의 빗줄기를 증발시키며 정면으로 격돌했다!\n\n이졸데의 집행검 『디에스 이레』가 뿜어내는 진홍빛 인과 소각의 화염과, 셀레스티아가 전개한 『성흔연주 : 아리아』의 황금 태엽 마법진 및 창백한 성광의 검이 부딪히며 수천 개의 불꽃이 시계탑 지붕 위로 쏟아져 내렸다!"
  },
  {
    id: "act2_20",
    mode: "adv",
    bg: "cg_rooftop_duel",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    fx: "heavy_shake",
    sfx: "sfx_sword_clash",
    speaker: "이졸데",
    text: "「하아아앗—! 『디에스 이레(진노의 날)』 제3악장, 인과절단(因果切斷)! 네년의 그 시간 회귀 술식, 내 검으로 직전 3초의 궤적째로 불태워 주마!」"
  },
  {
    id: "act2_21",
    mode: "adv",
    bg: "cg_rooftop_duel",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    fx: "stigma_circle",
    sfx: "sfx_worldline_shift",
    speaker: "셀레스티아",
    text: "「물러설 수 없어요…! 『성흔연주 : 아리아』 제1악장——별빛의 방패여, 관측자의 시간을 수호하라! 윽…!」"
  },
  {
    id: "act2_22",
    mode: "adv",
    bg: "cg_rooftop_duel",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    sfx: "sfx_heartbeat",
    fx: "vignette_pulse",
    speaker: null,
    text: "셀레스티아의 성광 결계가 진홍빛 검압을 막아내는 순간, 내 왼쪽 의안 『라플라스』가 경악스러운 광경을 포착했다.\n\n셀레스티아의 마법진이 회전할 때마다——그녀의 심장 부근에서 하얀 은빛 기억의 파편들이 눈물처럼 타올라 재로 흩어지고 있었던 것이다!\n그녀는 자기 자신의 기억과 생명을 연료로 태워 아리아를 연주하고 있었다!"
  },
  {
    id: "act2_23",
    mode: "adv",
    bg: "cg_rooftop_duel",
    bgm: "bgm_04",
    weather: "crimson_sparks",
    speaker: "카일런",
    text: "「이대로 두면 셀레스티아의 영혼이 타버려…! 그리고 이졸데의 호흡도 오른쪽 어깨에서 미세하게 흐트러지고 있어!」",
    choices: [
      {
        text: "라플라스의 눈으로 두 검의 궤적 교차점을 계산해 두 사람 사이로 직접 뛰어든다",
        next: "act2_24a",
        effects: { divergenceDelta: 0.185, celestiaResonance: 15, isoldeBond: 20, flag: "intervened_duel" }
      },
      {
        text: "셀레스티아의 성흔 마법진에 내 의안의 파장을 동조시켜 이졸데의 검을 튕겨낸다",
        next: "act2_24b",
        effects: { divergenceDelta: 0.160, celestiaResonance: 25, isoldeBond: 5, flag: "synced_celestia" }
      }
    ]
  },
  {
    id: "act2_24a",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    fx: "flash_white",
    sfx: "sfx_sword_clash",
    hud: { divergence: "0.774310%", countdown: "D-46:55:00", location: "제7구 대시계탑 첨탑 지붕" },
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png", anim: "shake" }
    },
    speaker: "이졸데",
    text: "「카일런?! 미쳤어?! 디에스 이레의 칼날에 맨몸으로 뛰어들다니…! 윽, 검을 거두는 바람에 반동이—!」",
    next: "act2_25"
  },
  {
    id: "act2_24b",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    fx: "flash_cyan",
    sfx: "sfx_worldline_shift",
    hud: { divergence: "0.749310%", countdown: "D-46:55:00", location: "제7구 대시계탑 첨탑 지붕" },
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png", anim: "shake" }
    },
    speaker: "이졸데",
    text: "「크윽…! 라플라스의 의안으로 내 검의 인과 소각 주기를 역산했나…! 여전한 괴물 같은 눈이군, 카일런!」"
  },
  {
    id: "act2_25",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    sfx: "sfx_clock_tick",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png" }
    },
    speaker: null,
    text: "충격파에 밀려난 이졸데의 검은 군복 외투 자락이 찢어지며, 그녀의 가슴 안쪽 주머니에서 낡고 금이 간 황동 회중시계 하나가 튕겨 나올 뻔했다.\n\n그 냉혹하던 집행국장이 반사적으로 검까지 놓칠 뻔하며, 마치 자신의 목숨보다 소중한 보물을 지키듯 그 깨진 회중시계를 두 손으로 감싸 안았다."
  },
  {
    id: "act2_26",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    fx: "laplace_eye",
    sfx: "sfx_heartbeat",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png" }
    },
    speaker: "카일런",
    text: "「……잠깐. 이졸데, 네가 지금 가슴에 품고 있는 그 깨진 회중시계… 내가 열다섯 살 때 첫 수리작으로 네게 만들어 줬던 시계잖아.」"
  },
  {
    id: "act2_27",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png", anim: "pulse" }
    },
    speaker: "카일런",
    text: "「그리고 그 시계에서 흘러나오는 거대한 기억 결손의 흔적은 뭐지…? 너, 5년 전 제0시계탑 참사 때 원로원이 내 사형을 사면하고 이 라플라스 의안을 이식해 준 대가로… 네 유년 시절의 기억 절반을 『시계호박』으로 바쳤던 거냐?!」"
  },
  {
    id: "act2_28",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png", anim: "shake" }
    },
    speaker: "이졸데",
    text: "「……보지 마라, 카일런! 그 저주받은 왼쪽 눈으로 내 마음을 들여다보지 마…! 그래, 바쳤다! 네가 지하 수몰 구역에서 피투성이로 끌려 나왔을 때, 유스티니아 각하께서 요구하신 보석금이 내 가장 행복했던 시절의 기억이었으니까!」"
  },
  {
    id: "act2_29",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    chars: {
      center: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png" }
    },
    speaker: "이졸데",
    text: "「나는 이제 네가 왜 이 시계를 내게 주었는지, 그날 우리가 어떤 약속을 했는지조차 절반밖에 기억하지 못해! 그래도… 그래도 이 시계를 만질 때마다 심장이 미칠 듯이 아파 오는 것만은 지워지지 않았단 말이다…!」"
  },
  {
    id: "act2_30",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "isolde", sprite: "assets/images/char_isolde_emotional.png" }
    },
    speaker: "카일런",
    text: "「이졸데… 너까지 원로원에 그런 잔혹한 대가를 치르고 있었단 말이야? 그렇다면 더더욱 날 믿어! 지금 제1시계탑 대심판정의 황금 화로 밑에서 벌어지고 있는 진실을 네 두 눈으로 직접 확인하게 해 주겠어!」"
  },
  {
    id: "act2_31",
    mode: "adv",
    bg: "bg_city_street",
    bgm: "bgm_05",
    weather: "rain_ash",
    chars: {
      left: { id: "celestia", sprite: "assets/images/char_celestia_normal.png" },
      right: { id: "isolde", sprite: "assets/images/char_isolde_normal.png" }
    },
    speaker: "이졸데",
    text: "「……단 스물네 시간이다, 카일런. 내일 밤 자정까지 원로원이 『영원정지』를 꾸미고 있다는 결정적 증거를 대심판정에서 증명하지 못한다면, 그때는 내 목숨을 걸고서라도 너희 둘을 베겠다. …제1시계탑 내부 통행 암호는 『동백꽃(Camellia)』이다. 늦지 마라.」"
  }
];
