

// Función principal (main)
function main() {
    // Crear un nuevo escenario
    document.addEventListener("keydown", moveByArrowKeys);

    const escenario = new Escenario(10, 10);

    escenario.agregarPato('amarillo', TipoPato.JUGADOR, 0, 0)
    escenario.agregarPato('naranja', TipoPato.ENEMIGO, 3, 4)
    
    escenario.agregarSalida(9, 8);
    escenario.agregarMoneda(2, 6);
    escenario.agregarMoneda(8, 4);

    document.getElementById("up").addEventListener("click", moveByClicks);
    document.getElementById("left").addEventListener("click", moveByClicks);
    document.getElementById("right").addEventListener("click", moveByClicks);
    document.getElementById("down").addEventListener("click", moveByClicks);

    function moveByClicks(clickEvent) {
      
        const jugador = escenario.grid
        .flatMap(row => row) // Aplanar el array de filas en un solo array de celdas
        .find(cell => cell instanceof Pato && cell.tipo === TipoPato.JUGADOR);

      
        if (jugador) {
          // Mover el pato en la dirección correspondiente a la tecla presionada
          switch (clickEvent.target.id) {
            case "up":
            //   jugador.moverArriba();
              escenario.moverJugador(jugador, "up")
              break;
            case "down":
            //   jugador.moverAbajo();
              escenario.moverJugador(jugador, "down")
              break;
            case "left":
            //   jugador.moverIzquierda();
              escenario.moverJugador(jugador, "left")
              break;
            case "right":
            //   jugador.moverDerecha();
              escenario.moverJugador(jugador, "right")
              break;
          }
      
          // Volver a mostrar la matriz en la tabla HTML después de mover el pato
          escenario.mostrarMatrizEnTabla();
        }
      }

    function moveByArrowKeys(event) {
    const jugador = escenario.grid
        .flatMap(row => row)
        .find(cell => cell instanceof Pato && cell.tipo === TipoPato.JUGADOR);
    
    if (jugador) {
        switch (event.key) {
        case "ArrowUp":
            escenario.moverJugador(jugador, "up");
            break;
        case "ArrowDown":
            escenario.moverJugador(jugador, "down");
            break;
        case "ArrowLeft":
            escenario.moverJugador(jugador, "left");
            break;
        case "ArrowRight":
            escenario.moverJugador(jugador, "right");
            break;
        }
    
        escenario.mostrarMatrizEnTabla();
    }
    }

        // Crear una instancia del cañón
    const cannon = new Cañon();

    // Manejo de eventos para los botones de apuntado
    document.getElementById("aim_up").addEventListener("click", function() {
        cannon.apuntar(-1, 0); // Apuntar hacia arriba
    });

    document.getElementById("aim_down").addEventListener("click", function() {
        cannon.apuntar(1, 0); // Apuntar hacia abajo
    });

    document.getElementById("aim_left").addEventListener("click", function() {
        cannon.apuntar(0, -1); // Apuntar hacia la izquierda
    });

    document.getElementById("aim_right").addEventListener("click", function() {
        cannon.apuntar(0, 1); // Apuntar hacia la derecha
    });

    document.getElementById("aim_up_left").addEventListener("click", function() {
        cannon.apuntar(-1, -1); // Apuntar hacia arriba-izquierda
    });

    document.getElementById("aim_up_right").addEventListener("click", function() {
        cannon.apuntar(-1, 1); // Apuntar hacia arriba-derecha
    });

    document.getElementById("aim_down_left").addEventListener("click", function() {
        cannon.apuntar(1, -1); // Apuntar hacia abajo-izquierda
    });

    document.getElementById("aim_down_right").addEventListener("click", function() {
        cannon.apuntar(1, 1); // Apuntar hacia abajo-derecha
    });

    // Manejo de eventos para el botón de disparo
    document.getElementById("shoot").addEventListener("click", function() {
        // Obtener al jugador desde el escenario
        const jugador = escenario.grid
            .flatMap(row => row)
            .find(cell => cell instanceof Pato && cell.tipo === TipoPato.JUGADOR);

        if (jugador) {
            // Disparar en la dirección definida por el apuntado
            cannon.dispararEnemigosEnRango(escenario, jugador.x, jugador.y);
            // Volver a mostrar la matriz en la tabla HTML después de disparar
            escenario.mostrarMatrizEnTabla();
        }
    });



    escenario.agregarArbusto(0, 5);
    escenario.agregarArbusto(3, 0);
    escenario.agregarArbusto(4, 0);
    escenario.agregarArbusto(5, 0);
    escenario.agregarArbusto(6, 0);
    escenario.agregarArbusto(7, 0);
    escenario.agregarArbusto(8, 0);
    escenario.agregarArbusto(9, 0);
    
    escenario.agregarArbusto(0, 4);
    escenario.agregarArbusto(2, 0);
    escenario.agregarArbusto(3, 1);
    escenario.agregarArbusto(4, 1);
    escenario.agregarArbusto(5, 1);
    escenario.agregarArbusto(6, 1);
    escenario.agregarArbusto(7, 1);
    escenario.agregarArbusto(8, 1);
    escenario.agregarArbusto(9, 1);
    
    escenario.agregarArbusto(0, 3);
    escenario.agregarArbusto(1, 0);
    escenario.agregarArbusto(0, 2);
    escenario.agregarArbusto(7, 2);
    escenario.agregarArbusto(8, 2);
    escenario.agregarArbusto(9, 2);
    
    escenario.agregarArbusto(1, 3);
    escenario.agregarArbusto(2, 3);
    escenario.agregarArbusto(4, 3);
    escenario.agregarArbusto(5, 3);
    escenario.agregarArbusto(9, 3);
    
    escenario.agregarArbusto(1, 4);
    escenario.agregarArbusto(4, 4);
    escenario.agregarArbusto(5, 4);
    escenario.agregarArbusto(6, 4);
    escenario.agregarArbusto(9, 4);
    
    escenario.agregarArbusto(1, 5);
    escenario.agregarArbusto(4, 5);
    escenario.agregarArbusto(5, 5);
    escenario.agregarArbusto(7, 5);
    escenario.agregarArbusto(8, 5);
    escenario.agregarArbusto(9, 5);
    
    escenario.agregarArbusto(0, 6);
    escenario.agregarArbusto(1, 6);
    escenario.agregarArbusto(6, 6);
    escenario.agregarArbusto(7, 6);
    escenario.agregarArbusto(8, 6);
    escenario.agregarArbusto(9, 6);
    
    escenario.agregarArbusto(0, 7);
    escenario.agregarArbusto(1, 7);
    escenario.agregarArbusto(7, 7);
    escenario.agregarArbusto(8, 7);
    escenario.agregarArbusto(9, 7);
    
    escenario.agregarArbusto(0, 8);
    escenario.agregarArbusto(1, 8);
    escenario.agregarArbusto(2, 8);
    escenario.agregarArbusto(4, 8);
    escenario.agregarArbusto(5, 8);
    
    escenario.agregarArbusto(0, 9);
    escenario.agregarArbusto(1, 9);
    escenario.agregarArbusto(2, 9);
    escenario.agregarArbusto(3, 9);
    escenario.agregarArbusto(4, 9);
    escenario.agregarArbusto(5, 9);
    escenario.agregarArbusto(6, 9);
    escenario.agregarArbusto(7, 9);
    escenario.agregarArbusto(8, 9);
    escenario.agregarArbusto(9, 9);
    

    escenario.mostrarMatrizEnTabla();
    

}

main();
