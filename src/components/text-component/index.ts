export function initText() {
  customElements.define(
    "text-el",
    class TextComponent extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const textAttribute = this.getAttribute("tag-text");

        this.shadow.innerHTML = `
        <div class="container"></div>
        `;
        const containerEl = this.shadow.querySelector(".container");
        if (textAttribute === "p") {
          const pEl = document.createElement("p");
          pEl.textContent =
            "Presioná jugar y elegí:piedra, papel o tijera antes de que el contador llegue a 3.";
          pEl.style.fontFamily = "Courier Prime, monospace";
          pEl.style.fontSize = "38px";
          pEl.style.fontWeight = "600";
          pEl.style.color = "#000000";
          pEl.style.textAlign = "center";
          containerEl?.appendChild(pEl);
        } else if (textAttribute === "h1") {
          const h1El = document.createElement("h1");
          h1El.textContent = "Piedra Papel Tijera";
          h1El.style.fontFamily = "Courier Prime, monospace";
          h1El.style.fontSize = "80px";
          h1El.style.fontWeight = "700";
          h1El.style.color = "#009048";
          h1El.style.marginLeft = "34px";
          containerEl?.appendChild(h1El);
        }
      }
    },
  );
}
