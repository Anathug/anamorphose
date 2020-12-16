import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
import '../../css/text.scss'

export default class Text {
    constructor(_options) {
        this.title = _options.title
        this.dark = _options.dark
        this.div = _options.div
        this.content = _options.content
        this.init()
    }

    init() {
      const text__container = document.createElement("div")
      text__container.classList.add('text__container')
      if (this.dark) {
        text__container.classList.add('dark')
      }

      const text__title = document.createElement("h2")
      text__title.innerHTML = this.title
      text__title.setAttribute('data-splitting', '')

      const text__content = document.createElement("p")
      text__content.innerHTML = this.content
      text__content.setAttribute('data-splitting', '')

      text__container.appendChild(text__title)
      text__container.appendChild(text__content)
      this.div.appendChild(text__container)

      Splitting()

      text__title.addEventListener('click', () => {
        text__container.classList.add('hidden')
      })
    }
}