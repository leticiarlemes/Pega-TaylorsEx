function executar_jogo(){ 
    background(vImagemEstrada);
    
      
    Jogador.mova();
    print(pontos);
  
    //movimentação
    

    //faz os personagens voltarem
    for(let i = 0; i < Inimigos.length; i++){
      Inimigos[i].mova();
      //bater na borda
      if (Inimigos[i].posicaox > 400){
        Inimigos[i] = new inimigos();
      }
      
    
    if(
        Jogador.yInicial< Inimigos[i].xFinal &&
  Jogador.yFinal>Inimigos[i].xInicial &&
  Jogador.xInicial< Inimigos[i].yFinal &&
  Jogador.xFinal>Inimigos[i].yInicial 
        ){
          
      if (
      Inimigos[i].img == imgInimigos[3] ){
         Inimigos[i]= new inimigos(Inimigos[i].posicaoy);
         
       vidas ++;
      
if(vidas==3){
 controleTela = "Gameover"
     vidas = 0;
     pontos= 0;
     Jogador= new jogador();
}
      
      }
      else{ 
      console.log(Inimigos[i].yFinal)
          Inimigos[i] = new inimigos(Inimigos[i].posicaoy);
       pontos++;
       Inimigos[i].velocidade += 1;
        
           }
      }}
            
       text("Pontuação:" + pontos,10,20) 
  text
  text("vidas:" + vidas,10,50) 
  text

  }