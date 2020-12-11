import { Object3D, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(options) {
        this.renderer = options.renderer
        this.container = new Object3D()
        this.params = {
            positionX: -20,
            positionY: 20,
            positionZ: 80,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0
        }
        this.debug = options.debug
        this.setCamera()
        this.setPosition()
        this.setOrbitControls()
        if (this.debug) {
            this.setDebug()
        }
    }
    setCamera() {
        this.camera = new PerspectiveCamera(
            75,
            window.innerWidth / window.innerheight,
            0.1,
            1000
        )
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.container.add(this.camera)
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
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