import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'result']

  connect () {}

  // Šito metodo išvis nereikia
  focusInput () {
    this.inputTarget.innerText = ''
    this.inputTarget.focus()
  }

  // Tu turėtum vykdyti paiešką čia.
  handleInput () {
    if (this.inputTarget.value === '') return // Kad nevykdytų jokios logikos, jei input'as tuščias. Taip pat == nėra tas pats, kas === :)

    // Čia reiktų cikliuko kuris patogglina 'hidden' klasę ant kiekvienos įvesties.
    // this.resultTargets.forEach......

    // Pamąstymui.
    // Tavo results elementai viduj turi didžiasias raides (ir tai nėra blogai).
  }
  mark () {
    this.resultTargets.forEach(element => {
      this.element.classList.add('bg-purple-600') // Čia viskas veiktų, jeigu sutrumpintum šitą eilutę penkiais simboliais. 
    })

    // Viskas gerai, bet šiaip, jeigu galima išvengti tokių C++'inių ciklų - venk.
    for (let a = 0; a <= this.resultTargets.length; a++) {
      this.resultTargets[a].classList.add('bg-purple-600')
    }
  }
}
