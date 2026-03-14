import { goTo, handleRoute } from "../../router";
import { state } from "../../state";
export function playPage() {
  state.loadHistory();
  const rootEl = document.querySelector(".root");
  if (rootEl) {
    rootEl.innerHTML = `
    <div class="counter-circle">
         <span class="counter-number"></span>
         </div>
    <div class="hands-container">
    <hand-el class="tijera" type="tijera"></hand-el>
    <hand-el class="piedra" type="piedra"></hand-el>
    <hand-el class="papel" type="papel"></hand-el>
    </div>
    `;
    const tijeraEl = rootEl.querySelector(".tijera") as HTMLElement;
    const piedraEl = rootEl.querySelector(".piedra") as HTMLElement;
    const papelEl = rootEl.querySelector(".papel") as HTMLElement;
    const style = document.createElement("style");
    style.textContent = `
    .counter-circle {
        width: 243px;
        height: 243px;
        border-radius: 50%;
        border: 20px solid white;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        font-family: "Odibee Sans";
        margin:0 auto;
        margin-top:85px;
        }
    .hands-container{
    display:flex;
    margin-top:auto;
    align-self:center;
    gap:15px;
    }
    
    `;
    rootEl.appendChild(style);
    const colors = ["#cccccc", "#666666", "#000000"];
    let count = 0;
    const maxCount = colors.length;
    const counterCircle = rootEl.querySelector(
      ".counter-circle",
    ) as HTMLElement;
    const counterNumber = rootEl.querySelector(".counter-number");

    const interval = setInterval(() => {
      if (counterNumber) {
        counterNumber.textContent = String(count + 1);
      } else {
        clearInterval(interval);
      }
      if (counterCircle) {
        counterCircle.style.borderColor = colors[count];
      }
      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        const currentState = state.getState();
        const plays = ["piedra", "papel", "tijera"];
        const numeroAleatorio = Math.floor(Math.random() * 3);
        state.setState({
          ...currentState,
          currentGame: {
            ...currentState.currentGame,
            computerPlay: plays[numeroAleatorio],
          },
        });

        setTimeout(() => {
          goTo("/results");
          handleRoute(location.pathname);
        }, 1000);
      }
    }, 1000);

    function resetHands() {
      tijeraEl.style.marginTop = "0";
      piedraEl.style.marginTop = "0";
      papelEl.style.marginTop = "0";
      tijeraEl.style.opacity = "1";
      piedraEl.style.opacity = "1";
      papelEl.style.opacity = "1";
    }
    tijeraEl.addEventListener("click", () => {
      resetHands();
      const currentState = state.getState();
      state.setState({
        ...currentState,
        currentGame: { ...currentState.currentGame, myPlay: "tijera" },
      });
      piedraEl.style.marginTop = "100px";
      papelEl.style.marginTop = "100px";
      piedraEl.style.opacity = "0.5";
      papelEl.style.opacity = "0.5";
    });
    piedraEl.addEventListener("click", () => {
      resetHands();
      const currentState = state.getState();
      state.setState({
        ...currentState,
        currentGame: {
          ...currentState.currentGame,
          myPlay: "piedra",
        },
      });
      tijeraEl.style.marginTop = "100px";
      papelEl.style.marginTop = "100px";
      tijeraEl.style.opacity = "0.5";
      papelEl.style.opacity = "0.5";
    });
    papelEl.addEventListener("click", () => {
      resetHands();
      const currentState = state.getState();
      state.setState({
        ...currentState,
        currentGame: {
          ...currentState.currentGame,
          myPlay: "papel",
        },
      });
      piedraEl.style.marginTop = "100px";
      tijeraEl.style.marginTop = "100px";
      piedraEl.style.opacity = "0.5";
      tijeraEl.style.opacity = "0.5";
    });
  }
}
