class Cajonera {
  constructor({
    color,
    material,
    materialCaja,
    objetosCaja,
    contenidoCajon2,
  }) {
    this.color = color;
    this.material = material;

    this.cajones = {
      cajon1: {
        caja: {
          material: materialCaja,
          objetos: objetosCaja,
        },
      },
      cajon2: {
        contenido: contenidoCajon2,
      },
    };
  }
}

export default Cajonera;
