import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button" ];
  connect() {
      this.currentColor ="bg-pink-800";
  }
  clicked() {
    this.buttonTarget.classList.remove(this.currentColor);
    let colorArray = [
      'gray',
      'red',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink'
    ];
    let randomNumber = Math.floor(Math.random()*colorArray.length);
    this.currentColor=`bg-${colorArray[randomNumber]}-800`;
    this.buttonTarget.classList.add(this.currentColor);
}
}