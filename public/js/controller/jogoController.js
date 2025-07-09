import { getPlayerAtual, setPlayerAtual } from "./tabuleiroController.js";

let modoJogo = 1;

export function setModoJogo(modo){
    modoJogo = modo;
}

export function getModoJogo(){
    return modoJogo;
}

export function torcarPalayer(){
    if(modoJogo === 2){
        setPlayerAtual(getPlayerAtual() === 1 ? 2 : 1);
    }  
 }