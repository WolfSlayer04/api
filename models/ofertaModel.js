class Oferta {
    constructor(id, usuario_id, titulo, descripcion, tipo_cuidado, ubicacion, horario, salario, estado) {
      this.id = id;
      this.usuario_id = usuario_id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.tipo_cuidado = tipo_cuidado;
      this.ubicacion = ubicacion;
      this.horario = horario;
      this.salario = salario;
      this.estado = estado;
    }
  }
  
  export default Oferta;
  