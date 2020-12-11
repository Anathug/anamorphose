import * as THREE from 'three';
import Camera from './Camera.js'
import World from './World/index.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'

export default class App {
    constructor(_options) {
        this.canvas = _options.canvas
        this.debug = null;
        this.setConfig()
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

        this.renderer.setClearColor(0x000000, 1)
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
            renderer: this.renderer,
            debug: this.debug
        })
        this.scene.add(this.camera.container)
    }
    setWorld() {
        this.world = new World({
            camera: this.camera,
            renderer: this.renderer,
            debug: this.debug
        })
        this.camera.camera.add(this.world.audio.container.children[0])
        this.world.audioMesh.cube.add(this.world.audio.container.children[0])
        this.scene.add(this.world.container)
    }
    render() {
        this.renderer.render(this.scene, this.camera.camera);
    }
    setConfig() {
        if (window.location.hash === '#debug') {
            this.debug = new dat.GUI({ width: 420 })
        }
    }
}