const jogo = {
  jogador1: {
    name: "",
    qtsVenceu: 0,
  },
  jogador2: {
    name: "",
    qtsVenceu: 0,
  },
  deuVelha: 0,
  venceu: "",
  vez: 1,
};

const audioClick = new Audio("./mp3/click.mp3");
const audioVenceu = new Audio("./mp3/venceu.mp3");
const audioEmpate = new Audio("./mp3/empate.wav");

const posi = document.querySelectorAll("td");

document.querySelector(".iniciarJogo").addEventListener("click", () => {
    
  if (
      document.querySelector(".campo1").getElementsByTagName("input")[0].value !=
      '' &&
      document.querySelector(".campo2").getElementsByTagName("input")[0].value !=
      '' &&
      document.querySelector(".campo1").getElementsByTagName("input")[0].value !=
      null &&
      document.querySelector(".campo2").getElementsByTagName("input")[0].value !=
      null
  )
  {
    jogo.jogador1.name = document.querySelector(".campo1").getElementsByTagName("input")[0].value;
    jogo.jogador2.name = document.querySelector(".campo2").getElementsByTagName("input")[0].value;

    document.querySelector(".inicioJogo").style.display = 'none';
    document.querySelector(".container").style.display = 'flex';

    document.querySelector(".jogador1").querySelector(".nome").innerHTML = jogo.jogador1.name;

    document.querySelector(".jogador1").querySelector(".qtsGanhou").innerHTML = jogo.jogador1.qtsVenceu;

    document.querySelector(".jogador2").querySelector(".nome").innerHTML = jogo.jogador2.name;

    document.querySelector(".jogador2").querySelector(".qtsGanhou").innerHTML = jogo.jogador2.qtsVenceu;

    document.querySelector(".deuVelha").querySelector(".qtsVelha").innerHTML = jogo.deuVelha;
  }
  else{
    alert('É necessário preenhcer os dois nomes para iniciar o jogo')
  }
});



function atualizarPlacar() {
  document.querySelector(".jogador1").querySelector(".nome").innerHTML = jogo.jogador1.name;
  document.querySelector(".jogador1").querySelector(".qtsGanhou").innerHTML = jogo.jogador1.qtsVenceu;
  document.querySelector(".jogador2").querySelector(".nome").innerHTML = jogo.jogador2.name;
  document.querySelector(".jogador2").querySelector(".qtsGanhou").innerHTML = jogo.jogador2.qtsVenceu;
  document.querySelector(".deuVelha").querySelector(".qtsVelha").innerHTML = jogo.deuVelha;
}

function posicoesIdem(a, b, c) {
  if (document.querySelector("#posicao" + a).innerHTML === document.querySelector("#posicao" + b).innerHTML && document.querySelector("#posicao" + b).innerHTML === document.querySelector("#posicao" + c).innerHTML && document.querySelector("#posicao" + a).innerHTML != "none" && document.querySelector("#posicao" + a).innerHTML != "") {
    if (document.querySelector("#posicao" + a).innerHTML.indexOf("1.png") >= 0) {
      jogo.jogador1.qtsVenceu++;
      jogo.venceu = "O Jogador numero 1 venceu!!!! <br> (clique para continuar)";
    } else if (document.querySelector("#posicao" + a).innerHTML.indexOf("2.png") >= 0) {
      jogo.jogador2.qtsVenceu++;
      jogo.venceu = "O Jogador numero 2 venceu!!!! <br> (clique para continuar)";
    }
    document.querySelector("#posicao" + a).style.borderColor = 'green';
    document.querySelector("#posicao" + b).style.borderColor = 'green';
    document.querySelector("#posicao" + c).style.borderColor = 'green';
    document.querySelector(".confete").style.display = 'flex';
    atualizarPlacar();
    
    return true;
  } else {
    return false;
  }
}
function fimJogo() {
  if (
    posicoesIdem(3, 5, 7) ||
    posicoesIdem(1, 4, 7) ||
    posicoesIdem(3, 6, 9) ||
    posicoesIdem(4, 5, 6) ||
    posicoesIdem(1, 5, 9) ||
    posicoesIdem(7, 8, 9) ||
    posicoesIdem(2, 5, 8) ||
    posicoesIdem(1, 2, 3)
  ) {
    audioVenceu.play();
    document.querySelector(".resultado").innerHTML = jogo.venceu;

  }
}
function empate() {
  let result = "";

  for (let i = 0; i < posi.length; i++) {
    if (posi[i].getElementsByTagName("img").length == 0) {
      result = 1;
    }
  }

  if (result != 1 && jogo.venceu == "") {
    document.querySelector(".resultado").innerHTML = "Deu Velha";
    jogo.deuVelha++;
    audioEmpate.play();

    setTimeout(() => {
      for (let i = 0; i < posi.length; i++) {
        jogo.venceu = "";
        posi[i].innerHTML = "";
        document.querySelector(".resultado").innerHTML = "";
      }
      jogo.vez = 1;
    }, 1500);
    
    atualizarPlacar();
  }
}

for (let i = 0; i < posi.length; i++) {
  posi[i].addEventListener("click", function (e) {
    audioClick.play();
    if (jogo.venceu) return;
    if (e.target.getElementsByTagName("img").length == 0) {
      e.target.innerHTML = `<img src="./img/${jogo.vez}.png">`;

      fimJogo();
      empate();

      if (jogo.vez == 1) jogo.vez = 2;
      else jogo.vez = 1;
    }
  });
}
document.querySelector(".confete").addEventListener("click", () => {
    audioVenceu.pause();
    document.querySelector(".confete").style.display = 'none';
    document.querySelector(".resultado").innerHTML = "";
    for (let i = 0; i < posi.length; i++) {
      posi[i].style.borderColor = 'white';
    }
    for (let i = 0; i < posi.length; i++) {
      jogo.venceu = "";
      posi[i].innerHTML = "";
      
    }
    jogo.vez = 1;
})
document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector(".jogador1").querySelector(".qtsGanhou").innerHTML = 0;
  document.querySelector(".jogador2").querySelector(".qtsGanhou").innerHTML = 0;
  document.querySelector(".deuVelha").querySelector(".qtsVelha").innerHTML = 0;
});

document.querySelector(".inicio").addEventListener("click", () => {
    document.querySelector(".inicioJogo").style.display = 'flex';
    document.querySelector(".container").style.display = 'none';
    document.querySelector(".campo1").getElementsByTagName("input")[0].value = '';
    document.querySelector(".campo2").getElementsByTagName("input")[0].value = '';
    jogo.jogador1.qtsVenceu = 0;
    jogo.jogador2.qtsVenceu = 0;
    jogo.deuVelha = 0;
  });
