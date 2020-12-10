import gsap from "gsap";
import '../../css/cursor.scss';

export default class Cursor {

    constructor() {
        this.$cursorCircle = document.querySelector('.cursor__circle')
        this.$cursorCircleSvg = this.$cursorCircle.querySelector('circle')
        this.$cursorDot = document.querySelector('.cursor__dot')
        this.isClicked = false;
        this.holdTL = null;
        this.init()
        this.events()
    }

    init() {
        gsap.to(this.$cursorCircleSvg, { duration: 1.5, strokeDashoffset: '370px', ease: "power4.inOut", delay: 1 })

        this.holdTL = gsap.timeline({ paused: true })
        this.holdTL.to(this.$cursorCircle, { duration: 1, scale: 3, ease: "power3.inOut" });

        window.addEventListener('mousemove', (event) => {
            gsap.to(this.$cursorCircle, { duration: .25, x: event.clientX - 20, y: event.clientY - 20, ease: "power1.out" })
            this.$cursorDot.style.transform = `translateX(${event.clientX - 24}px) translateY(${event.clientY - 24}px)`
        })
    }

    events() {
        const $interractions = document.querySelectorAll('.cursor-hover')
        const $canvas = document.querySelector('canvas')

        window.addEventListener('mousedown', () => this.mousedragonHandler())
        window.addEventListener('mouseup', () => this.mousedragoffHandler())

        $interractions.forEach($interraction => {
            $interraction.addEventListener('mouseover', () => this.mouseoverHandler())
            $interraction.addEventListener('mouseout', () => this.mouseoutHandler())
        })
    }

    mouseoverHandler() {
        gsap.to(this.$cursorCircle, { duration: .2, scale: 3, ease: "power1.inOut" })
    }

    mouseoutHandler() {
        gsap.to(this.$cursorCircle, { duration: .2, scale: 1, ease: "power1.inOut" })
    }

    mousedragonHandler() {
        this.isClicked = true
        this.holdTL.play().timeScale(1)

    }
    mousedragoffHandler() {
        this.isClicked = false
        this.holdTL.reverse().timeScale(-2)
    }
}