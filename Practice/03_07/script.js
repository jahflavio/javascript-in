/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Objeto 1: Maceta
const maceta = {
  name: 'Maceta de noche buena',
  color: 'orange',
  ramas: 8,
  dimensiones: {
    alto: 25,
    diametro: 20,
  },
  sustrato: {
    tipo: 'tierra negra',
    ph: 6.5,
    tieneFertilizante: true,
  },
  estado: {
    humedad: 40,
    ultimaVezRegada: '2026-07-18',
  },
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
  },

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
  },

  // Método para verificar si necesita mantenimiento
  necesitaAtencion() {
    if (this.estado.humedad < 30) {
      return '¡La planta necesita agua urgentemente!';
    }
    return 'La planta está en buenas condiciones.';
  },
};

// --- Ejemplos de uso ---
maceta.regar(200); // Aumenta la humedad y registra la fecha
maceta.podar(2); // Reduce el número de ramas
console.log(maceta.necesitaAtencion()); // Evalúa el estado actual

// Objeto 2: Comedor
const comedor = {
  material: 'encino',
  forma: 'rectangular',
  capacidad: 6,
  estructura: {
    patas: 4,
    tieneVidrio: false,
    colorBarniz: 'caoba',
  },
};

// Objeto 3: Recamara
const recamara = {
  nombre: 'Habitación Principal',
  iluminacion: 'cálida',
  mobiliario: {
    cama: { tamaño: 'king', firmeza: 'media' },
    escritorio: { tieneSilla: true, material: 'metal' },
    closet: { puertas: 3 },
  },
};

// Objeto 4: Libro
const libro = {
  titulo: 'El rey de amarillo',
  autor: 'Robert W. Chambers',
  paginas: 280,
  detalles: {
    edicion: 2023,
    idioma: 'español',
    formato: 'pasta dura',
  },
};

// Objeto 5: Jarra de agua
const jarra = {
  marca: 'Cristar',
  material: 'vidrio templado',
  capacidadMaxima: 2000, // ml
  estadoActual: {
    contenido: 1500,
    estaFria: true,
  },
  dimensiones: {
    alto: 22,
    anchoBase: 12,
  },
};

// Objeto 6: Cajonera
const cajonera = {
  color: 'rojo',
  material: 'plastico',
  cajones: {
    cajon1: {
      caja: {
        material: 'cartón',
        objetos: ['fotos antiguas', 'negativos', 'cartas'], // Un array para varios objetos
      },
    },
    cajon2: {
      contenido: 'cables',
    },
  },
};

console.log('Maceta objeto', maceta);
console.log('cajonera objeto', cajonera.cajones.cajon1.caja.objetos);
