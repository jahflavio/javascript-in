class Recamara {
  constructor({
    nombre,
    iluminacion,
    tamañoCama,
    firmezaCama,
    tieneSillaEscritorio,
    materialEscritorio,
    puertasCloset,
  }) {
    this.nombre = nombre;
    this.iluminacion = iluminacion;
    this.mobiliario = {
      cama: {
        tamaño: tamañoCama,
        firmeza: firmezaCama,
      },
      escritorio: {
        tieneSilla: tieneSillaEscritorio,
        material: materialEscritorio,
      },
      closet: {
        puertas: puertasCloset,
      },
    };
  }
}
export default Recamara;
