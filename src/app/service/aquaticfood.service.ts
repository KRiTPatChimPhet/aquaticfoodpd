export class AquaticFoodService{
private aquaticFood = [
  {name:'ปลาอินทรี',description:'This is a test',imagePath:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cybium_interruptum_Ford_56.jpg/480px-Cybium_interruptum_Ford_56.jpg'},
  {name:'ปลาหมึก',description:'This is a test',imagePath:'https://www.simummuangmarket.com/uploads/image-1578629204032.png'}
];
  getAquaticFood(){
    return this.aquaticFood;
  }
}
