import { Object3D } from 'three'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import gsap from 'gsap'

export default class Scene {
    constructor() {
        this.container = new Object3D()
        this.container.name = 'Scene'

        this.createScene()
    }
    createScene() {
        const model = require('../../models/scene.gltf')

        const loader = new GLTFLoader()
        loader.load(
            model,
            (gltf) => {
                console.log(gltf)

                // 🚧 Animation modulation de l'espace
                // this.cheminee = gltf.scene.children[8]
                // this.cheminee.position.y = 100
                // console.log(this.cheminee.position)

                this.scene = gltf.scene
                this.container.add(this.scene)
                this.scene.children.forEach((el) => {
                    el.material = new THREE.MeshToonMaterial({ color: 0xffffff });
                })
                this.setMovement()
            },
        )
    }
    setMovement() {
        gsap.ticker.add(() => {
            // this.moduleEspace()
        })
    }
    moduleEspace() {
        if (this.cheminee.position.y >= 8.1 ) {
            this.cheminee.position.y -= 0.3
        }
    }
}