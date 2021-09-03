import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "result"];

  connect(){}

  focusInput(){
    this.inputTarget.innerText="";
  }
  handleInput(){
      this.resultTargets.forEach(element => {
        if(element.innerText.includes(this.inputTarget.innerText.toUpperCase())){
          element.classList.remove("hidden");
        }
        else{
          element.classList.add("hidden");
          element.classList.remove("bg-purple-600");
        }
          });
  }
  mark(){

     this.resultTargets.forEach(element => {
       if (element.classList.contains("hidden")){ }
       else{
        element.classList.add("bg-purple-600");
       }
          });
  }

}