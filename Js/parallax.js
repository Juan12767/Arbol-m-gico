/*======================================
            PARALLAX
======================================*/

const tree = document.getElementById("tree-container");
const moon = document.getElementById("moon");
const stars = document.getElementById("stars");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth)-0.5;
    const y=(e.clientY/window.innerHeight)-0.5;

    if(tree){

        tree.style.transform=
        `translate(calc(-50% + ${x*20}px), calc(-50% + ${y*20}px))`;

    }

    if(moon){

        moon.style.transform=
        `translate(${x*-30}px,${y*-30}px)`;

    }

    if(stars){

        stars.style.transform=
        `translate(${x*-10}px,${y*-10}px)`;

    }

});