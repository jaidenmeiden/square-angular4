export class Lugar {
  constructor(
    public id: number,
    public nombre: string,
    public cercania: number,
    public distancia: number,
    public active: boolean,
    public plan: string,
    public descripcion: string
  ) {}
}
