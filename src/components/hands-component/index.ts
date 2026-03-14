export function initHands() {
  customElements.define(
    "hand-el",
    class HandsComponent extends HTMLElement {
      piedra = new URL("../../img/piedra.png", import.meta.url).href;
      papel = new URL("../../img/papel.png", import.meta.url).href;
      tijera = new URL("../../img/tijera.png", import.meta.url).href;
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const handType = this.getAttribute("type");
        const imgEl = document.createElement("img");

        if (handType === "tijera") {
          imgEl.src = `${this.tijera}`;
          imgEl.alt = "tijera";
          imgEl.classList.add("tijera");
        } else if (handType === "piedra") {
          imgEl.src = `${this.piedra}`;
          imgEl.alt = "piedra";
          imgEl.classList.add("piedra");
        } else if (handType === "papel") {
          imgEl.src = `${this.papel}`;
          imgEl.alt = "papel";
          imgEl.classList.add("papel");
        }
        this.shadow.appendChild(imgEl);
        const style = document.createElement("style");
        if (location.pathname === "/play") {
          style.textContent = `
          .tijera, .piedra, .papel {
          width:103px;
          height:235px;
          }
          `;
          this.shadow.appendChild(style);
        } else if (location.pathname === "/results") {
          style.textContent = `
          .tijera, .piedra, .papel{
          width:160px;
          height:330px;
          }
          `;
          this.shadow.appendChild(style);
        } else {
          style.textContent = `
          @media(min-width:720px){
          .tijera, .piedra, .papel{
          width:79px;
          height:181px;
          }
          }
          `;
          this.shadow.appendChild(style);
        }
      }
    },
  );
}
