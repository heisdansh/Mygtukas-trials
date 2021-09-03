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
    this.display;
  }
  display(){
      alert(this.resultTargets);
  }
  mark(){
    alert(this.resultTargets.length);
      //this.resultTargets[2].classList.add("bg-purple-600");
     this.resultTargets.forEach(element => {
        this.element.classList.add("bg-purple-600");
          });
    for (let a=0; a<=this.resultTargets.length; a++)
    {
        this.resultTargets[a].classList.add("bg-purple-600");
    }
  }

}