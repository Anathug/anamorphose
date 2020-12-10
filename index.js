import App from './js/app'
import Cursor from './js/Components/Cursor'
import Timer from './js/Components/Timer'

new App({
    canvas: document.querySelector('#_canvas'),
})

new Cursor()
new Timer()
