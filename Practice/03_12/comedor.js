class Comedor {
  constructor({
    material,
    forma,
    numeroSillas,
    patas,
    tieneVidrio,
    colorBarniz,
  }) {
    // Define properties:
    this.material = material;
    this.forma = forma;
    this.capacidad = numeroSillas;
    this.estructura = {
      patas,
      tieneVidrio,
      colorBarniz,
    };
  }
}

export default Comedor;
