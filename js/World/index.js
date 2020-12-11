import { Object3D } from 'three'

import AmbientLightSource from './AmbientLight.js'
import PointLightSource from './PointLight.js'
import HemisphereLightSource from './HemiLight.js'
import Scene from './Scene.js'

export default class World {
    constructor(options) {
        this.debug = options.debug
        this.container = new Object3D()
        this.init()
    }
    init() {
        this.setHemiLight()
        // this.setAmbientLight()
        this.setPointLight()
        this.setScene()
    }
    setScene() {
        this.scene = new Scene()
        this.container.add(this.scene.container)
    }
    setAmbientLight() {
        this.light = new AmbientLightSource()
        this.container.add(this.light.container)
    }
    setPointLight() {
        this.light = new PointLightSource({ debug: this.debug })
        this.container.add(this.light.container)
    }
    setHemiLight() {
        this.light = new HemisphereLightSource({ debug: this.debug })
        this.container.add(this.light.container)
    }
}