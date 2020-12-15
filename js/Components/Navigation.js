import '../../css/navigation.scss'
import { Object3D } from 'three'

export default class Navigation {
  constructor() {
     this.container = new Object3D()
     this.interval = 1000
     this.time = (12 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000)
     this.endtime = '30 Dec 2020 00:12:00 GMT'

     this.timer = null
     this.$timer = document.querySelector('.timer')
     this.startTimer()

     this.$music_button = document.querySelector('.music_button')
     this.$music = document.getElementById("music")
     this.isPlaying = false
     this.events()
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

        this.$timer.innerHTML = `d${days} h${hours}`
      } else {
        this.time = 0
      }
    }, this.interval)
  }

  events() {
    this.$music_button.addEventListener('click', () => {
      this.handleMusic()
    })
  }

  handleMusic() {
    this.$music.volume = 0.08
    this.isPlaying ? this.$music.pause() : this.$music.play()

    this.$music.onplaying = () => {
      this.$music_button.classList.add('play')
      this.isPlaying = true
    }
    this.$music.onpause = () => {
      this.$music_button.classList.remove('play')
      this.isPlaying = false
    }
  }

}
