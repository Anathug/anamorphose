import { Object3D } from 'three'
import * as THREE from 'three'

export default class Audio {
    constructor() {
        this.container = new Object3D()
        this.createAudio()
    }
    createAudio() {

        const listener = new THREE.AudioListener();

        const audioElement = document.querySelector('#audio');
        audioElement.play()

        const positionalAudio = new THREE.PositionalAudio(listener);
        positionalAudio.setMediaElementSource(audioElement);
        positionalAudio.setRefDistance(1);
        positionalAudio.setDirectionalCone(180, 230, 0.1);

        this.container.add(listener, positionalAudio)
    }
}
