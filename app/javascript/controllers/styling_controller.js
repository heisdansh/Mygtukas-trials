import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button" ]

  connect() {
      this.buttonTarget.classList.add("bg-black");
      this.buttonTarget.classList.add("text-white");
  }
  clicked() {
    this.buttonTarget.classList.toggle("bg-black");
    this.buttonTarget.classList.toggle("text-white");
}
}