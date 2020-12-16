import '../../css/navigation.scss'
import { Object3D } from 'three'

export default class Navigation {
  constructor() {
     this.container = new Object3D()
     this.$navigation = document.querySelector('.navigation')

     this.interval = 1000
     this.time = (12 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000)
     this.endtime = '30 Dec 2020 00:12:00 GMT'

     this.timer = null
     this.$timer = document.querySelector('.timer')
     this.startTimer()

     this.$music_button = document.querySelector('.music_button')
     this.$music = document.getElementById("music")
     this.isPlaying = false

     this.$photo_button = document.querySelector('.photo')
     this.$photo_close = document.querySelector('.photo_close')
     this.$photo_layout = document.querySelector('.photo_layout')
     this.isLayout = false

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
        const hours = Math.floor( (total/countHour) % 24)
        const days = Math.floor( total/countDay)

        this.$timer.innerHTML = `d<span>${days}</span> h<span>${hours}</span>`
      } else {
        this.time = 0
      }
    }, this.interval)
  }

  events() {
    this.$music_button.addEventListener('click', () => {
      this.handleMusic()
    })
    this.$photo_button.addEventListener('click', () => {
      this.handlePhoto()
    })
    this.$photo_close.addEventListener('click', () => {
      this.handlePhoto()
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

  handlePhoto() {
    this.isLayout ? this.hidePhoto() : this.showPhoto()
  }

  hidePhoto() {
    this.$photo_layout.classList.add('hidden')
    this.$navigation.classList.remove('hidden')
    this.isLayout = false
  }

  showPhoto() {
    this.$photo_layout.classList.remove('hidden')
    this.$navigation.classList.add('hidden')
    this.isLayout = true
  }

}
