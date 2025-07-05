let modoJogo = 1;

export function setModoJogo(modo){
    modoJogo = modo;
}

export function getModoJogo(){
    return modoJogo;
}

function torcarPalayer(){
    if(modoJogo === 2){
        playerAtual = playerAtual === 1 ? 2 : 1;
    }  
 }