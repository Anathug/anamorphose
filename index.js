import App from './js/app'
import Cursor from './js/Components/Cursor'
import Navigation from './js/Components/Navigation'
import Text from './js/Components/Text'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

new App({
    canvas: document.querySelector('#_canvas')
})

new Cursor()
new Navigation()

// new Text( {
//     div: document.querySelector('#_intro'),
//     dark : true,
//     title: 'George Rousse',
//     content: `George Rousse is a French plastic arts photographer.
//     While he was a medical student in Nice, he decided to learn the techniques of shooting and printing from a professional. His passion pushes him to devote himself entirely to an artistic practice of this medium.
//     It is with the discovery of Land Art and Malevitch's Black Square on White Background that Georges Rousse chose to intervene in the photographic field, establishing a new relationship between painting and Space. He then takes over abandoned places that he has always liked to transform them into pictorial space and build a unique, ephemeral work that only photography can restore.
//     His strong and singular works shift the boundaries between traditional media and immediately imposed themselves in the landscape of contemporary art.`
// })

// new Text( {
//     div: document.querySelector('#_container'),
//     dark : false,
//     title: 'Space modulation',
//     content: `Its primary material is Space. The space of abandoned buildings where he immediately spots a "fragment" for its architectural quality, its light, which he then organizes and stages with the ultimate goal of creating a photographic image. He then deconstructs and then rebuilds his own space, as if it were his own studio.`
// })

// new Text( {
//     div: document.querySelector('#_container'),
//     dark : false,
//     title: 'Circle drawing',
//     content: `Once his space has been modelled, George Rousse appropriates it a little more deeply.
//      Upstream, he draws, imagines these forms flooding the walls. In an intimate relationship with perspective,
//       he defies the laws of the visible. This is where the drawing in space begins.
//       The square in the eye, he traces little by little his shape, which extends over all the surfaces of his space.`
// })

// new Text( {
//     div: document.querySelector('#_container'),
//     dark : false,
//     title: 'Color',
//     content: `These places of precariousness, rejected, ignored, often degraded,
//     whose disappearance is near, are like a metaphor of the ferocious flow of Time towards oblivion and death.
//     By transforming them into works of art, Georges Rousse offers them a new, ephemeral life, and the coloring stage has a great deal to do with it.
//     Because photography, the finality of the pictorial action, is a flat surface, the shapes he paints or draws,
//     the volumes and architectures he builds are exploded, disaggregated, on the different spatial planes of buildings, sometimes monumental. Photography gathers the Image in a masterful synthesis where Painting, Architecture, Drawing are inscribed in Space to make visible the fiction of the artist.`
// })

Splitting()

const intro = document.getElementById('_intro')
let interval = 3000
let step = 0

window.onload = () => {
    const start_button = document.querySelector('._intro_second-start')
    const cursor = document.body.querySelector('.cursor')
    start_button.addEventListener('click', () => {
        intro.classList.add('hidden')
        cursor.classList.remove('black')
        setTimeout(() => {
            intro.style.display = 'none'
        }, 1000)
    })
    let intro_interval = setInterval(() => {
        if (step < intro.children.length - 1) {
            intro.children[step].classList.add('hidden')
            intro.children[step + 1].classList.remove('hidden')
            step += 1
        } else {
            clearInterval(intro_interval)
        }
    }, interval)
}
