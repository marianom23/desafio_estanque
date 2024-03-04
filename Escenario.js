
class Escenario {

  constructor(filas, columnas) {
    this.filas = filas;
    this.columnas = columnas;
    this.grid = []; // Matriz para representar el escenario
    // Inicializar la matriz con valores nulos
    for (let i = 0; i < this.filas; i++) {
      this.grid.push(new Array(this.columnas).fill(null));
    }
  }

  agregarPato(color, tipo, x, y) {
    const pato = new Pato(color, tipo, x, y);
    this.grid[x][y] = pato;
  }

  agregarArbusto(x, y){
    const arbusto = new Arbusto(x, y)
    this.grid[x][y] = arbusto;
  }

  agregarSalida(x, y){
    const salida = new Salida(x, y)
    this.grid[x][y] = salida;
  }

  agregarMoneda(x, y){
    const moneda = new Moneda(x, y)
    this.grid[x][y] = moneda;
  }

  // Función para contar el número de monedas restantes en el mapa
    contarMonedasRestantes() {
        let contador = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (this.grid[i][j] instanceof Moneda) {
                    contador++;
                }
            }
        }
        return contador;
    }


  moverJugador(jugador, direccion) {
    // Verificar si la posición del jugador está dentro de los límites del escenario
    // if (jugador.x >= 0 && jugador.x < this.filas && jugador.y >= 0 && jugador.y < this.columnas) {
        let nuevoX = jugador.x;
        let nuevoY = jugador.y;

        // Calcular la nueva posición según la dirección
        switch (direccion) {
            case "up":
                nuevoX--;
                break;
            case "down":
                nuevoX++;
                break;
            case "left":
                nuevoY--;
                break;
            case "right":
                nuevoY++;
                break;
        }

        // Verificar si la nueva posición está dentro de los límites del escenario
        if (nuevoX >= 0 && nuevoX < this.filas && nuevoY >= 0 && nuevoY < this.columnas) {
            // Verificar si la celda de destino está vacía o contiene una moneda o es la salida
            if (this.grid[nuevoX][nuevoY] === null || this.grid[nuevoX][nuevoY] instanceof Moneda || this.grid[nuevoX][nuevoY] instanceof Salida) {
                // Limpiar la celda de la moneda si existe
                if (this.grid[nuevoX][nuevoY] instanceof Moneda) {
                    jugador.sumarMonedas(); // Incrementar el contador de monedas del jugador
                    console.log('Has recolectado una moneda!');
                }

                if (this.grid[nuevoX][nuevoY] instanceof Salida) {
                    const monedasRestantes = this.contarMonedasRestantes();
                    if (monedasRestantes === 0) {
                        alert('¡Has llegado a la salida con todas las monedas! Reiniciando el juego...');
                        location.reload();       
                    } else {
                        alert(`No puedes pasar por la salida sin recoger todas las monedas. Quedan ${monedasRestantes} monedas.`);
                        return;
                    }            
                }

                // Actualizar la posición del jugador en la cuadrícula
                this.grid[jugador.x][jugador.y] = null; // Limpiar la celda anterior del jugador
                jugador.x = nuevoX;
                jugador.y = nuevoY;
                this.grid[nuevoX][nuevoY] = jugador; // Asignar al jugador a la nueva celda
                this.mostrarMatrizEnTabla(); // Actualizar la representación visual
            } else {
                console.log('La nueva posición está ocupada');
            }
        } else {
            console.log('La nueva posición está fuera de los límites del escenario');
        }
    // } else {
    //     console.log('La posición actual está fuera de los límites del escenario');
    // }
}

   mostrarMatrizEnTabla() {
    const tabla = document.getElementById("matriz");

    // Limpiamos la tabla antes de agregar nuevos elementos
    tabla.innerHTML = '';

    // Iteramos sobre la matriz y creamos las filas y celdas correspondientes en la tabla
    for (let i = 0; i < this.filas; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < this.columnas; j++) {
            const celda = document.createElement("td");
            let contenido = '';

            if (this.grid[i][j]) {
                switch (true) {
                    case this.grid[i][j] instanceof Pato:
                        if (this.grid[i][j].tipo === 'jugador') {
                            contenido = '<img src="pato_jugador.png" alt="Player" style="max-width: 45px; max-height: 45px;">';
                        } else {
                            contenido = '<img src="pato_enemigo.png" alt="Enemy" style="max-width: 45px; max-height: 45px;">';
                        }
                        break;
                    case this.grid[i][j] instanceof Arbusto:
                        contenido = '<img src="arbusto.png" alt="Bush" style="max-width: 45px; max-height: 45px;">';
                        break;
                    case this.grid[i][j] instanceof Moneda:
                        contenido = '<img src="moneda.png" alt="Coin" style="max-width: 45px; max-height: 45px;">';
                        break;
                    case this.grid[i][j] instanceof Salida:
                        contenido = '<img src="salida.png" alt="Exit" style="max-width: 45px; max-height: 45px;">';
                        break;
                    default:
                        contenido = ''; // Por defecto, no mostrar nada
                        break;
                }
            }
            celda.innerHTML = contenido;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
  }

}
