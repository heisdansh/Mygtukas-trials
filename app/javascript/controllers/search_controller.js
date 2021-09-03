import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "result"];

  connect(){

  }
  focusInput(){
    this.inputTarget.innerText="";
    this.inputTarget.focus();
  }
  handleInput(){
    if (this.inputTarget.innerText!="")
    {
        console.log(this.inputTarget.innerText);
    }
  }
  display(){
      alert(this.resultTargets[0]);
      this.resultTargets.forEach(element => {
        this.element.classList.add("hidden");
          });
  }
  mark(){
    alert(this.resultTargets);
      this.resultTargets[0].classList.add("bg-purple-600");
      this.resultTargets.forEach(element => {
        this.element.classList.add("hidden");
          });
  }

}