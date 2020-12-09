import { Object3D } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class Scene {
    constructor() {
      // Set up
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
                // called when the resource is loaded
                // console.log(gltf)

                // pointing Mesh
                this.scene = gltf.scene

                // console.log(this.scene)
                this.container.add(this.scene)
            },
        )
    }
  }