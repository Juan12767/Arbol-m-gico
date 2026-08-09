/*==========================================
        PARTÍCULAS MÁGICAS
==========================================*/

const particleContainer = document.createElement("div");
particleContainer.id = "magic-particles";

document.body.appendChild(particleContainer);

function createParticle(){

    const p = document.createElement("span");

    p.className = "magic-particle";

    // Zona alrededor del árbol
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const radius = 180;

    const angle = Math.random() * Math.PI * 2;

    const distance = Math.random() * radius;

    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;

    p.style.left = x + "px";
    p.style.top = y + "px";

    const colors = [
        "#ffffff",
        "#ffd6ff",
        "#d79bff",
        "#b56cff",
        "#ffb6ec"
    ];

    p.style.background = colors[Math.floor(Math.random()*colors.length)];

    const size = 2 + Math.random()*5;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.animationDuration = (5+Math.random()*5)+"s";

    particleContainer.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },10000);

}

setInterval(()=>{

    createParticle();

},120);