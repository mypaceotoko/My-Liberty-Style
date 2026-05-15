// 画面遷移と状態管理

const state = {
  screen: "intro",   // "intro" | "question" | "result"
  currentIndex: 0,
  answers: []
};

const root = document.getElementById("app");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function render() {
  if (state.screen === "intro") return renderIntro();
  if (state.screen === "question") return renderQuestion();
  if (state.screen === "result") return renderResult();
}

function renderIntro() {
  root.innerHTML = `
    <section class="screen intro">
      <div class="intro-card">
        <p class="brand-mark">LIBERTY HILL CLUB</p>
        <h1 class="title">My Liberty Style</h1>
        <p class="lead">あなたに合った、<br>クラブでの過ごし方を<br>ご提案いたします。</p>
        <p class="sub">8つのご質問に、ゆっくりとお答えください。</p>
        <button class="primary-button" id="startBtn" type="button">はじめる</button>
      </div>
    </section>
  `;
  document.getElementById("startBtn").addEventListener("click", start);
}

function start() {
  state.screen = "question";
  state.currentIndex = 0;
  state.answers = [];
  render();
}

function renderQuestion() {
  const total = QUESTIONS.length;
  const idx = state.currentIndex;
  const q = QUESTIONS[idx];
  const remaining = total - idx;
  const progress = (idx / total) * 100;

  root.innerHTML = `
    <section class="screen question">
      <header class="q-header">
        <div class="progress-bar" aria-hidden="true">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>
        <p class="remaining">あと ${remaining} 問</p>
      </header>
      <div class="q-card">
        <p class="q-num">Question ${idx + 1} / ${total}</p>
        <h2 class="q-text">${escapeHtml(q.text)}</h2>
        <div class="options">
          ${q.options.map((opt, i) => `
            <button class="option-button" data-index="${i}" type="button">${escapeHtml(opt.label)}</button>
          `).join("")}
        </div>
      </div>
      <footer class="q-footer">
        ${idx > 0 ? '<button class="back-button" id="backBtn" type="button">← 前の質問へ</button>' : ""}
      </footer>
    </section>
  `;

  const buttons = root.querySelectorAll(".option-button");
  let locked = false;
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (locked) return;
      locked = true;
      const i = Number(btn.dataset.index);
      state.answers[idx] = q.options[i];
      buttons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      btn.blur();
      setTimeout(() => {
        if (idx < total - 1) {
          state.currentIndex++;
          render();
        } else {
          state.screen = "result";
          render();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 280);
    });
  });

  const backBtn = document.getElementById("backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        render();
      }
    });
  }
}

function renderResult() {
  const result = diagnose(state.answers);
  const type = result.type;

  // 質問8で選んだ「今日のおすすめ」を先頭に。重複は除く。
  const todayList = result.todayPick
    ? [result.todayPick, ...type.todayPicks.filter((t) => t !== result.todayPick)].slice(0, 3)
    : type.todayPicks.slice(0, 3);

  root.innerHTML = `
    <section class="screen result">
      <div class="result-card">
        <p class="result-label">あなたのクラブライフタイプ</p>
        <h1 class="type-name">${escapeHtml(type.name)}</h1>
        <p class="type-tagline">— ${escapeHtml(type.tagline)} —</p>
        <p class="type-description">${escapeHtml(type.description)}</p>

        <div class="section">
          <h3 class="section-title">おすすめの施設・レッスン</h3>
          <ul class="facility-list">
            ${type.facilities.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
        </div>

        <div class="today-pick">
          <h3 class="section-title">今日のおすすめ</h3>
          <ul class="today-list">
            ${todayList.map((t, i) => `<li class="${i === 0 ? "highlight" : ""}">${escapeHtml(t)}</li>`).join("")}
          </ul>
        </div>

        <button class="primary-button" id="restartBtn" type="button">もう一度診断する</button>
      </div>
    </section>
  `;

  document.getElementById("restartBtn").addEventListener("click", () => {
    state.screen = "intro";
    state.currentIndex = 0;
    state.answers = [];
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", render);
