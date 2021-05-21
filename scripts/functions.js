import { classOffLight, lightGreen, lightRed, lightYellow } from "./variables.js";

export function changeColors() {
    if(lightRed.matches(classOffLight) && lightYellow.matches(classOffLight) && lightGreen.matches(classOffLight)) {
        lightRed.classList.remove('offLight');
        lightYellow.classList.add('offLight');
        lightGreen.classList.add('offLight');

    } else if(lightYellow.matches(classOffLight) && lightGreen.matches(classOffLight)) {
        lightYellow.classList.remove('offLight');
        lightRed.classList.add('offLight');
        lightGreen.classList.add('offLight');
    } else if(lightGreen.matches(classOffLight) && lightRed.matches(classOffLight)) {
        lightGreen.classList.remove('offLight');
        lightRed.classList.add('offLight');
        lightYellow.classList.add('offLight');
    } else {
        lightYellow.classList.add('offLight');
        lightRed.classList.add('offLight');
        lightGreen.classList.add('offLight');
    }
}