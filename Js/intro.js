// ============================================
// INTRODUCCIÓN ROMÁNTICA
// ============================================

// 💜 Fecha en que comenzó la relación
const fechaInicio = new Date(2025, 7, 22, 10, 10, 0);

// 🎂 Próximo aniversario
const anniversary = new Date(2026, 7, 22, 10, 10, 0);


// ============================================
// CONTADOR
// ============================================

function actualizarContadorIntro() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    // Si todavía no ha llegado la fecha de inicio
    if (diferencia < 0) return;

    const segundosTotales = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundosTotales / 86400);

    const horas = Math.floor(
        (segundosTotales % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotales % 3600) / 60
    );

    const segundos = segundosTotales % 60;


    const diasElemento =
        document.getElementById("intro-days");

    const horasElemento =
        document.getElementById("intro-hours");

    const minutosElemento =
        document.getElementById("intro-minutes");

    const segundosElemento =
        document.getElementById("intro-seconds");


    if (!diasElemento) return;


    diasElemento.textContent = dias;

    if (horasElemento) {
        horasElemento.textContent =
            String(horas).padStart(2, "0");
    }

    if (minutosElemento) {
        minutosElemento.textContent =
            String(minutos).padStart(2, "0");
    }

    if (segundosElemento) {
        segundosElemento.textContent =
            String(segundos).padStart(2, "0");
    }
}


// ============================================
// ACTUALIZAR CONTADOR
// ============================================

actualizarContadorIntro();

setInterval(actualizarContadorIntro, 1000);


// ============================================
// BOTÓN CONTINUAR
// ============================================

const botonContinuar =
    document.getElementById("continue-btn");

const pantallaIntro =
    document.getElementById("intro-screen");


if (botonContinuar && pantallaIntro) {

    botonContinuar.addEventListener("click", () => {

        pantallaIntro.classList.add("hide");


        /*
         * Iniciar la música solamente después
         * de que el usuario pulse el botón.
         */

        setTimeout(() => {

            if (
                typeof playBackgroundMusic === "function"
            ) {

                playBackgroundMusic();

            }

        }, 500);

    });

}