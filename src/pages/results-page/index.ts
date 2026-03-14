import { state, Play } from "../../state";
import { goTo, handleRoute } from "../../router";

export function resultsPage() {
  const rootEl = document.querySelector(".root");
  const manosType = state.getState().currentGame;
  if (rootEl) {
    rootEl.innerHTML = `
    <hand-el class="pc-hand" type="${manosType.computerPlay}"></hand-el>
    <hand-el class="my-hand" type="${manosType.myPlay}"></hand-el>
    `;

    const pcHandEl = rootEl.querySelector(".pc-hand") as HTMLElement | null;
    const myHandEl = rootEl.querySelector(".my-hand") as HTMLElement | null;
    if (pcHandEl) {
      pcHandEl.style.marginBottom = "auto";
      pcHandEl.style.transform = "rotate(180deg)";
      pcHandEl.style.alignSelf = "center";
    }
    if (myHandEl) {
      myHandEl.style.marginTop = "auto";
      myHandEl.style.alignSelf = "center";
    }
    state.whoWins(manosType.myPlay as Play, manosType.computerPlay as Play);
    console.log(state.getState());
    const currentState = state.getState();
    if (currentState.gameResult === "draw" || manosType.myPlay === "") {
      goTo("/play");
      handleRoute(location.pathname);
    }
    const scores = state.calculateScore();
    const interval = setInterval(() => {
      if (currentState.gameResult === "lose") {
        const lose = document.createElement("div");
        lose.innerHTML = `
          <star-el class="star" color-star="red"></star-el>
          <score-el my-score="${scores.playerScore}" pc-score="${scores.computerScore}"></score-el>
          <button-el class="button" text-button="Volver a jugar"></button-el>
          `;
        const starEl = lose.querySelector(".star") as HTMLElement;
        lose.style.position = "absolute";
        lose.style.backgroundColor = "rgba(255, 0, 0 ,0.5)";
        lose.style.top = "0";
        lose.style.left = "0";
        lose.style.right = "0";
        lose.style.bottom = "0";
        lose.style.margin = "0 auto";
        lose.style.display = "flex";
        lose.style.flexDirection = "column";
        lose.style.justifyContent = "center";
        lose.style.alignItems = "center";
        lose.style.gap = "10px";
        starEl.style.opacity = "1";
        const buttonEl = lose.querySelector(".button");
        if (buttonEl) {
          buttonEl.addEventListener("click", () => {
            goTo("/play");
            handleRoute(location.pathname);
          });
        }
        rootEl.appendChild(lose);
        clearInterval(interval);
      } else if (currentState.gameResult === "win") {
        const win = document.createElement("div");
        win.innerHTML = `
        <star-el class="star" color-star="green"></star-el>
        <score-el my-score="${scores.playerScore}" pc-score="${scores.computerScore}"></score-el>
        <button-el class="button" text-button="Volver a jugar"></button-el>
        `;
        const starEl = win.querySelector(".star") as HTMLElement;
        win.style.position = "absolute";
        win.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
        win.style.top = "0";
        win.style.left = "0";
        win.style.right = "0";
        win.style.bottom = "0";
        win.style.margin = "0 auto";
        win.style.display = "flex";
        win.style.flexDirection = "column";
        win.style.justifyContent = "center";
        win.style.alignItems = "center";
        win.style.gap = "10px";
        starEl.style.opacity = "1";
        const buttonEl = win.querySelector(".button");
        if (buttonEl) {
          buttonEl.addEventListener("click", () => {
            goTo("/play");
            handleRoute(location.pathname);
          });
        }
        rootEl.appendChild(win);
        clearInterval(interval);
      }
    }, 3000);
    console.log(currentState.history);
  }
}
