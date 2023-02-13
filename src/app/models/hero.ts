export class Hero {
  _id?: number;
  codigo: number;
  nombre: string;
  ciudad: string;
  poder: number;

  constructor(codigo: number, nombre: string, ciudad: string, poder: number) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.poder = poder;
  }
}
