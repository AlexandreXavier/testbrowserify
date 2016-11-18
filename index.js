var Tone = require('tone')

var synth = new Tone.SimpleSynth().toMaster()

// setup events
window.addEventListener('touchstart', beep)
window.addEventListener('mousedown', beep)

function beep (ev) {
  ev.preventDefault()
  synth.triggerAttackRelease('C4', '8n')
}

// You can also use built-in Node modules
var url = require('url')

// e.g.
console.log(url.parse(window.location.href))
