import './style.css'
import string from './css.js'

const player = {
    id: undefined,
    n: 1,
    time: 0,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo3: document.querySelector('#demo3')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnFast': 'fast',
    },
    init: () => {
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo3.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo3.innerHTML = string.substr(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play: () => {player.id = setInterval(player.run, player.time)},
    pause: () => {window.clearInterval(player.id)},
    slow: () => {
        player.pause()
        player.time = 70
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
}
player.init()