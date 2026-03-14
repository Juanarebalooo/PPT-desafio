var e={};e=import.meta.resolve("jDnVC");var t={};function a(){let e=document.querySelector(".root");if(e){e.innerHTML=`
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
    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",()=>{n(s+"/instructions"),o(location.pathname)})}}t=import.meta.resolve("5xVSu");let l={data:{currentGame:{myPlay:"",computerPlay:""},gameResult:"",history:[]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t()},subscribe(e){this.listeners.push(e)},setResults(e){let t=this.getState();t.gameResult="",this.setState({...t,gameResult:e})},whoWins(e,t){let a=this.getState(),l={myPlay:e,computerPlay:t};"tijera"===e&&"papel"===t||"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t?(this.setResults("win"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history))):e===t?this.setResults("draw"):"tijera"===e&&"piedra"===t||"piedra"===e&&"papel"===t?(this.setResults("lose"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history))):"papel"===e&&"tijera"===t&&(this.setResults("lose"),a.history.push(l),localStorage.setItem("gameHistory",JSON.stringify(a.history)))},calculateScore(){let e=this.getState(),t=0,a=0;return e.history.forEach(e=>{let l="tijera"===e.myPlay&&"papel"===e.computerPlay||"piedra"===e.myPlay&&"tijera"===e.computerPlay||"papel"===e.myPlay&&"piedra"===e.computerPlay;l?t++:!l&&a++}),{playerScore:t,computerScore:a}},loadHistory(){let e=localStorage.getItem("gameHistory");e&&(this.data.history=JSON.parse(e))}};function n(e){history.pushState({},"",e)}let s="/PPT-desafio",r=[{path:RegExp(`^${s}/welcome`),content:a},{path:RegExp(`^${s}/instructions`),content:function(){let e=document.querySelector(".root");if(e){e.innerHTML=`
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
    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",()=>{n(s+"/play"),o(location.pathname)})}}},{path:RegExp(`^${s}/play`),content:function(){l.loadHistory();let e=document.querySelector(".root");if(e){e.innerHTML=`
    <div class="counter-circle">
         <span class="counter-number"></span>
         </div>
    <div class="hands-container">
    <hand-el class="tijera" type="tijera"></hand-el>
    <hand-el class="piedra" type="piedra"></hand-el>
    <hand-el class="papel" type="papel"></hand-el>
    </div>
    `;let a=e.querySelector(".tijera"),r=e.querySelector(".piedra"),i=e.querySelector(".papel"),c=document.createElement("style");c.textContent=`
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
    
    `,e.appendChild(c);let p=["#cccccc","#666666","#000000"],d=0,y=p.length,h=e.querySelector(".counter-circle"),u=e.querySelector(".counter-number"),m=setInterval(()=>{if(u?u.textContent=String(d+1):clearInterval(m),h&&(h.style.borderColor=p[d]),++d>=y){clearInterval(m);let e=l.getState(),t=Math.floor(3*Math.random());l.setState({...e,currentGame:{...e.currentGame,computerPlay:["piedra","papel","tijera"][t]}}),setTimeout(()=>{n(s+"/results"),o(location.pathname)},1e3)}},1e3);function t(){a.style.marginTop="0",r.style.marginTop="0",i.style.marginTop="0",a.style.opacity="1",r.style.opacity="1",i.style.opacity="1"}a.addEventListener("click",()=>{t();let e=l.getState();l.setState({...e,currentGame:{...e.currentGame,myPlay:"tijera"}}),r.style.marginTop="100px",i.style.marginTop="100px",r.style.opacity="0.5",i.style.opacity="0.5"}),r.addEventListener("click",()=>{t();let e=l.getState();l.setState({...e,currentGame:{...e.currentGame,myPlay:"piedra"}}),a.style.marginTop="100px",i.style.marginTop="100px",a.style.opacity="0.5",i.style.opacity="0.5"}),i.addEventListener("click",()=>{t();let e=l.getState();l.setState({...e,currentGame:{...e.currentGame,myPlay:"papel"}}),r.style.marginTop="100px",a.style.marginTop="100px",r.style.opacity="0.5",a.style.opacity="0.5"})}}},{path:RegExp(`^${s}/results`),content:function(){let e=document.querySelector(".root"),t=l.getState().currentGame;if(e){e.innerHTML=`
    <hand-el class="pc-hand" type="${t.computerPlay}"></hand-el>
    <hand-el class="my-hand" type="${t.myPlay}"></hand-el>
    `;let a=e.querySelector(".pc-hand"),r=e.querySelector(".my-hand");a&&(a.style.marginBottom="auto",a.style.transform="rotate(180deg)",a.style.alignSelf="center"),r&&(r.style.marginTop="auto",r.style.alignSelf="center"),l.whoWins(t.myPlay,t.computerPlay),console.log(l.getState());let i=l.getState();("draw"===i.gameResult||""===t.myPlay)&&(n(s+"/play"),o(location.pathname));let c=l.calculateScore(),p=setInterval(()=>{if("lose"===i.gameResult){let t=document.createElement("div");t.innerHTML=`
          <star-el class="star" color-star="red"></star-el>
          <score-el my-score="${c.playerScore}" pc-score="${c.computerScore}"></score-el>
          <button-el class="button" text-button="Volver a jugar"></button-el>
          `;let a=t.querySelector(".star");t.style.position="absolute",t.style.backgroundColor="rgba(255, 0, 0 ,0.5)",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.margin="0 auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.gap="10px",a.style.opacity="1";let l=t.querySelector(".button");l&&l.addEventListener("click",()=>{n(s+"/play"),o(location.pathname)}),e.appendChild(t),clearInterval(p)}else if("win"===i.gameResult){let t=document.createElement("div");t.innerHTML=`
        <star-el class="star" color-star="green"></star-el>
        <score-el my-score="${c.playerScore}" pc-score="${c.computerScore}"></score-el>
        <button-el class="button" text-button="Volver a jugar"></button-el>
        `;let a=t.querySelector(".star");t.style.position="absolute",t.style.backgroundColor="rgba(0, 128, 0, 0.5)",t.style.top="0",t.style.left="0",t.style.right="0",t.style.bottom="0",t.style.margin="0 auto",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.gap="10px",a.style.opacity="1";let l=t.querySelector(".button");l&&l.addEventListener("click",()=>{n(s+"/play"),o(location.pathname)}),e.appendChild(t),clearInterval(p)}},3e3);console.log(i.history)}}}];function o(e){let t=document.querySelector(".root");for(let a of(t&&(t.innerHTML=""),r))if(a.path.test(e)){a.content();break}}var i={};i=import.meta.resolve("hbeyn");var c={};c=import.meta.resolve("5mdmA");var p={};p=import.meta.resolve("cnU0O"),customElements.define("button-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("text-button");this.shadow.innerHTML=`
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
        `;let t=this.shadow.querySelector(".img-content");if("red"===e){let e=document.createElement("p");e.textContent="Perdiste",t.style.position="relative",t.style.width="255px",t.style.height="260px",t.style.backgroundSize="255px 260px",t.style.backgroundImage=`url(${this.loseStar})`,e.style.position="absolute",e.style.fontFamily="Odibee Sans",e.style.fontSize="55px",e.style.color="#FFFFFF",e.style.top="16%",e.style.left="25%",t.appendChild(e)}else if("green"===e){let e=document.createElement("p");e.textContent="Ganaste",t.style.position="relative",t.style.width="255px",t.style.height="260px",t.style.backgroundSize="255px 260px",t.style.backgroundImage=`url(${this.winStar})`,e.style.position="absolute",e.style.fontFamily="Odibee Sans",e.style.fontSize="55px",e.style.color="#FFFFFF",e.style.top="16%",e.style.left="25%",t.appendChild(e)}}}),customElements.define("hand-el",class extends HTMLElement{constructor(){super(),this.piedra=new URL(i).href,this.papel=new URL(c).href,this.tijera=new URL(p).href,this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=this.getAttribute("type"),t=document.createElement("img");"tijera"===e?(t.src=`${this.tijera}`,t.alt="tijera",t.classList.add("tijera")):"piedra"===e?(t.src=`${this.piedra}`,t.alt="piedra",t.classList.add("piedra")):"papel"===e&&(t.src=`${this.papel}`,t.alt="papel",t.classList.add("papel")),this.shadow.appendChild(t);let a=document.createElement("style");location.pathname===s+"/play"?a.textContent=`
          .tijera, .piedra, .papel {
          width:103px;
          height:235px;
          }
          `:location.pathname===s+"/results"?a.textContent=`
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
        `,this.shadow.appendChild(a)}}),a(),"/PPT-desafio/"===location.pathname&&history.replaceState({},"","/PPT-desafio/welcome"),o(location.pathname),window.addEventListener("popstate",()=>{o(location.pathname)}),localStorage.clear();
//# sourceMappingURL=desafio.ebf67bf4.js.map
