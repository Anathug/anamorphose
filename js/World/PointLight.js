import { Object3D, SpotLight } from 'three'

export default class PointLightSource {
    constructor() {
        this.container = new Object3D()
        this.params = {
            color: 0xffffff,
            positionX: 0,
            positionY: 2,
            positionZ: 5,
        }

        this.createPointLight()
    }
    createPointLight() {
        this.light = new SpotLight(this.params.color)
        this.light.castShadow = true
        this.light.position.set(
            this.params.positionX,
            this.params.positionY,
            this.params.positionZ
        )
        this.container.add(this.light)
    }
}