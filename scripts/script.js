import { buttonRed, buttonYellow, buttonGreen, buttonAuto, buttonOff, lightRed, lightYellow, lightGreen } from './variables.js';
import { changeColors } from './functions.js';

// --------------- LIGAR APENAS VERMELHO --------------- //

buttonRed.addEventListener('click', () => {
    lightGreen.classList.add('offLight');
    lightYellow.classList.add('offLight');
    lightRed.classList.remove('offLight');
})



// --------------- LIGAR APENAS AMARELO --------------- //



buttonYellow.addEventListener('click', () => {
    lightRed.classList.add('offLight');
    lightGreen.classList.add('offLight');
    lightYellow.classList.remove('offLight');
})


// --------------- LIGAR APENAS VERDE --------------- //


buttonGreen.addEventListener('click', () => {
    lightRed.classList.add('offLight');
    lightYellow.classList.add('offLight');
    lightGreen.classList.remove('offLight');
})


// --------------- LIGAR O LOOP --------------- //


buttonAuto.addEventListener('click', () => {
    lightRed.classList.add('offLight');
    lightYellow.classList.add('offLight');
    lightGreen.classList.add('offLight');
    const pause = setInterval(changeColors, 500);
    buttonOff.addEventListener('click', () => {
        clearInterval(pause);
    })
});


// --------------- DESLIGAR --------------- //


buttonOff.addEventListener('click', () => {
    lightRed.classList.add('offLight');
    lightYellow.classList.add('offLight');
    lightGreen.classList.add('offLight');
})