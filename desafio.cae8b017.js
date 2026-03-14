var e={};e=import.meta.resolve("jDnVC");var t={};t=import.meta.resolve("5xVSu");var a={};a=import.meta.resolve("hbeyn");var l={};l=import.meta.resolve("5mdmA");var n={};n=import.meta.resolve("cnU0O");let s={data:{currentGame:{myPlay:"",computerPlay:""},gameResult:"",history:[]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t()},subscribe(e){this.listeners.push(e)},setResults(e){let t=this.getState();t.gameResult="",this.setState({...t,gameResult:e})},whoWins(e,t){let a=this.getState(),l={myPlay:e,computerPlay:t};"tijera"===e&&"papel"===t||"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t?(this.setResults("win"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history))):e===t?this.setResults("draw"):"tijera"===e&&"piedra"===t||"piedra"===e&&"papel"===t?(this.setResults("lose"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history))):"papel"===e&&"tijera"===t&&(this.setResults("lose"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history)))},calculateScore(){let e=this.getState(),t=0,a=0;return e.history.forEach(e=>{let l="tijera"===e.myPlay&&"papel"===e.computerPlay||"piedra"===e.myPlay&&"tijera"===e.computerPlay||"papel"===e.myPlay&&"piedra"===e.computerPlay;l?t++:!l&&a++}),{playerScore:t,computerScore:a}},loadHistory(){let e=localStorage.getItem("gameHistory");e&&(this.data.history=JSON.parse(e))}};function r(e){history.pushState({},"",e)}let o=[{path:/\/welcome/,content:c},{path:/\/instructions/,content:function(){let e=document.querySelector(".root");if(e){e.innerHTML=`
    <text-el class="text" tag-text="p"></text-el>
    <button-el class="button" text-button="\xa1Jugar!"></button-el>
    <div class="hands-container">
    <hand-el type="tijera"></hand-el>
    <hand-el type="piedra"></hand-el>
    <hand-el type="papel"></hand-el>
    </div>
    `,e.querySelector(".hands-container").style.cssText=`
    display:flex;
    margin-top:auto;
    align-self:center;
    gap:46px;
    `;let t=document.createElement("style");t.textContent=`
    @media(min-width:720px){
    .text{
    margin-top:135px;
    }
    }
    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",()=>{r("/play"),i(location.pathname)})}}},{path:/\/play/,content:function(){s.loadHistory();let e=document.querySelector(".root");if(e){e.innerHTML=`
    <div class="counter-circle">
         <span class="counter-number"></span>
         </div>
    <div class="hands-container">
    <hand-el class="tijera" type="tijera"></hand-el>
    <hand-el class="piedra" type="piedra"></hand-el>
    <hand-el class="papel" type="papel"></hand-el>
    </div>
    `;let a=e.querySelector(".tijera"),l=e.querySelector(".piedra"),n=e.querySelector(".papel"),o=document.createElement("style");o.textContent=`
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
    
    `,e.appendChild(o);let c=["#cccccc","#666666","#000000"],p=0,d=c.length,y=e.querySelector(".counter-circle"),h=e.querySelector(".counter-number"),u=setInterval(()=>{if(h?h.textContent=String(p+1):clearInterval(u),y&&(y.style.borderColor=c[p]),++p>=d){clearInterval(u);let e=s.getState(),t=Math.floor(3*Math.random());s.setState({...e,currentGame:{...e.currentGame,computerPlay:["piedra","papel","tijera"][t]}}),setTimeout(()=>{r("/results"),i(location.pathname)},1e3)}},1e3);function t(){a.style.marginTop="0",l.style.marginTop="0",n.style.marginTop="0",a.style.opacity="1",l.style.opacity="1",n.style.opacity="1"}a.addEventListener("click",()=>{t();let e=s.getState();s.setState({...e,currentGame:{...e.currentGame,myPlay:"tijera"}}),l.style.marginTop="100px",n.style.marginTop="100px",l.style.opacity="0.5",n.style.opacity="0.5"}),l.addEventListener("click",()=>{t();let e=s.getState();s.setState({...e,currentGame:{...e.currentGame,myPlay:"piedra"}}),a.style.marginTop="100px",n.style.marginTop="100px",a.style.opacity="0.5",n.style.opacity="0.5"}),n.addEventListener("click",()=>{t();let e=s.getState();s.setState({...e,currentGame:{...e.currentGame,myPlay:"papel"}}),l.style.marginTop="100px",a.style.marginTop="100px",l.style.opacity="0.5",a.style.opacity="0.5"})}}},{path:/\/results/,content:function(){let e=document.querySelector(".root"),t=s.getState().currentGame;if(e){e.innerHTML=`
    <hand-el class="pc-hand" type="${t.computerPlay}"></hand-el>
    <hand-el class="my-hand" type="${t.myPlay}"></hand-el>
    `;let a=e.querySelector(".pc-hand"),l=e.querySelector(".my-hand");a&&(a.style.marginBottom="auto",a.style.transform="rotate(180deg)",a.style.alignSelf="center"),l&&(l.style.marginTop="auto",l.style.alignSelf="center"),s.whoWins(t.myPlay,t.computerPlay),console.log(s.getState());let n=s.getState();("draw"===n.gameResult||""===t.myPlay)&&(r("/play"),i(location.pathname));let o=s.calculateScore(),c=setInterval(()=>{if("lose"===n.gameResult){let t=document.createElement("div");t.innerHTML=`
          <star-el class="star" color-star="red"></star-el>
          <score-el my-score="${o.playerScore}" pc-score="${o.computerScore}"></score-el>
          <button-el class="button" text-button="Volver a jugar"></button-el>
          `;let a=t.querySelector(".star");t.style.position="absolute",t.style.backgroundColor="rgba(255, 0, 0 ,0.5)",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.margin="0 auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.gap="10px",a.style.opacity="1";let l=t.querySelector(".button");l&&l.addEventListener("click",()=>{r("/play"),i(location.pathname)}),e.appendChild(t),clearInterval(c)}else if("win"===n.gameResult){let t=document.createElement("div");t.innerHTML=`
        <star-el class="star" color-star="green"></star-el>
        <score-el my-score="${o.playerScore}" pc-score="${o.computerScore}"></score-el>
        <button-el class="button" text-button="Volver a jugar"></button-el>
        `;let a=t.querySelector(".star");t.style.position="absolute",t.style.backgroundColor="rgba(0, 128, 0, 0.5)",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.margin="0 auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.gap="10px",a.style.opacity="1";let l=t.querySelector(".button");l&&l.addEventListener("click",()=>{r("/play"),i(location.pathname)}),e.appendChild(t),clearInterval(c)}},3e3);console.log(n.history)}}}];function i(e){let t=document.querySelector(".root");for(let a of(t&&(t.innerHTML=""),o))if(a.path.test(e)){a.content();break}}function c(){let e=document.querySelector(".root");if(e){e.innerHTML=`
    <text-el class="text" tag-text="h1"></text-el>
    <button-el class="button" text-button="Empezar"></button-el>
    <div class="hands-container">
    <hand-el type="tijera"></hand-el>
    <hand-el type="piedra"></hand-el>
    <hand-el type="papel"></hand-el>
    </div>
    `,e.querySelector(".hands-container").style.cssText=`
    display:flex;
    margin-top:auto;
    align-self:center;
    gap:46px;
    `;let t=document.createElement("style");t.textContent=`
    @media(min-width:720px){
    .text{
    margin-top:135px;
    }
    }
    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",()=>{r("/instructions"),i(location.pathname)})}}customElements.define("button-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("text-button");this.shadow.innerHTML=`
        <div class="container">
        
        <button class="button">${e}</button>
        </div>
        
        `,this.shadow.querySelector(".button");let t=document.createElement("style");t.textContent=`
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
        `,this.shadow.appendChild(t)}}),customElements.define("text-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("tag-text");this.shadow.innerHTML=`
        <div class="container"></div>
        `;let t=this.shadow.querySelector(".container");if("p"===e){let e=document.createElement("p");e.textContent="Presioná jugar y elegí:piedra, papel o tijera antes de que el contador llegue a 3.",e.style.fontFamily="Courier Prime, monospace",e.style.fontSize="38px",e.style.fontWeight="600",e.style.color="#000000",e.style.textAlign="center",t?.appendChild(e)}else if("h1"===e){let e=document.createElement("h1");e.textContent="Piedra Papel Tijera",e.style.fontFamily="Courier Prime, monospace",e.style.fontSize="80px",e.style.fontWeight="700",e.style.color="#009048",e.style.marginLeft="34px",t?.appendChild(e)}}}),customElements.define("star-el",class extends HTMLElement{constructor(){super(),this.loseStar=new URL(e).href,this.winStar=new URL(t).href,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("color-star");this.shadow.innerHTML=`
        <div class="img-content"></div>
        `;let t=this.shadow.querySelector(".img-content");if("red"===e){let e=document.createElement("p");e.textContent="Perdiste",t.style.position="relative",t.style.width="255px",t.style.height="260px",t.style.backgroundSize="255px 260px",t.style.backgroundImage=`url(${this.loseStar})`,e.style.position="absolute",e.style.fontFamily="Odibee Sans",e.style.fontSize="55px",e.style.color="#FFFFFF",e.style.top="16%",e.style.left="25%",t.appendChild(e)}else if("green"===e){let e=document.createElement("p");e.textContent="Ganaste",t.style.position="relative",t.style.width="255px",t.style.height="260px",t.style.backgroundSize="255px 260px",t.style.backgroundImage=`url(${this.winStar})`,e.style.position="absolute",e.style.fontFamily="Odibee Sans",e.style.fontSize="55px",e.style.color="#FFFFFF",e.style.top="16%",e.style.left="25%",t.appendChild(e)}}}),customElements.define("hand-el",class extends HTMLElement{constructor(){super(),this.piedra=new URL(a).href,this.papel=new URL(l).href,this.tijera=new URL(n).href,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("type"),t=document.createElement("img");"tijera"===e?(t.src=`${this.tijera}`,t.alt="tijera",t.classList.add("tijera")):"piedra"===e?(t.src=`${this.piedra}`,t.alt="piedra",t.classList.add("piedra")):"papel"===e&&(t.src=`${this.papel}`,t.alt="papel",t.classList.add("papel")),this.shadow.appendChild(t);let a=document.createElement("style");"/play"===location.pathname?a.textContent=`
          .tijera, .piedra, .papel {
          width:103px;
          height:235px;
          }
          `:"/results"===location.pathname?a.textContent=`
          .tijera, .piedra, .papel{
          width:160px;
          height:330px;
          }
          `:a.textContent=`
          @media(min-width:720px){
          .tijera, .piedra, .papel{
          width:79px;
          height:181px;
          }
          }
          `,this.shadow.appendChild(a)}}),customElements.define("score-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("my-score"),t=this.getAttribute("pc-score");this.shadow.innerHTML=`
        <div class="content">
        <h1 class="title">Score</h1>
        <p class="user">Vos: <span class="user-score">${e}</span></p>
        <p class="pc">M\xe1quina: <span class="pc-score">${t}</span></p>
        </div>
        `;let a=document.createElement("style");a.textContent=`
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
        `,this.shadow.appendChild(a)}}),c(),"/"==location.pathname&&history.replaceState({},"","/welcome"),i(location.pathname),window.addEventListener("popstate",()=>{i(location.pathname)}),localStorage.clear();
//# sourceMappingURL=desafio.cae8b017.js.map
