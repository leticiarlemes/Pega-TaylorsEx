class inimigos{
    constructor(){
      this.img = imgInimigos[int(random(0,4))];
      this.posicaox = 50;
      this.posicaoy = random(30,570);
      this.velocidade = random(1,5);
      this.largura = 50;
      this.altura = 60;
      this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.altura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
    
    //para os inimigos/objetos se moverem
    mova(){
      this.posicaox += this.velocidade;
      
      image(this.img, this.posicaoy, this.posicaox, this.largura, this.altura);
      this.yInicial= this.posicaoy;
      this.yFinal= this.posicaoy + this.largura;
      this.xInicial= this.posicaox;
      this.xFinal = this.posicaox + this.altura;
      
    }
  }