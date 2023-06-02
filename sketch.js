//criação das variaveis
let vImagemEstrada;
let Inimigos = [];
let imgInimigos =[];
let Jogador;
let pontos = 0;
let soundbomba;
let soundinimigos;
let imgAbertura;
let controleTela= "inicio";
let imgFinal;
let vidas = 0;
    
  
  

//aparecer as img
function preload(){
   vImagemEstrada = loadImage('jogo/imgJogo/palco.png');
   imgInimigos[0]= loadImage('jogo/imgJogo/inimigo-1.png');
    imgInimigos[1]= loadImage('jogo/imgJogo/inimigo-2.png');
    imgInimigos[2]= loadImage('jogo/imgJogo/inimigo-3.png');
  imgInimigos[3]= loadImage('jogo/imgJogo/bomba.png');
  
 

  //aparecer os objt
  Inimigos[0] = new inimigos(45);
  Inimigos[1] = new inimigos(170);
  Inimigos[2] = new inimigos(500);
  Inimigos[3] = new inimigos(270);
  
  //cria o jogador
  Jogador= new jogador();
  
  imgAbertura= loadImage('./jogo/imgJogo/start.gif');
  imgFinal = loadImage("./jogo/imgJogo/fim.png")


}


//define tamanho do jogo
function setup() {
  createCanvas(600, 400).parent("jogo");

}

function keyPressed(){
  if(keyCode==32)
  controleTela = "jogo"
}



//desenha o jogo, o fundo, as posições, os movimentos
function draw(){
if(controleTela == "inicio"){
  mostraAbertura();
}
if(controleTela == "jogo"){
   executar_jogo();
}
if(controleTela == "Gameover"){
  Gameover();
}

 




}