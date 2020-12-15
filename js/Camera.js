import { Object3D, PerspectiveCamera } from 'three'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(options) {
        this.renderer = options.renderer
        this.container = new Object3D()
        this.params = {
            positionX: 500,
            positionY: 500,
            positionZ: 500,
            rotationX: -0.13,
            rotationY: 0.03,
            rotationZ: 0.02
        }
        this.debug = options.debug
        this.setCamera()
        this.setPosition()
        this.setOrbitControls()
        window.addEventListener('click', () => {
            this.setPositionalAudio()
        })
        if (this.debug) {
            this.setDebug()
        }
    }
    setCamera() {
        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerheight,
            0.1,
            10000
        )
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.container.add(this.camera)
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        })
        window.addEventListener('mousemove', (e) => {
            this.mouseMovement(e)
        })
    }
    setPosition() {
        this.camera.position.x = this.params.positionX
        this.camera.position.y = this.params.positionY
        this.camera.position.z = this.params.positionZ
        this.camera.rotation.x = this.params.rotationX
        this.camera.rotation.y = this.params.rotationY
        this.camera.rotation.z = this.params.rotationZ
    }
    mouseMovement(e) {
        // let mouseX = e.clientX - window.innerWidth / 2
        // let mouseY = e.clientY - window.innerHeight / 2
        // this.camera.position.x = this.params.positionX - mouseX / 20
        // this.camera.position.z = this.params.positionZ + mouseY / 30
        // this.camera.rotation.y = this.params.rotationY - mouseX / 1000
    }
    setPositionalAudio() {

    }
    setOrbitControls() {
        this.orbitControls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        )
        this.orbitControls.enableKeys = true
        this.orbitControls.zoomSpeed = 1
    }
    setDebug() {
        this.debugFolder = this.debug.addFolder('Camera')
        this.debugFolder.open()
        this.debugFolder
            .add(this.params, 'positionX', 0, 100, 0.01)
            .onChange(() => {
                this.camera.position.x = this.params.positionX
            })
        this.debugFolder
            .add(this.params, 'positionY', 0, 100, 0.01)
            .onChange(() => {
                this.camera.position.y = this.params.positionY
            })
        this.debugFolder
            .add(this.params, 'positionZ', 0, 100, 0.01)
            .onChange(() => {
                this.camera.position.z = this.params.positionZ
            })
        this.debugFolder
            .add(this.params, 'rotationX', -1, 1, 0.01)
            .onChange(() => {
                this.camera.rotation.x = this.params.rotationX
            })
        this.debugFolder
            .add(this.params, 'rotationY', -1, 1, 0.01)
            .onChange(() => {
                this.camera.rotation.y = this.params.rotationY
            })
        this.debugFolder
            .add(this.params, 'rotationZ', -1, 1, 0.01)
            .onChange(() => {
                this.camera.rotation.z = this.params.rotationZ
            })
        this.debugFolder.open()
    }
}