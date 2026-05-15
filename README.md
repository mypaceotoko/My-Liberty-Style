# My Liberty Style

リバティヒルクラブ（Liberty Hill Club）の入会案内時に、iPad で利用する診断 Web アプリです。
8つの簡単な質問にお答えいただき、その方に合った「クラブでの過ごし方」を上品にご提案します。

## 特徴

- **8問・1画面1問** の選択式診断（進捗バー＋残り問数表示）
- **6つのクラブライフタイプ** に判定し、相性の良い施設・レッスンと「今日のおすすめ」を提示
- **AI / ログイン / DB / QR は不要** — 静的ファイルのみで完結
- iPad / スマホ / PC に対応するレスポンシブ。タップ中心、文字大きめ、余白多めで高齢の会員様にも安心
- 依存パッケージなし、ビルド不要 → **GitHub Pages にそのまま公開可能**

## 構成

```
.
├── index.html          単一ページ（intro / question / result の3画面）
├── css/
│   └── styles.css      ホテルラウンジ風スタイル
├── js/
│   ├── app.js          画面遷移・状態管理
│   ├── questions.js    質問データ（8問）
│   └── types.js        タイプ定義 + 判定ロジック
└── .nojekyll           GitHub Pages 用
```

## ローカルで動かす

依存ゼロなので、簡易 HTTP サーバーを立てるだけで OK です。

```sh
# Python が入っていれば
python3 -m http.server 8000

# あるいは Node.js が入っていれば
npx serve .
```

ブラウザで `http://localhost:8000` を開きます。

> ファイルを直接 `file://` で開いても動きますが、iPad での挙動確認は HTTP サーバー経由が確実です。

## GitHub Pages で公開する

1. このリポジトリの **Settings → Pages** を開く
2. **Source** を `Deploy from a branch` にし、Branch を `main` / `/(root)` に設定
3. 数分後、`https://mypaceotoko.github.io/My-Liberty-Style/` で公開されます

ビルドは不要です。`main` に push すれば自動的に反映されます。

## 質問・タイプの編集

- **質問を変える**：`js/questions.js` の `QUESTIONS` 配列を編集
- **タイプを変える**：`js/types.js` の `TYPES` を編集（コメント・施設・今日のおすすめを書き換え）
- **判定の重み**：各質問の `scores` の数値を変更
- ロジックを触らず文言だけ変えれば、運用しながら磨いていけます

## ターゲット

- 30〜80 代の会員様（高齢者を含む）
- 富裕層・上質志向。クラブを「運動する場所」ではなく「ウェルネスと社交のクラブ」として体験していただくことを目的としています
