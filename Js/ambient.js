/*=========================================
        EFECTOS AMBIENTE
=========================================*/

const ambient = document.createElement("div");
ambient.id = "ambient";
document.body.appendChild(ambient);

const symbols = ["✨","💜","❤","✦"];

function createAmbient(){

    const p = document.createElement("span");

    p.className = "ambient-item";

    p.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];

    p.style.left = Math.random()*100 + "vw";

    p.style.top = "105vh";

    p.style.fontSize = (8 + Math.random()*10) + "px";

    p.style.opacity = .2 + Math.random()*.6;

    p.style.animationDuration = (8 + Math.random()*8) + "s";

    p.style.animationDelay = Math.random()*2 + "s";

    ambient.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },17000);

}

setInterval(()=>{

    createAmbient();

},180);