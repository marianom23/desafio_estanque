const TipoPato = {
  JUGADOR: 'jugador',
  ENEMIGO: 'enemigo'
};


class Pato {

  constructor(color, tipo, x, y) {
    this.color = color;
    this.tipo = tipo;
    this.x = x;
    this.y = y;
    this.contadorMonedas = 0; 
  }

  sumarMonedas() {
    this.contadorMonedas++;
    document.getElementById("valor-contador").textContent = this.contadorMonedas;
  }

}
