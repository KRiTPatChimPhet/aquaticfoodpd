export interface AquaticFood {

  _id?: string;
  name: string;
  description: string;
  imagePath: string;
  quantity: number;
  menu: Array<string>;

  // constructor(name: string, description: string, imagePath: string, quantity: number, menu: Array<string>) {
  //   this.name = name;
  //   this.description = description;
  //   this.imagePath = imagePath;
  //   this.quantity = quantity;
  //   this.menu = menu;
  // }
}
