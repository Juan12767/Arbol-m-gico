const stars = document.createElement("div");

stars.id="stars";

document.body.appendChild(stars);

for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*6+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    star.style.opacity=Math.random();

    star.style.width=(1+Math.random()*3)+"px";

    star.style.height=star.style.width;

    stars.appendChild(star);

}

/*=========================================
        ESTRELLAS FUGACES
=========================================*/

function createShootingStar(){

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random()*35 + "vh";
    star.style.left = (Math.random()*40 + 50) + "vw";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },1800);

}

setInterval(()=>{

    if(Math.random() < 0.65){

        createShootingStar();

    }

},3500);