export function salvarModoJogo(modo){
    modoJogo = modo;
}

export function retornaModoJogo(){
    return modoJogo;
}

function torcarPalayer(){
    if(modoJogo === 2){
        playerAtual = playerAtual === 1 ? 2 : 1;
    }  
 }