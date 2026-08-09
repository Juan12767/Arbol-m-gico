//© Zero - Código libre no comercial


// =====================================================
// CARGAR SVG Y ANIMAR EL ÁRBOL
// =====================================================

fetch('Img/treelove.svg')
.then(res => {

    if (!res.ok) {
        throw new Error('No se pudo cargar treelove.svg');
    }

    return res.text();

})
.then(svgText => {

    const container =
        document.getElementById('tree-container');

    if (!container) return;

    container.innerHTML = svgText;


    const svg =
        container.querySelector('svg');

    if (!svg) {
        console.error('No se encontró el SVG del árbol.');
        return;
    }


    // =================================================
    // ANIMACIÓN DE DIBUJO
    // =================================================

    const allPaths =
        Array.from(svg.querySelectorAll('path'));


    allPaths.forEach(path => {

        path.style.stroke = '#222';

        path.style.strokeWidth = '2.5';

        path.style.fillOpacity = '0';


        try {

            const length =
                path.getTotalLength();

            path.style.strokeDasharray =
                length;

            path.style.strokeDashoffset =
                length;

        } catch (error) {

            console.warn(
                'No se pudo calcular la longitud de un path.',
                error
            );

        }


        path.style.transition = 'none';

    });


    // =================================================
    // INICIAR ANIMACIÓN
    // =================================================

    setTimeout(() => {


        allPaths.forEach((path, i) => {

            path.style.transition =
                `stroke-dashoffset 1.2s cubic-bezier(.77,0,.18,1) ${i * 0.08}s,
                 fill-opacity 0.5s ${0.9 + i * 0.08}s`;

            path.style.strokeDashoffset = 0;


            setTimeout(() => {

                path.style.fillOpacity = '1';

                path.style.stroke = '';

                path.style.strokeWidth = '';

            }, 1200 + i * 80);

        });


        // =================================================
        // MOVER Y AGRANDAR EL ÁRBOL
        // =================================================

        const totalDuration =
            1200 +
            (allPaths.length - 1) * 80 +
            500;


        setTimeout(() => {

            svg.classList.add('move-and-scale');


            setTimeout(() => {

                // Texto de la carta/dedicatoria
                showDedicationText();

                // Pétalos
                startFloatingObjects();

                // Lluvia de palabras
                startLoveWords();

                // Música
                playBackgroundMusic();

            }, 1200);


        }, totalDuration);


    }, 50);


    // =================================================
    // DETECTAR CORAZONES
    // =================================================

    const heartPaths =
        allPaths.filter(path => {

            const style =
                (
                    path.getAttribute('style') || ''
                ).toLowerCase();


            const fill =
                (
                    path.getAttribute('fill') || ''
                ).toLowerCase();


            const className =
                (
                    path.getAttribute('class') || ''
                ).toLowerCase();


            let computedFill = '';

            try {

                computedFill =
                    getComputedStyle(path)
                    .fill
                    .toLowerCase();

            } catch (error) {

                // No pasa nada si no se puede obtener
                // el color calculado.

            }


            // Colores originales del árbol
            const heartColors = [

                '#fc6f58',
                '#c1321f',
                '#ff6f61',
                '#ff5a5f',
                '#e74c3c',
                '#f44336',
                '#ff0000',
                'rgb(252, 111, 88)',
                'rgb(193, 50, 31)'

            ];


            return heartColors.some(color =>

                style.includes(color) ||
                fill.includes(color) ||
                computedFill.includes(color)

            ) || className.includes('heart');

        });


    console.log(
        'Corazones encontrados:',
        heartPaths.length
    );


    // =================================================
    // ANIMACIÓN DE LOS CORAZONES
    // =================================================

    heartPaths.forEach(path => {

        path.classList.add(
            'animated-heart'
        );

    });


    // =================================================
    // MENSAJES DE LOS CORAZONES
    // =================================================

    const heartMessages = [

        "Eres una de las cosas más bonitas que me han pasado. 💜",

        "Mi niña, gracias por existir y por formar parte de mi vida. 🌸💜",

        "No importa cuántos días pasen, siempre habrá un pedacito de mi corazón para ti. 💗",

        "Tu sonrisa tiene una forma muy bonita de alegrarme el día. 🌷",

        "Si pudiera elegir nuevamente, volvería a conocerte a ti. 💜✨",

        "Gracias por todos los momentos bonitos que hemos vivido juntos. 🥹💗",

        "Eres especial para mí de una manera que las palabras no alcanzan a explicar. 💕",

        "Mi lugar favorito siempre será donde pueda estar contigo. 🌙💜",

        "Ojalá pudiera guardar cada recuerdo bonito contigo para siempre. ✨",

        "Te quiero muchísimo, mi niña. Nunca olvides lo importante que eres para mí. 🫶💜",

        "Y si algún día dudas de cuánto significas para mí... recuerda este pequeño corazón. 💜"

    ];


    // =================================================
    // CREAR FONDO DEL MENSAJE
    // =================================================

    const messageOverlay =
        document.createElement('div');

    messageOverlay.className =
        'heart-message-overlay';

    document.body.appendChild(
        messageOverlay
    );


    // =================================================
    // CREAR CAJA DEL MENSAJE
    // =================================================

    const messageBox =
        document.createElement('div');

    messageBox.className =
        'heart-message';

    document.body.appendChild(
        messageBox
    );


    // =================================================
    // BOTÓN CERRAR
    // =================================================

    const closeButton =
        document.createElement('button');

    closeButton.className =
        'heart-message-close';

    closeButton.textContent =
        'Cerrar 💜';

    messageBox.appendChild(
        closeButton
    );


    // =================================================
    // MOSTRAR MENSAJE
    // =================================================

    function showHeartMessage(index) {

        const message =
            heartMessages[
                index % heartMessages.length
            ];


        // Eliminar mensaje anterior

        const oldText =
            messageBox.querySelector(
                '.heart-message-text'
            );

        if (oldText) {
            oldText.remove();
        }


        // Crear nuevo mensaje

        const text =
            document.createElement('div');

        text.className =
            'heart-message-text';

        text.textContent =
            message;


        messageBox.insertBefore(
            text,
            closeButton
        );


        // Mostrar

        messageOverlay.classList.add(
            'visible'
        );

        messageBox.classList.add(
            'visible'
        );

    }


    // =================================================
    // CERRAR MENSAJE
    // =================================================

    function closeHeartMessage() {

        messageOverlay.classList.remove(
            'visible'
        );

        messageBox.classList.remove(
            'visible'
        );

    }


    closeButton.addEventListener(
        'click',
        closeHeartMessage
    );


    messageOverlay.addEventListener(
        'click',
        closeHeartMessage
    );


    // =================================================
    // HACER CORAZONES INTERACTIVOS
    // =================================================

    heartPaths.forEach(
        (heart, index) => {

            heart.classList.add(
                'heart-interactive'
            );


            // Importante:
            // pointer-events permite clicar el SVG

            heart.style.pointerEvents =
                'auto';


            heart.addEventListener(
                'click',
                event => {

                    event.stopPropagation();

                    showHeartMessage(index);

                }
            );


        }
    );


})
.catch(error => {

    console.error(
        'Error cargando el árbol:',
        error
    );

});


// =====================================================
// PARÁMETROS DE URL
// =====================================================

function getURLParam(name) {

    const url =
        new URL(window.location.href);

    return url.searchParams.get(name);

}


// =====================================================
// TEXTO DE DEDICATORIA
// =====================================================

function showDedicationText() {

    let text =
        getURLParam('text');


    if (!text) {

        text =
`Para el amor de mi vida Heejin:

Desde el primer momento supe que eras tú. Tu sonrisa, tu voz, tu forma de ser… todo en ti me hace sentir en casa.

Gracias por acompañarme en cada paso, por entenderme incluso en silencio, y por llenar mis días de amor.

Te amo más de lo que las palabras pueden expresar.

"Desde que llegaste, todo es más bonito... hasta los días que antes eran grises ahora tienen tu color🌸💜💜🌸".

No estamos juntos pero si tú quieres podemos intentarlo 💜`;

    } else {

        text =
            decodeURIComponent(text)
            .replace(/\\n/g, '\n');

    }


    const container =
        document.getElementById(
            'dedication-text'
        );


    if (!container) return;


    container.classList.add(
        'typing'
    );


    let i = 0;


    function type() {

        if (i <= text.length) {

            container.textContent =
                text.slice(0, i);

            i++;


            setTimeout(
                type,
                text[i - 2] === '\n'
                    ? 350
                    : 45
            );

        } else {

            setTimeout(
                showSignature,
                600
            );

        }

    }


    type();

}


// =====================================================
// FIRMA
// =====================================================

function showSignature() {

    const dedication =
        document.getElementById(
            'dedication-text'
        );


    if (!dedication) return;


    let signature =
        dedication.querySelector(
            '#signature'
        );


    if (!signature) {

        signature =
            document.createElement(
                'div'
            );

        signature.id =
            'signature';

        signature.className =
            'signature';

        dedication.appendChild(
            signature
        );

    }


    const firma =
        getURLParam('firma');


    signature.textContent =
        firma
            ? decodeURIComponent(firma)
            : "Con amor, Juan💜";


    signature.classList.add(
        'visible'
    );

}


// =====================================================
// PÉTALOS FLOTANTES
// =====================================================

function startFloatingObjects() {

    const container =
        document.getElementById(
            'floating-objects'
        );


    if (!container) return;


    let count = 0;


    function spawn() {

        const el =
            document.createElement(
                'div'
            );


        el.className =
            'floating-petal';


        el.style.left =
            `${Math.random() * 90 + 2}%`;


        el.style.top =
            `${100 + Math.random() * 10}%`;


        el.style.opacity =
            0.7 +
            Math.random() * 0.3;


        container.appendChild(
            el
        );


        const duration =
            9000 +
            Math.random() * 5000;


        const drift =
            (Math.random() - 0.5) *
            180;


        setTimeout(() => {

            el.style.transition =
                `transform ${duration}ms linear,
                 opacity 1.2s`;


            el.style.transform =
                `translate(
                    ${drift}px,
                    -110vh
                )
                scale(
                    ${0.8 + Math.random() * 0.6}
                )
                rotate(
                    ${Math.random() * 360}deg
                )`;


            el.style.opacity =
                0.2;


        }, 30);


        setTimeout(() => {

            if (el.parentNode) {
                el.remove();
            }

        }, duration + 2000);


        if (count++ < 180) {

            setTimeout(
                spawn,
                120 +
                Math.random() * 180
            );

        } else {

            setTimeout(
                spawn,
                300 +
                Math.random() * 500
            );

        }

    }


    spawn();

}


// =====================================================
// LLUVIA DE PALABRAS BONITAS
// =====================================================

const loveWords = [

    "Te amo 💜",
    "Mi niña 🌸",
    "Mi amor 💗",
    "Siempre tú ✨",
    "Te quiero 🫶",
    "Mi preciosa 🌷",
    "Eres especial 💜",
    "Mi lugar favorito eres tú 🌙",
    "Gracias por existir 💕",
    "Mi niña bonita 🌸",
    "Tú y yo 💜",
    "Te adoro ✨",
    "Mi vida 💗",
    "Siempre contigo 🫶",
    "Eres mi personita favorita 💜"

];


let loveWordsStarted = false;


function startLoveWords() {

    // Evita iniciar la lluvia varias veces

    if (loveWordsStarted) return;

    loveWordsStarted = true;


    function createLoveWord() {

        const word =
            document.createElement(
                'div'
            );


        word.className =
            'love-word';


        word.textContent =
            loveWords[
                Math.floor(
                    Math.random() *
                    loveWords.length
                )
            ];


        const left =
            Math.random() * 90 + 5;


        const drift =
            (Math.random() - 0.5) *
            140;


        const duration =
            7000 +
            Math.random() * 5000;


        word.style.left =
            `${left}%`;


        word.style.setProperty(
            '--drift',
            `${drift}px`
        );


        word.style.animationDuration =
            `${duration}ms`;


        document.body.appendChild(
            word
        );


        setTimeout(() => {

            if (word.parentNode) {
                word.remove();
            }

        }, duration + 500);

    }


    createLoveWord();


    setInterval(
        createLoveWord,
        900
    );

}


// =====================================================
// MÚSICA
// =====================================================

function playBackgroundMusic() {

    const audio =
        document.getElementById(
            'bg-music'
        );


    if (!audio) return;


    const musicaParam =
        getURLParam('musica');


    if (musicaParam) {

        const cleanName =
            decodeURIComponent(
                musicaParam
            ).replace(
                /[^\w\d .\-]/g,
                ''
            );


        audio.src =
            'Music/' +
            cleanName;

    }


    let btn =
        document.getElementById(
            'music-btn'
        );


    if (!btn) {

        btn =
            document.createElement(
                'button'
            );


        btn.id =
            'music-btn';


        btn.textContent =
            '🔊 Música';


        btn.style.position =
            'fixed';


        btn.style.bottom =
            '18px';


        btn.style.right =
            '18px';


        btn.style.zIndex =
            99;


        btn.style.background =
            'rgba(255,255,255,0.85)';


        btn.style.border =
            'none';


        btn.style.borderRadius =
            '24px';


        btn.style.padding =
            '10px 18px';


        btn.style.fontSize =
            '1.1em';


        btn.style.cursor =
            'pointer';


        document.body.appendChild(
            btn
        );

    }


    audio.volume = 0.7;

    audio.loop = true;


    audio.play()
        .then(() => {

            btn.textContent =
                '🔊 Música';

        })
        .catch(() => {

            btn.textContent =
                '▶️ Música';

        });


    btn.onclick = () => {

        if (audio.paused) {

            audio.play();

            btn.textContent =
                '🔊 Música';

        } else {

            audio.pause();

            btn.textContent =
                '🔈 Música';

        }

    };

}