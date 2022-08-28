export class AquaticFood {
  public name: string;
  public description: string;
  public imagePath: string;
  public quantity: number;
  public menu: Array<string>;

  constructor(name: string, desc: string, imagePath: string, quantity: number, menu: Array<string>) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.quantity = quantity;
    this.menu = menu;
  }
}
