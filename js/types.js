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
    todayPicks: [
      "朝のヨガで、一日を静かに始める",
      "タッチスパで、丁寧にほぐれる",
      "ラウンジで、温かい一杯を"
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
    todayPicks: [
      "ジムで、集中してひと汗",
      "ボクシングレッスンで、リズムよく",
      "テニスコートで、伸びやかに一本"
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
    todayPicks: [
      "ラウンジで、会員仲間と歓談",
      "カルチャークラスを、まずは体験",
      "レストランで、季節のひと皿を"
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
    todayPicks: [
      "ジムを、軽くひと巡り",
      "アクアレッスンに、爽やかに参加",
      "ヨガで、しなやかにクールダウン"
    ]
  },
  maintenance: {
    id: "maintenance",
    name: "マイペースメンテナンス型",
    tagline: "いつもの自分を、丁寧に手入れする",
    description: "自分のリズムを大切にし、長く健やかに過ごしたいあなたへ。日々のささやかな積み重ねが、もっとも美しい習慣になります。",
    facilities: [
      "ジム(ゆるやかに)",
      "太極拳",
      "ストレッチクラス",
      "プールでのウォーキング",
      "ラウンジでの休息"
    ],
    todayPicks: [
      "太極拳で、ゆっくり体を整える",
      "プールを、歩いて巡る",
      "ラウンジで、ひと休み"
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
    todayPicks: [
      "プールで、ゆっくり泳ぐ",
      "アクアレッスンで、軽やかに",
      "スパで、体をいたわる"
    ]
  }
};

// 同点時の優先順位（前にあるものを優先）
// 提案として違和感の少ない順に
const TIE_BREAK_ORDER = ["balance", "relax", "social", "water", "maintenance", "active"];

function diagnose(answers) {
  const scores = { relax: 0, active: 0, social: 0, balance: 0, maintenance: 0, water: 0 };
  let todayPick = null;

  answers.forEach((option) => {
    if (!option) return;
    const opScores = option.scores || {};
    Object.keys(opScores).forEach((typeId) => {
      if (scores[typeId] !== undefined) {
        scores[typeId] += opScores[typeId];
      }
    });
    if (option.todayPick) todayPick = option.todayPick;
  });

  let resultId = TIE_BREAK_ORDER[0];
  let max = -Infinity;
  TIE_BREAK_ORDER.forEach((id) => {
    if (scores[id] > max) {
      max = scores[id];
      resultId = id;
    }
  });

  return {
    type: TYPES[resultId],
    scores,
    todayPick
  };
}
