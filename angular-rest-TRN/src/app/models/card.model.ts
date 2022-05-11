export class CardModel {
  constructor(
    public nome: string,
    public atributo: string,
    public nivel: number,
    public tipo: {
      0: string;
      1: string;
      2: string;
    }[],
    public atk: number,
    public def: number,
    public descricao: string
  ) {}
}
