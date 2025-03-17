// create a new hydra-synth instance
var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: false
})

$(document).ready(function () {
  hydra.loadScript("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-screen.js").then(xp_background)
});

function xp_background() {
  var image_array = [];
  for (i in image_files) {
    // add the file path to the image array
    image_array.push(image_files[i].path);
  }

  s0.initImage(image_array[0])
  c = 1
  ci = setInterval(() => {
    i = c % image_array.length
    vhs = image_array[i]
    s0.initImage(image_array[i])

    c++
  }, 2000)

  //clearInterval(ci)

  src(s0).scale(0.3, 1, 1).out(o0)

  src(s0).out(o1)

  //src(o0).modulate(osc(5, 0.1, 1).modulateRotate(noise(0.1)))
  //.modulateRotate(shape([4, 15, 4, 15, 4].smooth()).repeat(10,10), 0.1).out(o2)

  render(o1)


}

