// ==========================================
// 1. IMPORTACIÓN DE CLASES (Los moldes)
// ==========================================
import Maceta from './Maceta.js';
import Comedor from './Comedor.js';
import Recamara from './Recamara.js';
import Libro from './Libro.js';
import Jarra from './Jarra.js';
import Cajonera from './Cajonera.js';

// ==========================================
// 2. CREACIÓN DE OBJETOS (Las instancias)
// ==========================================

// Objeto 1: Maceta
const miMaceta = new Maceta({
  name: 'Maceta de noche buena',
  color: 'orange',
  ramas: 8,
  alto: 25,
  diametro: 20,
  tipo: 'tierra negra',
  ph: 6.5,
  tieneFertilizante: true,
  humedad: 40,
  ultimaVezRegada: '2026-07-18',
});

// Objeto 2: Comedor
const miComedor = new Comedor({
  material: 'encino',
  forma: 'rectangular',
  numeroSillas: 6,
  patas: 4,
  tieneVidrio: false,
  colorBarniz: 'caoba',
});

// Objeto 3: Recamara
const miRecamara = new Recamara({
  nombre: 'Habitación Principal',
  iluminacion: 'cálida',
  tamañoCama: 'king',
  firmezaCama: 'media',
  tieneSillaEscritorio: true,
  materialEscritorio: 'metal',
  puertasCloset: 3,
});

// Objeto 4: Libro
const miLibro = new Libro({
  titulo: 'El rey de amarillo',
  autor: 'Robert W. Chambers',
  paginas: 280,
  edicion: 2023,
  idioma: 'español',
  formato: 'pasta dura',
});

// Objeto 5: Jarra
const miJarra = new Jarra({
  marca: 'Cristar',
  material: 'vidrio templado',
  capacidadMaxima: 2000,
  contenido: 1500,
  estaFria: true,
  alto: 22,
  anchoBase: 12,
});

// Objeto 6: Cajonera
const miCajonera = new Cajonera({
  color: 'rojo',
  material: 'plastico',
  materialCaja: 'cartón',
  objetosCaja: ['fotos antiguas', 'negativos', 'cartas'],
  contenidoCajon2: 'cables',
});

// ==========================================
// 3. PRUEBAS EN LA CONSOLA
// ==========================================

console.group('🌿 Pruebas de la Maceta');
console.log(miMaceta);
miMaceta.regar(150); // Probando el método
console.log(miMaceta.necesitaAtencion());
console.groupEnd();

console.group('🪑 Pruebas del Comedor y Recámara');
console.log('Comedor:', miComedor);
console.log(
  'Tamaño de cama de la recámara:',
  miRecamara.mobiliario.cama.tamaño,
);
console.groupEnd();

console.group('📚 Pruebas del Libro');
console.log(
  `Libro: "${miLibro.titulo}" - Formato: ${miLibro.detalles.formato}`,
);
console.groupEnd();

console.group('🫙 Pruebas de la Jarra');
console.log(miJarra);
miJarra.servirAgua(500); // Probando el método de servir
console.groupEnd();

console.group('🗄️ Pruebas de la Cajonera');
console.log('Cajonera completa:', miCajonera);
console.log(
  'Arreglo de objetos en la caja:',
  miCajonera.cajones.cajon1.caja.objetos,
);
console.log(
  'Tercer objeto del arreglo:',
  miCajonera.cajones.cajon1.caja.objetos[2],
); // Debe decir "cartas"
console.groupEnd();
