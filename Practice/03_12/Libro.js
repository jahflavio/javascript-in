class Libro {
  constructor({ titulo, autor, paginas, edicion, idioma, formato }) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.detalles = {
      edicion,
      idioma,
      formato,
    };
  }
}
export default Libro;
