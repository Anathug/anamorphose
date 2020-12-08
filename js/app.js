import * as THREE from 'three';
import Camera from './Camera.js'
import World from './World/index.js'
import gsap from 'gsap'

export default class App {
    constructor(_options) {
        this.canvas = _options.canvas
        this.setRenderer()
        this.setCamera()
        this.setWorld()
    }

    setRenderer() {
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
        })

        this.renderer.setClearColor(0x945121, 1)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        gsap.ticker.add(() => {
            this.render()
        })
        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight)
        })
    }
    setCamera() {
        this.camera = new Camera({
            renderer: this.renderer
        })
        this.scene.add(this.camera.container)
    }
    setWorld() {
        this.world = new World({
            camera: this.camera,
            renderer: this.renderer
        })
        this.scene.add(this.world.container)
    }
    render() {
        this.renderer.render(this.scene, this.camera.camera);
        this.world.cube.cube.rotation.x += 0.01
        this.world.cube.cube.rotation.y += 0.01
    }
}