import * as THREE from 'three'
import { Object3D } from 'three'
export default class AudioMesh {
    constructor() {
        this.container = new Object3D()
        this.setAudioMesh();
    }
    setAudioMesh() {
        this.cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        this.cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
        });
        this.cube = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial);
        this.cube.position.set(0, 0, -10);
        this.container.add(this.cube)
    }
}