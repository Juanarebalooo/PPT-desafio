export function initScore() {
  customElements.define(
    "score-el",
    class ScoreComponent extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const userScore = this.getAttribute("my-score");
        const pcScore = this.getAttribute("pc-score");
        this.shadow.innerHTML = `
        <div class="content">
        <h1 class="title">Score</h1>
        <p class="user">Vos: <span class="user-score">${userScore}</span></p>
        <p class="pc">Máquina: <span class="pc-score">${pcScore}</span></p>
        </div>
        `;
        const style = document.createElement("style");
        style.textContent = `
        .content{
        font-family : "Odibee Sans";
        background-color:white;
        width: 239px;
        height:197px;
        border: 10px black solid;
        border-radius:10px;
        }
        .title {
        font-size:55px;
        margin:0;
        text-align:center;
        }
        .user, .pc {
        font-size:45px;
        margin:0;
        text-align:end;
        margin-right:30px;
        }
        .user{
        margin-top:13px;
        }
        `;
        this.shadow.appendChild(style);
      }
    },
  );
}
