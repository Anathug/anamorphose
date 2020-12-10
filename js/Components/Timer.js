import '../../css/timer.scss'
export default class Timer {
  constructor() {
     this.interval = 2000
     this.time = 100000
     this.timer = null
     this.$timer = document.querySelector('.timer')
     this.startTimer()
    //  this.events()
   }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time = this.time - 1000
        let min = Math.floor(this.time / 60000)
        let sec = ((this.time % 60000) / 1000).toFixed(0)
        this.$timer.innerHTML = `${min} : ${sec}`
      } else {
        this.time = 0
      }
    }, this.interval)
  }

  events() {
    window.addEventListener('click', () => this.updateTimer())
  }

  updateTimer() {
    this.interval = this.interval/2
    clearInterval(this.timer)
    this.startTimer()
  }
}