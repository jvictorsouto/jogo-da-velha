const posi = document.querySelectorAll('td');
const resultado = document.querySelector('.resultado');
let venceu = '';
let vez = 1;

function posicoesIdem(a, b, c){
   
    const posiA = document.querySelector('#posicao'+a).innerHTML;
    
    const posiB = document.querySelector('#posicao'+b).innerHTML;
  
    const posiC = document.querySelector('#posicao'+c).innerHTML;

    if(posiA === posiB && posiB === posiC && posiA != 'none' && posiA != ''){
        if(posiA.indexOf("1.png") >= 0){
                venceu = "O Jogador numero 1 venceu!!!!";
        }        
        else if(posiA.indexOf("2.png") >= 0){
                venceu = "O Jogador numero 2 venceu!!!!";
        }
        else{
           
        }
               
            return true;
    }
    else{
        return false;
    }
        
}
function fimJogo(){
    if(
        posicoesIdem(3, 5, 7) || posicoesIdem(1, 4, 7) || posicoesIdem(3, 6, 9) ||
        posicoesIdem(4, 5, 6) || posicoesIdem(1, 5, 9) || posicoesIdem(7, 8, 9) ||
        posicoesIdem(2, 5, 8) || posicoesIdem(1, 2, 3)){
            
       setTimeout( () => {
        resultado.innerHTML = venceu;
        setTimeout( () => {
            for(let i = 0; i < posi.length; i++){
                posi[i].innerHTML = ""
                resultado.innerHTML = '';
            }
        }, 1000) 
        vez = 1
       }, 500) 
       

       
    }
    
}
function empate(){

    let result = '';

    for(let i = 0; i < posi.length; i++){
        if(posi[i].getElementsByTagName('img').length == 0){
            result = 1;
        }
        else{
            
        }
    }

    if(result != 1 && venceu == ''){
        setTimeout( () => {
            resultado.innerHTML= 'Deu Velha'
            setTimeout( () => {
                for(let i = 0; i < posi.length; i++){
                    posi[i].innerHTML = ""
                    resultado.innerHTML = '';
                }
            }, 1000)
            vez = 1 
           }, 500)
    }
}

for(let i = 0; i < posi.length; i++){
 posi[i].addEventListener('click', function (e) {
    if(e.target.getElementsByTagName('img').length == 0){

    e.target.innerHTML = `<img src="./img/${vez}.png">`;

    
    fimJogo()
    empate()
    
    
        if(vez == 1) vez=2;
        else vez = 1;
    } 
 })

}
