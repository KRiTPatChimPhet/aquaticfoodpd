export class AquaticFood {
  public name: string;
  public description: string;
  public imagePath: string;
  public quantity: number;
  public onHand: number;
  public menu: Array<string>;

  constructor(name: string, desc: string, imagePath: string, quantity: number, onHand: number, menu: Array<string>) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.quantity = quantity;
    this.onHand = onHand;
    this.menu = menu;
  }
}
