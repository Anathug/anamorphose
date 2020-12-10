import '../../css/timer.scss'
export default class Timer {
  constructor() {
     this.interval = 2000
     this.time = (12 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000)
     this.endtime = '30 Dec 2020 00:12:00 GMT'
     this.timer = null
     this.$timer = document.querySelector('.timer')
     this.startTimer()
    //  this.events()
   }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.time > 0) {
        this.time = this.time - 1000

        const countMinute = 60 * 1000
        const countHour = 60 * countMinute
        const countDay = 24 * countHour

        const total = Date.parse(this.endtime) - Date.parse(new Date())
        const minutes = Math.floor( (total/countMinute) % 60)
        const hours = Math.floor( (total/countHour) % 24)
        const days = Math.floor( total/countDay)

        this.$timer.innerHTML = `d${days} h${hours} m${minutes}`
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
