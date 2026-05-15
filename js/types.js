// クラブライフタイプ定義 + 判定ロジック

const TYPES = {
  relax: {
    id: "relax",
    name: "リラックスウェルネス型",
    tagline: "ゆったりと、自分を整える時間を",
    description: "日々の喧騒からすこし離れ、深く呼吸を整えるような過ごし方がよく似合います。心身をほどく時間を中心に、上質なクラブライフをお楽しみください。",
    facilities: [
      "ヨガ",
      "太極拳",
      "タッチスパ",
      "静かなラウンジでのひととき",
      "アクアリラクゼーション"
    ],
    routine: [
      { activity: "全身ストレッチ",         spec: "15分",                     note: "首・肩・背中・脚を順番にゆっくりほぐす" },
      { activity: "ウォーキング",           spec: "20分 / ゆっくりペース",      note: "トレッドミルまたはプールサイドを無理のないペースで" },
      { activity: "深呼吸・リラクゼーション", spec: "10分",                     note: "横になって全身の力を抜き、深呼吸で整える" }
    ],
    programs: [
      { name: "リラックスヨガ", area: "STUDIO", description: "深い呼吸とゆったりとした動きで、心と体をほぐすヨガクラス" },
      { name: "簡単チェアヨガ", area: "DO-JO",  description: "椅子に座ったまま行う、無理なく参加できるやさしいヨガ" },
      { name: "アクア＆ウォーク", area: "AQUA", description: "水中ウォーキングで浮力を活かし、体を優しくほぐす" }
    ]
  },
  active: {
    id: "active",
    name: "アクティブチャレンジャー型",
    tagline: "今日も、一歩前へ",
    description: "体を動かすことそのものに喜びを感じるあなたへ。本格的な設備とレッスンを存分に活かし、しなやかで力強い自分を磨いていける環境です。",
    facilities: [
      "本格ジムトレーニング",
      "ボクシング系レッスン",
      "テニス",
      "ダンスレッスン",
      "ゴルフレンジ"
    ],
    routine: [
      { activity: "有酸素運動",     spec: "30分 / トレッドミル 時速7〜8km",          note: "しっかり汗をかいて心拍数を高める" },
      { activity: "筋力トレーニング", spec: "スクワット 20回×3セット / 腕立て 15回×3セット", note: "自体重トレーニングで全身の筋力をアップ" },
      { activity: "クールダウン",    spec: "10分 / 全身ストレッチ",                  note: "使った筋肉をしっかり伸ばして回復を促す" }
    ],
    programs: [
      { name: "ボディメイキング60", area: "STUDIO", description: "全身の筋力と持久力を高める本格的なボディメイクレッスン" },
      { name: "GroupFight",        area: "DO-JO",  description: "格闘技をベースにした高強度グループエクササイズ" },
      { name: "アクティブストレッチ", area: "STUDIO", description: "運動後の体をしっかりほぐすダイナミックストレッチ" }
    ]
  },
  social: {
    id: "social",
    name: "社交エンジョイ型",
    tagline: "人と過ごす時間が、いちばんのご褒美",
    description: "会話やふれあいから元気をもらうあなたへ。仲間と笑い合える時間こそが、このクラブでもっとも輝く瞬間になるでしょう。",
    facilities: [
      "交流イベント",
      "カルチャークラス",
      "レストラン",
      "ダンスレッスン",
      "ラウンジでの団らん"
    ],
    routine: [
      { activity: "ウォームアップ体操",   spec: "10分",               note: "レッスン前に体を温め、参加準備を整える" },
      { activity: "グループレッスン参加", spec: "60分 / お好みのクラス", note: "仲間と一緒に楽しみながら全身を動かす" },
      { activity: "クールダウンストレッチ", spec: "10分",              note: "レッスン後に体をほぐし、心地よく締めくくる" }
    ],
    programs: [
      { name: "ZUMBA®",          area: "STUDIO", description: "ラテンミュージックに合わせて踊る、賑やかなダンスフィットネス" },
      { name: "ボールルームダンス入門", area: "STUDIO", description: "ペアで楽しむ社交ダンスの入門クラス。初心者大歓迎" },
      { name: "ダンスエアロ",     area: "STUDIO", description: "ダンスの動きを取り入れた、楽しいエアロビクスレッスン" }
    ]
  },
  balance: {
    id: "balance",
    name: "バランス健康型",
    tagline: "無理なく、心地よく、長く続ける",
    description: "健康と楽しみのバランスを大切にしたいあなたへ。複数のレッスンを組み合わせて、自分らしい週のリズムを育てていけます。",
    facilities: [
      "ジムでの軽めトレーニング",
      "ヨガ",
      "アクアレッスン",
      "プール",
      "カルチャークラス"
    ],
    routine: [
      { activity: "ウォーキング",    spec: "20分 / トレッドミル 時速5〜6km", note: "無理のないペースで有酸素運動のベースを作る" },
      { activity: "軽い筋トレ",      spec: "各マシン 15回×2セット",         note: "主要な筋群をバランスよく、フォームを意識しながら" },
      { activity: "ヨガ・ストレッチ", spec: "15〜20分",                     note: "体全体をほぐし、バランスを整えて締めくくる" }
    ],
    programs: [
      { name: "ファンエアロ",    area: "STUDIO", description: "楽しいリズムに乗って適度な有酸素運動が楽しめる入門クラス" },
      { name: "アクア＆ウォーク", area: "AQUA",  description: "水中ウォーキングで全身運動。膝に優しく続けやすい" },
      { name: "ヨガ",           area: "STUDIO", description: "体の柔軟性と筋力をバランスよく養う、週の締めくくりに最適" }
    ]
  },
  maintenance: {
    id: "maintenance",
    name: "マイペースメンテナンス型",
    tagline: "いつもの自分を、丁寧に手入れする",
    description: "自分のリズムを大切にし、長く健やかに過ごしたいあなたへ。日々のささやかな積み重ねが、もっとも美しい習慣になります。",
    facilities: [
      "ジム（ゆるやかに）",
      "太極拳",
      "ストレッチクラス",
      "プールでのウォーキング",
      "ラウンジでの休息"
    ],
    routine: [
      { activity: "準備体操",        spec: "10分",            note: "関節を丁寧に動かし、無理なく体を目覚めさせる" },
      { activity: "プールウォーキング", spec: "20〜30分 / マイペースで", note: "水の抵抗を利用して、体に優しく負荷をかける" },
      { activity: "整理体操・ストレッチ", spec: "15分",        note: "使った部位を丁寧にほぐし、体のメンテナンスを完成させる" }
    ],
    programs: [
      { name: "気功・太極拳",   area: "DO-JO",  description: "ゆったりとした動きで気の流れを整える、心身の調和を促すクラス" },
      { name: "アクア＆ウォーク", area: "AQUA", description: "プールを歩くだけ。水中で優しく全身を動かすシンプルなレッスン" },
      { name: "まったりストレッチ", area: "STUDIO", description: "全身を無理なくほぐす、ゆったりペースのストレッチクラス" }
    ]
  },
  water: {
    id: "water",
    name: "水辺リフレッシュ型",
    tagline: "水のなかで、軽やかに",
    description: "水に身をゆだねる時間がもっとも心地よいあなたへ。プールやアクア系レッスンを軸に、清々しさに満ちたクラブライフをどうぞ。",
    facilities: [
      "プール",
      "アクアエクササイズ",
      "アクアウォーキング",
      "タッチスパ",
      "プールサイドでのひととき"
    ],
    routine: [
      { activity: "水中ウォームアップ",    spec: "10分 / ゆっくりウォーキング",   note: "プールに入り体を慣らしながら、準備を整える" },
      { activity: "水泳",               spec: "400m（クロールまたは平泳ぎ）", note: "100mごとに30秒休憩。自分のペースで泳ぐ" },
      { activity: "プールサイドストレッチ", spec: "10分",                     note: "水から上がった後、全身をゆっくり伸ばしてクールダウン" }
    ],
    programs: [
      { name: "アクアビクス",       area: "AQUA", description: "水中で音楽に合わせて体を動かす、楽しいアクアエクササイズ" },
      { name: "昼スイム（初中級）", area: "AQUA", description: "インストラクターとともに泳ぐスイムレッスン。初中級者向け" },
      { name: "アクアシェイプ",     area: "AQUA", description: "水の抵抗を活かして体を引き締めるアクアフィットネス" }
    ]
  }
};

// 同点時の優先順位（前にあるものを優先）
// 提案として違和感の少ない順に
const TIE_BREAK_ORDER = ["balance", "relax", "social", "water", "maintenance", "active"];

function diagnose(answers) {
  const scores = { relax: 0, active: 0, social: 0, balance: 0, maintenance: 0, water: 0 };

  answers.forEach((option) => {
    if (!option) return;
    const opScores = option.scores || {};
    Object.keys(opScores).forEach((typeId) => {
      if (scores[typeId] !== undefined) {
        scores[typeId] += opScores[typeId];
      }
    });
  });

  let resultId = TIE_BREAK_ORDER[0];
  let max = -Infinity;
  TIE_BREAK_ORDER.forEach((id) => {
    if (scores[id] > max) {
      max = scores[id];
      resultId = id;
    }
  });

  return { type: TYPES[resultId], scores };
}
