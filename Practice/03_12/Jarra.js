class Jarra {
  constructor({
    marca,
    material,
    capacidadMaxima,
    contenido,
    estaFria,
    alto,
    anchoBase,
  }) {
    this.marca = marca;
    this.material = material;
    this.capacidadMaxima = capacidadMaxima;
    this.estadoActual = {
      contenido,
      estaFria,
    };
    this.dimensiones = {
      alto,
      anchoBase,
    };
  }

  // 👇 ESTE ES EL MÉTODO QUE FALTA 👇
  servirAgua(cantidadMl) {
    if (this.estadoActual.contenido === 0) {
      console.log('La jarra está vacía.');
      return;
    }

    if (cantidadMl > this.estadoActual.contenido) {
      console.log(
        `Solo quedan ${this.estadoActual.contenido}ml. Sirviendo lo que queda...`,
      );
      this.estadoActual.contenido = 0;
    } else {
      this.estadoActual.contenido -= cantidadMl;
      console.log(
        `Serviste ${cantidadMl}ml. Quedan ${this.estadoActual.contenido}ml.`,
      );
    }
  }
}

export default Jarra;
