import { goTo, handleRoute } from "../../router";

export function welcomePage() {
  const rootEl = document.querySelector(".root");
  if (rootEl) {
    rootEl.innerHTML = `
    <text-el class="text" tag-text="h1"></text-el>
    <button-el class="button" text-button="Empezar"></button-el>
    <div class="hands-container">
    <hand-el type="tijera"></hand-el>
    <hand-el type="piedra"></hand-el>
    <hand-el type="papel"></hand-el>
    </div>
    `;
    const handsContainerEl = rootEl.querySelector(
      ".hands-container",
    ) as HTMLElement;
    handsContainerEl.style.cssText = `
    display:flex;
    margin-top:auto;
    align-self:center;
    gap:46px;
    `;
    const style = document.createElement("style");
    style.textContent = `
    @media(min-width:720px){
    .text{
    margin-top:135px;
    }
    }
    `;
    rootEl.appendChild(style);
    const buttonEl = rootEl.querySelector(".button") as HTMLElement;
    buttonEl.addEventListener("click", () => {
      goTo("/instructions");
      handleRoute(location.pathname);
    });
  }
}
