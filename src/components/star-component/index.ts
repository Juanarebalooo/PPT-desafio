export function initStars() {
  customElements.define(
    "star-el",
    class StarComponent extends HTMLElement {
      loseStar = new URL("../../img/lose-star.png", import.meta.url).href;
      winStar = new URL("../../img/win-star.png", import.meta.url).href;
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const colorStar = this.getAttribute("color-star");
        this.shadow.innerHTML = `
        <div class="img-content"></div>
        `;
        const imgContentEl = this.shadow.querySelector(
          ".img-content",
        ) as HTMLElement;
        if (colorStar === "red") {
          const textoEl = document.createElement("p");
          textoEl.textContent = "Perdiste";
          imgContentEl.style.position = "relative";
          imgContentEl.style.width = "255px";
          imgContentEl.style.height = "260px";
          imgContentEl.style.backgroundSize = "255px 260px";
          imgContentEl.style.backgroundImage = `url(${this.loseStar})`;
          textoEl.style.position = "absolute";
          textoEl.style.fontFamily = "Odibee Sans";
          textoEl.style.fontSize = "55px";
          textoEl.style.color = "#FFFFFF";
          textoEl.style.top = "16%";
          textoEl.style.left = "25%";
          imgContentEl.appendChild(textoEl);
        } else if (colorStar === "green") {
          const textoEl = document.createElement("p");
          textoEl.textContent = "Ganaste";
          imgContentEl.style.position = "relative";
          imgContentEl.style.width = "255px";
          imgContentEl.style.height = "260px";
          imgContentEl.style.backgroundSize = "255px 260px";
          imgContentEl.style.backgroundImage = `url(${this.winStar})`;
          textoEl.style.position = "absolute";
          textoEl.style.fontFamily = "Odibee Sans";
          textoEl.style.fontSize = "55px";
          textoEl.style.color = "#FFFFFF";
          textoEl.style.top = "16%";
          textoEl.style.left = "25%";
          imgContentEl.appendChild(textoEl);
        }
      }
    },
  );
}
