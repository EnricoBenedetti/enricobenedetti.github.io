// create a new hydra-synth instance
var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: false
})

hydra.loadScript("/assets/js/lib-screen.js").then(xp_background)


function xp_background() {
  s0.initImage("https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png")
  hydra.synth.src(s0).contrast(2.3).saturate().dither4().out(o0)

  hydra.synth.osc(900, 0.1).thresh(0.9999, 0.00001).modulate(hydra.synth.noise(0.3)).out(o2)

  hydra.synth.src(o0).modulate(hydra.synth.src(o2), 0.001).out(o1)
  hydra.synth.render(o1)
}