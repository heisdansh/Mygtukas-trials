import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button" ];
  //var currentColor;
  connect() {
      //currentColor="bg-gray-400";
      this.buttonTarget.classList.add("bg-gray-600");
      this.buttonTarget.classList.add("text-white");
  }
  clicked() {
    this.buttonTarget.className = "";
    var colorArray = [
      'gray',
      'red',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink'
    ];
    var randomNumber = Math.floor(Math.random()*colorArray.length);
    //this.buttonTarget.classList.add("bg-black");
    this.buttonTarget.className=`p-5 text-lg font-bold rounded-md bg-${colorArray[randomNumber]}-600`;
}
}