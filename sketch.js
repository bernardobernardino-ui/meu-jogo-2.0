const Motor = Matter.Engine,
        Mundo = Matter.World,
        Corpos = Matter.Bodies,
        SAT = Matter.SAT,
        Collision = Matter.Collision;
        let motor, mundo;
        let jogador;
        let portal;
        let plataformas = [];
        let nivelAtual = 1
        let pedra = [];
        function setup() {
  createCanvas(windowWidth,windowHeight);
          motor = Motor.create();
          mundo = motor.world;
          nivel_2()
          


        }


function draw() {
  background("yellow");
  Motor.update(motor);
  if(jogador){
  translate(-jogador.corpo.position.x+width/2, -jogador.corpo.position.y+height/2)
   jogador.mostrar();

}
 
  if(pedra){
    pedra.mostrar()
  }

  for(let plataforma of plataformas){
    plataforma.mostrar()
   if(jogadorTocandoPlataforma(jogador, plataforma)){
    jogador.resetarPulos()
  
  }
  }
  if (portal) {
    portal.Mostrar();
  }
 if (jogador && portal) {
    verificarColisaoComPortal(jogador, portal);
  }
}


function keyPressed() {
  if (!jogador) return;

  if (key === "d" || key === "D") {
    jogador.mover(1);
  }

  if (key === "a" || key === "A") {
    jogador.mover(-1);
  }

  if (key === "w" || key === "W") {
    jogador.pular();
  }
}

function jogadorTocandoPlataforma(jogador, plataforma){
 if (!jogador || !plataforma) {
    return false;
  }
  const posicaoJogador = jogador.corpo.position
  const posicaoPlataforma = plataforma.corpo.position
  const tocando =
     posicaoJogador.y + jogador.altura / 2 >= posicaoPlataforma.y - plataforma.altura / 2 &&
     posicaoJogador.x + jogador.largura / 2 >= posicaoPlataforma.x - plataforma.largura / 2 &&
     posicaoJogador.x - jogador.largura / 2 <= posicaoPlataforma.x + plataforma.largura / 2;
 
   return tocando;
}
function verificarColisaoComPortal(jogador, portal){
  if (!jogador || !portal) {
    return;
  }
  let colisao = SAT.collides(jogador.corpo, portal.corpo);
    if(colisao.collided){
      proximoNivel()
  }

}
function windowResized() {//sever para redimensionar a tela
    resizeCanvas(windowWidth, windowHeight);//redimensiona a tela
    }

function nivel_1(){
  jogador = new Jogador(95, height -100, 70, 70);
          plataformas.push (  new Plataforma(100, height -60, 70,30));
          plataformas.push (  new Plataforma(342, height -60, 70,30));
          plataformas.push (  new Plataforma(1200, height -200, 70,30));
          plataformas.push (  new Plataforma(2000, height -150, 70,30));
          plataformas.push (  new Plataforma(2767, height -400, 70,30));
          plataformas.push (  new Plataforma(3350, height -300, 70,30));
          plataformas.push (  new Plataforma(3950, height -200, 70,30));
          plataformas.push (  new Plataforma(4350, height -100, 70,30));
          plataformas.push (  new Plataforma(4950, height -200, 70,30));
          plataformas.push (  new Plataforma(5350, height -300, 70,30));
          plataformas.push (  new Plataforma(5950, height -400, 70,30));
          plataformas.push (  new Plataforma(6350, height -500, 70,30));
          plataformas.push (  new Plataforma(6950, height -600, 70,30));
          
        portal = new Porta(6980, height -660, 167, 130);
        
}
  function nivel_2(){
    jogador = new Jogador(95, height -100, 70,70);
    plataformas.push ( new Plataforma(200, height -60, 70, 30));
    plataformas.push ( new Plataforma(300, height -90, 70, 30));
    plataformas.push ( new Plataforma(400, height -120, 70, 30));
    plataformas.push ( new Plataforma(500, height -170, 70, 30));
    plataformas.push ( new Plataforma(600, height -200, 70, 30));
    plataformas.push ( new Plataforma(700, height -225, 70, 30));
    plataformas.push ( new Plataforma(800, height -250, 70, 30));
    plataformas.push ( new Plataforma(900, height -220, 70, 30));
    plataformas.push ( new Plataforma(1000, height -260, 70, 30));
    plataformas.push ( new Plataforma(1100, height -287, 70, 30));
    plataformas.push ( new Plataforma(1200, height -300, 70, 30));
    plataformas.push ( new Plataforma(1300, height -305, 70, 30));
    plataformas.push ( new Plataforma(1400, height -295, 70, 30));
    pedra = new Pedra(100, height -330, 70,30);
  
  
  
  
  
  
  }

// na proxima aula vmasos fazer cair pedras

      
function limparNivel(){
  if(jogador){
    Mundo.remove(
      mundo,
      jogador.corpo
    )
    jogador = null
  }
    for (let plataforma of plataformas){
      Mundo.remove(mundo, plataforma.corpo);
    }
      plataformas = [];
  
      if(portal){
        Mundo.remove(mundo, portal.corpo);
        portal = null;
      }
  
  
  
    }

function proximoNivel(){
  limparNivel();
  nivelAtual++
  alert(nivelAtual)
  //alert
if(nivelAtual ===2){
  nivel_2()
}


}

function criarPedras(){
  if(millis()<tempoProximaPedra)return;

  const tamanho = 50;

  const x = jogador.corpo.position.x;


  
}








/*       
MELHORIAS DO JOGO
Melhorar colisão com a porta 
Arrumar area das plataformas
*/
