export function initButton() {
  customElements.define(
    "button-el",
    class ButtonComponent extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const textoButton = this.getAttribute("text-button");

        this.shadow.innerHTML = `
        <div class="container">
        
        <button class="button">${textoButton}</button>
        </div>
        
        `;

        const buttonEl = this.shadow.querySelector(
          ".button",
        ) as HTMLButtonElement;

        const style = document.createElement("style");
        style.textContent = `
        .container{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        }
        .button{
        width:322px;
        height:87px;
        font-family:"Odibee Sans", sans-serif;
        font-size: 45px;
        color:white;
        background-color: #006CFC;
        border-radius:10px;
        border:solid 10px #001997;
        }
        `;
        this.shadow.appendChild(style);
      }
    },
  );
}
