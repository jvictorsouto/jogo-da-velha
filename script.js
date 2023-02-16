
let venceu = '';
let vez = 1;

console.log(document.querySelector('#posicao1').style['backgroundImage'])

function posicoesIdem(a, b, c){
    console.log(a, b, c)
    const posiA = document.querySelector('#posicao'+a).style['backgroundImage'];
    
    const posiB = document.querySelector('#posicao'+b).style['backgroundImage'];
    console.log('outro')
    const posiC = document.querySelector('#posicao'+c).style['backgroundImage'];

    if(posiA === posiB && posiB === posiC && posiA != 'none' && posiA != ''){
        if(posiA.indexOf("1.png") >= 0)
                venceu = "1";
            else
                venceu = "2";
            return true;
    }
    else{
        return false;
    }
        
}
function fimJogo(){
    if(posicoesIdem(3, 5, 7) || posicoesIdem(1, 4, 7) || posicoesIdem(3, 6, 9) ||
        posicoesIdem(4, 5, 6) || posicoesIdem(1, 5, 9) || posicoesIdem(7, 8, 9) ||
        posicoesIdem(2, 5, 8) || posicoesIdem(1, 2, 3)){
         alert(`O jogador ${venceu} venceu!!!`) 

    }
}

posicoesIdem(1, 2, 3)
fimJogo()