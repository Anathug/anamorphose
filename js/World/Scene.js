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

        // const IMAGE = require('../../images/che.jpeg')

        // var textureLoader = new THREE.TextureLoader();
        // var texture = textureLoader.load( IMAGE );
        // texture.flipY = false;
        // var material = new THREE.MeshBasicMaterial( { map: texture } );
        // console.log(material)

        const model = require('../../models/untitled.gltf')

        const loader = new GLTFLoader()
        loader.load(
            model,
            (gltf) => {
                console.log(gltf.scene)

                this.scene = gltf.scene
                this.scene.scale.x = 0.05,
                this.scene.scale.y = 0.05,
                this.scene.scale.z = 0.05

                // 🚧 Changement de texture
                // this.cheminee = gltf.scene.children[0].children[0].children[0].children[0].children[8]
                // this.cheminee.traverse ( ( o ) => {
                //     if ( o.isMesh ) {
                //       o.material.map = texture
                //     }
                //   } )
                // console.log(this.cheminee)

                this.container.add(this.scene)

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