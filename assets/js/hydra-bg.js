// create a new hydra-synth instance
var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: false
})

//hydra.loadScript("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-screen.js").then(xp_background)
hydra.loadScript("/assets/js/lib-screen.js").then(xp_background)

function animation() {
  //s0.initImage("/static/assets/DSC00079_lowq.png")

  s0.initImage("https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png")
  //src(s0).contrast(1).saturate(1).dither4().out(o0)
  src(s0).contrast(2.3).saturate().dither4().out(o0)

  //osc(10, 1, 0).thresh(0.5).out(o1)

  //shape([20,3].ease("easeInOutCubic"),0.39).repeat(10,9).scale([1.4,2.5].ease("easeInOutCubic").offset(0.5)).rotate(0,0.3).out(o1)

  //src(s0).scale(2,1,1,0.5,-0.2).scroll(0,0,0.2,0).dither4().mask(src(o1)).out(o2)
  //src(o0).modulateScale(o1, 2).out(o3)
  src(o0).layer(src(o2)).out(o3)

  render(o3)
}

function xp_background() {
  s0.initImage("https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png")
  src(s0).contrast(2.3).saturate().dither4().out(o0)

  osc(900,0.1).thresh(0.9999,0.00001).modulate(noise(0.3)).out(o2)

  src(o0).modulate(src(o2), 0.001).out(o1)
  render(o1)
}