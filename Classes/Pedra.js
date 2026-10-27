class Pedra {

     
    constructor (x, y, largura, altura){
            
        this.corpo = Matter.Bodies.rectangle(
            x,
            y,
            largura,
            altura,
        );
        
        this.largura = largura;
        this. altura = altura;
    
    
        Matter.World.add(mundo, this.corpo);
        
    }

    mostrar(){
        const posicao = this.corpo.position;
        rectMode(CENTER);
        rect(posicao.x, posicao.y, this.largura, this.altura);
    }








}