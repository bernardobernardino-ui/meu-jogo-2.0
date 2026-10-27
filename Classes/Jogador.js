
class Jogador {

  constructor(x, y, largura, altura) {

    this.corpo = Matter.Bodies.rectangle(
      x,
      y,
      largura,
      altura
    );

    this.x = x;
    this.y = y;

    this.largura = largura;
    this.altura = altura;

    this.puloDisponivel = 5;

    this.imagem = loadImage("assets/gosmaaa.png");

    // Adiciona o jogador ao mundo físico
    Matter.World.add(mundo, this.corpo);
  }

  mostrar() {
    const posicao = this.corpo.position;

    push();
    translate(posicao.x, posicao.y);
    imageMode(CENTER);

    image(
      this.imagem,
      0, 15,
      120, 60,
      90, 220,
      260, 110
    );

    pop();
  }

  mover(direcao) {
    Matter.Body.applyForce(
      this.corpo,
      this.corpo.position,
      {
        x: direcao * 0.05,
        y: 0
      }
    );
  }

  pular() {
    if (this.puloDisponivel > 0) {
      Matter.Body.applyForce(
        this.corpo,
        this.corpo.position,
        {
          x: 0,
          y: -0.09
        }
      );

      this.puloDisponivel--;
    }
  }

  resetarPulos() {
    this.puloDisponivel = 5;
  }
}
