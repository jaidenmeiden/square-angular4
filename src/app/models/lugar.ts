export class Lugar {
  constructor(
    public id: number,
    public nombre: string,
    public cercania: any,
    public distancia: any,
    public active: boolean,
    public plan: string,
    public descripcion: string
  ) {}
}
