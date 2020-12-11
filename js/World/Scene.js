import { Object3D } from 'three'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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
                this.scene = gltf.scene
                this.container.add(this.scene)
                this.scene.children.forEach((el) => {
                    el.material = new THREE.MeshToonMaterial({ color: 0xffffff });
                })
            },
        )
    }
}