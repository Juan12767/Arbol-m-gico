// ==========================================
// CARTA ROMÁNTICA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // CREAR SOBRE
    // ==========================================

    const envelope = document.createElement("div");

    envelope.className = "letter-envelope";

    envelope.innerHTML = `

        <div class="envelope-body">

            <div class="envelope-decoration"></div>

            <div class="envelope-bottom"></div>

            <div class="envelope-flap"></div>

            <div class="envelope-heart">
                💜
            </div>

        </div>

    `;

    document.body.appendChild(envelope);


    // ==========================================
    // CREAR FONDO DE LA CARTA
    // ==========================================

    const overlay = document.createElement("div");

    overlay.className = "letter-overlay";

    document.body.appendChild(overlay);


    // ==========================================
    // CREAR PAPEL
    // ==========================================

    const paper = document.createElement("div");

    paper.className = "letter-paper";

    paper.innerHTML = `

        <button
            class="letter-close"
            aria-label="Cerrar carta">
            ×
        </button>


        <div class="letter-decoration one">
            💕
        </div>

        <div class="letter-decoration two">
            ✨
        </div>


        <h1 class="letter-title">
            Para mi niña 💜
        </h1>


        <div class="letter-subtitle">
            UNA CARTA HECHA CON TODO MI CORAZÓN
        </div>


        <div class="letter-divider"></div>


        <div class="letter-content">

            <p>
                Mi niña, quería hacerte algo diferente. Algo que no
                fuera solamente un regalo, sino un pequeño lugar donde
                pudiera dejar todas esas palabras que muchas veces no
                sé cómo decirte cuando estamos hablando.
            </p>

            <p>
                A veces pienso en todo lo que hemos vivido y me cuesta
                creer que una persona pueda llegar a significar tanto.
                Entre conversaciones, risas, momentos bonitos, días
                difíciles y pequeños detalles, poco a poco te fuiste
                convirtiendo en alguien demasiado especial para mí.
            </p>

            <p>
                Quiero que sepas que admiro muchísimo la persona que
                eres. Tu forma de ser, tu manera de sonreír, tus
                ocurrencias, esos pequeños detalles que probablemente
                tú consideras insignificantes, pero que para mí pueden
                convertir un día normal en uno mucho más bonito.
            </p>

            <p>
                Hay cosas que quizá nunca pueda explicar perfectamente
                con palabras. Por eso hice todo esto. Porque quería que
                cuando entraras aquí sintieras que detrás de cada
                pequeño detalle hubo alguien pensando en ti.
            </p>

            <p>
                Si pudiera guardar algunos momentos para volver a
                vivirlos una y otra vez, guardaría muchos de los que
                compartimos. Guardaría nuestras conversaciones, nuestras
                risas, esas veces en las que simplemente hablar contigo
                hacía que el tiempo pasara demasiado rápido.
            </p>

            <p>
                También quiero agradecerte. Gracias por los momentos
                bonitos, por las palabras, por las sonrisas y por todas
                esas pequeñas cosas que hicieron que fueras formando
                parte de mis recuerdos favoritos.
            </p>

            <p>
                No quiero prometerte un mundo perfecto, porque sé que
                nadie puede hacerlo. Pero sí quiero decirte que cada
                recuerdo bonito que tengo contigo lo guardo con muchísimo
                cariño.
            </p>

            <p>
                Y si alguna vez llegas a sentir que no eres suficiente,
                quiero que recuerdes algo: eres una persona especial.
                No necesitas ser perfecta para ser importante. No
                necesitas cambiar quién eres para merecer cariño.
            </p>

            <p>
                Me gusta pensar que algunas personas llegan a nuestra
                vida para dejarnos recuerdos que permanecen incluso
                cuando pasan los años. Y tú, definitivamente, eres una
                de esas personas para mí.
            </p>

            <p>
                Quizá esta carta tenga muchas palabras, pero aun así
                siento que faltan muchísimas más. Porque decir
                simplemente "te quiero" parece demasiado pequeño para
                todo lo que puede significar una persona.
            </p>

            <p>
                Quiero que cuando veas este pequeño árbol recuerdes que
                cada corazón representa un sentimiento, cada luz una
                esperanza y cada pequeño detalle una parte de todo lo
                que quería regalarte.
            </p>

            <p>
                Y aunque este regalo sea solamente una página en una
                pantalla, detrás de ella hay tiempo, cariño e ilusión.
                Quería construir algo que fuera solamente nuestro,
                algo que pudieras volver a visitar cuando quisieras.
            </p>

            <p>
                Espero que cuando leas esto sonrías aunque sea un
                poquito. Porque si consigo eso, entonces todo este
                esfuerzo habrá valido la pena.
            </p>

            <p>
                Gracias por haber formado parte de mi historia y por
                todos los recuerdos que hemos creado. No sé exactamente
                qué nos traerá el futuro, pero sí sé que siempre voy a
                guardar con cariño todo lo bonito que vivimos.
            </p>

            <p>
                Y si algún día vuelves a abrir esta carta después de
                mucho tiempo, espero que recuerdes que hubo alguien que
                una vez quiso hacerte sentir muy especial y que decidió
                convertir unas simples líneas de código en un pequeño
                rincón lleno de cariño para ti.
            </p>

            <p>
                Porque al final, entre todas las cosas que pude haber
                creado, elegí crear esto pensando en ti. 💜
            </p>

        </div>


        <div class="letter-signature">
            Con muchísimo cariño,<br>
            Juan 💜
        </div>

    `;

    document.body.appendChild(paper);


    // ==========================================
    // ELEMENTOS
    // ==========================================

    const closeButton =
        paper.querySelector(".letter-close");


    // ==========================================
    // ABRIR CARTA
    // ==========================================

    function openLetter() {

        envelope.classList.add("opening");

        overlay.classList.add("open");


        setTimeout(() => {

            paper.classList.add("open");

        }, 450);

    }


    // ==========================================
    // CERRAR CARTA
    // ==========================================

    function closeLetter() {

        paper.classList.remove("open");


        setTimeout(() => {

            overlay.classList.remove("open");

            envelope.classList.remove("opening");

        }, 500);

    }


    // ==========================================
    // EVENTOS
    // ==========================================

    envelope.addEventListener(
        "click",
        openLetter
    );


    closeButton.addEventListener(
        "click",
        closeLetter
    );


    overlay.addEventListener(
        "click",
        closeLetter
    );


    // ==========================================
    // ESC PARA CERRAR
    // ==========================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                paper.classList.contains("open")
            ) {

                closeLetter();

            }

        }
    );

});