const buttonRed = document.querySelector('#buttonRed');
const buttonYellow = document.querySelector('#buttonYellow');
const buttonGreen = document.querySelector('#buttonGreen');
const buttonAuto = document.querySelector('#buttonAuto');
const buttonOff = document.querySelector('#buttonOff');

const lightRed = document.querySelector('.lightRed');
const lightYellow = document.querySelector('.lightYellow');
const lightGreen = document.querySelector('.lightGreen');

const removeColorRed = lightRed.classList.add("offLight");
const removeColorYellow = lightYellow.classList.add("offLight");
const removeColorGreen = lightGreen.classList.add("offLight");

const addColorRed = lightRed.classList.remove("offLight");
const addColorYellow = lightYellow.classList.remove("offLight");
const addColorGreen = lightGreen.classList.remove("offLight");

export const classOffLight = '.offLight';

export { buttonRed, buttonYellow, buttonGreen, buttonAuto, buttonOff };
export { lightRed, lightYellow, lightGreen };
export { removeColorRed, removeColorYellow, removeColorGreen };
export { addColorRed, addColorYellow, addColorGreen };