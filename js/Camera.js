import { Object3D, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(options) {
        this.renderer = options.renderer
        this.container = new Object3D()

        this.setCamera()
        this.setPosition()
        this.setOrbitControls()
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
        this.camera.position.x = -40
        this.camera.position.y = 20
        this.camera.position.z = 80
    }
    setOrbitControls() {
        this.orbitControls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        )
        this.orbitControls.enableKeys = true
        this.orbitControls.zoomSpeed = 1
    }
}