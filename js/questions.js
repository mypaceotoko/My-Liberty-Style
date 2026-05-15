// 診断質問データ
// 各選択肢には scores（タイプIDごとの加点）を持たせる。
// 質問8の選択肢には todayPick（結果ページで強調表示する「今日のおすすめ」テキスト）を任意で付与。

const QUESTIONS = [
  {
    id: 1,
    text: "クラブで何を一番大切にしたいですか？",
    options: [
      { label: "健康をしっかり保ちたい",     scores: { balance: 3, maintenance: 2 } },
      { label: "心と体をリフレッシュしたい",   scores: { relax: 3, water: 2 } },
      { label: "新しい仲間と出会いたい",     scores: { social: 3, balance: 1 } },
      { label: "自分のペースで長く続けたい",   scores: { maintenance: 3, balance: 1 } }
    ]
  },
  {
    id: 2,
    text: "心地よく感じる時間は？",
    options: [
      { label: "静かにゆったり過ごす時間",     scores: { relax: 3, maintenance: 2 } },
      { label: "賑やかに人と楽しむ時間",       scores: { social: 3 } },
      { label: "体を動かして汗を流す時間",     scores: { active: 3, balance: 1 } },
      { label: "癒されてほっとする時間",       scores: { relax: 2, water: 2 } }
    ]
  },
  {
    id: 3,
    text: "ひとり時間と交流時間、どちらを多めに過ごしたいですか？",
    options: [
      { label: "ひとり時間をたっぷりと",       scores: { maintenance: 2, relax: 2 } },
      { label: "どちらかというと、ひとりで",   scores: { balance: 2, water: 1 } },
      { label: "どちらかというと、人と",       scores: { social: 2, active: 1 } },
      { label: "交流をいちばんに",             scores: { social: 3 } }
    ]
  },
  {
    id: 4,
    text: "体を動かす時の理想的なペースは？",
    options: [
      { label: "本格的に、しっかりと鍛えたい", scores: { active: 3 } },
      { label: "楽しみながら、軽やかに",       scores: { social: 2, balance: 2 } },
      { label: "マイペースに、無理なく",       scores: { maintenance: 3, balance: 1 } },
      { label: "ゆるやかに、体をほぐしたい",   scores: { relax: 3, water: 1 } }
    ]
  },
  {
    id: 5,
    text: "惹かれる雰囲気はどれですか？",
    options: [
      { label: "水辺の、さわやかな空気",       scores: { water: 3, relax: 1 } },
      { label: "リズムや音楽のある空間",       scores: { social: 2, active: 2 } },
      { label: "静寂と落ち着きのある空間",     scores: { relax: 3, maintenance: 2 } },
      { label: "汗を流せる、活気ある空間",     scores: { active: 3, balance: 1 } }
    ]
  },
  {
    id: 6,
    text: "アクティブ系で気になるのはどれですか？",
    options: [
      { label: "テニス",                       scores: { active: 2, social: 2 } },
      { label: "ゴルフレンジ",                 scores: { active: 2, maintenance: 1 } },
      { label: "ボクシング系レッスン",         scores: { active: 3 } },
      { label: "プール・アクア系レッスン",     scores: { water: 3, balance: 1 } }
    ]
  },
  {
    id: 7,
    text: "リラックス系で気になるのはどれですか？",
    options: [
      { label: "ヨガ",                         scores: { relax: 2, balance: 2 } },
      { label: "太極拳",                       scores: { maintenance: 2, relax: 2 } },
      { label: "タッチスパ",                   scores: { relax: 3, water: 1 } },
      { label: "ラウンジでのひととき",         scores: { social: 2, relax: 1 } }
    ]
  },
  {
    id: 8,
    text: "今日まず、やってみたい気分は？",
    options: [
      { label: "プールでひと泳ぎ",     scores: { water: 2 } },
      { label: "ヨガで深呼吸",         scores: { relax: 2 } },
      { label: "ジムで軽く体を動かす", scores: { balance: 2, active: 1 } },
      { label: "ラウンジで優雅にお茶", scores: { social: 2, relax: 1 } }
    ]
  }
];
