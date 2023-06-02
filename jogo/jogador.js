class jogador{
    constructor(){
      this.image= loadImage('jogo/imgJogo/personagem.png')
      //posição inicial do jogador
      this.posicaox= 250;
      this.posicaoy= 290;
      this.velocidade= 5;
      //tamnaho do jogador
      this.altura= 80;
      this.largura= 100; 
      
       this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy - this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
  }
    //fazer o jogador se mover
  mova(){
    
      image(this.image, this.posicaox, this.posicaoy, this.largura, this.altura);
    
    
    //para direita
    
    if((keyIsDown(39)) && (this.xFinal<600)){ 
      this.posicaox +=  this.velocidade;
    }
    //para esquerda
     if((keyIsDown(37)) &&  (this.xInicial>0)){
      this.posicaox -=  this.velocidade;
    }
    this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
  }
    
  }
  