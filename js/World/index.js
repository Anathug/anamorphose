import { Object3D } from 'three'

import AmbientLightSource from './AmbientLight.js'
import PointLightSource from './PointLight.js'
import Cube from './Cube.js'

export default class World {
    constructor() {
        this.container = new Object3D()
        this.init()
    }
    init() {
        this.setAmbientLight()
        this.setPointLight()
        this.setCube()
    }
    setCube() {
        this.cube = new Cube()
        this.container.add(this.cube.container)
    }
    setAmbientLight() {
        this.light = new AmbientLightSource()
        this.container.add(this.light.container)
    }
    setPointLight() {
        this.light = new PointLightSource()
        this.container.add(this.light.container)
    }
}