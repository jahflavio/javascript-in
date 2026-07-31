class Maceta {
  constructor({
    name,
    color,
    ramas,
    alto,
    diametro,
    tipo,
    ph,
    tieneFertilizante,
    humedad,
    ultimaVezRegada,
  }) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.ramas = ramas;
    this.dimensiones = {
      alto: alto,
      diametro: diametro,
    };
    this.sustrato = {
      tipo: tipo,
      ph: ph,
      tieneFertilizante: tieneFertilizante,
    };
    this.estado = {
      humedad: humedad,
      ultimaVezRegada: ultimaVezRegada,
    };
  }
  // Método para regar: actualiza la humedad y la fecha
  regar(cantidadMl) {
    if (cantidadMl > 500) {
      console.warn(
        '¡Cuidado! Demasiada agua, podrías ahogar la planta.',
      );
    }
    this.estado.humedad += cantidadMl / 10; // Ejemplo de lógica: 100ml aumentan 10%
    this.estado.ultimaVezRegada = new Date().toLocaleDateString();
    console.log(
      `Regaste la planta. Humedad actual: ${this.estado.humedad}%`,
    );
  }

  // Método para podar: reduce el número de ramas
  podar(cantidad) {
    if (this.ramas - cantidad < 0) {
      console.error('No puedes podar más ramas de las que existen.');
      return;
    }
    this.ramas -= cantidad;
    console.log(
      `Podaste ${cantidad} ramas. Ahora quedan: ${this.ramas}`,
    );
  }

  // Método para verificar si necesita mantenimiento
  necesitaAtencion() {
    if (this.estado.humedad < 30) {
      return '¡La planta necesita agua urgentemente!';
    }
    return 'La planta está en buenas condiciones.';
  }
}

export default Maceta;
