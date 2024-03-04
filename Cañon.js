class Cañon {
    constructor() {
        this.direccionX = 0;
        this.direccionY = 0;
        this.contadorEnemigosEliminados = 0; 
    }

    // Método para definir la dirección del disparo
    apuntar(direccionX, direccionY) {
        this.direccionX = direccionX;
        this.direccionY = direccionY;
    }
    

    dispararEnemigosEnRango(escenario, x, y) {
        const direccionX = this.direccionX;
        const direccionY = this.direccionY;
    
        // Verificar si hay enemigos en las celdas adyacentes en la dirección de disparo
        for (let i = 1; i <= 2; i++) {
            const nuevaPosX = x + (i * direccionX);
            const nuevaPosY = y + (i * direccionY);
    
            // Verificar si la nueva posición está dentro de los límites del escenario y contiene un enemigo
            if (nuevaPosX >= 0 && nuevaPosX < escenario.filas && nuevaPosY >= 0 && nuevaPosY < escenario.columnas &&
                escenario.grid[nuevaPosX][nuevaPosY] instanceof Pato &&
                escenario.grid[nuevaPosX][nuevaPosY].tipo === TipoPato.ENEMIGO) {
                
                // Eliminar al enemigo
                escenario.grid[nuevaPosX][nuevaPosY] = null;
                this.incrementarEnemigosEliminados();
                console.log('Has eliminado un enemigo!');
                
                // Break para evitar que el cañón dispare más lejos después de eliminar un enemigo
                break;
            }
        }
    }

      incrementarEnemigosEliminados() {
    this.contadorEnemigosEliminados++;
    document.getElementById("valor-enemigos").textContent = this.contadorEnemigosEliminados;
}
    
}
