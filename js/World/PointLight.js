import { Object3D, SpotLight } from 'three'

export default class PointLightSource {
    constructor() {
        this.container = new Object3D()
        this.params = {
            color: 0xffffff,
            positionX: -30,
            positionY: 20,
            positionZ: 200,
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