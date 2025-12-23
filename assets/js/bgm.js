// this file uses strudel web to embed the audio player. in the html there will be buttons for starting and stopping the bgm. in the future, expand with more songs

// https://strudel.cc/technical-manual/project-start

initStrudel({
    prebake: () => { samples('github:tidalcycles/dirt-samples'); samples('github:eddyflux/crate'); }
});
document.getElementById('play').addEventListener('click', () => note("<c1 d1 e1 e3 [a1 d1]>").s(wchoose(["crate_djembe:1", 10], ["crate_djembe:2", 11], ["hh", 20], ["bd", 20])).gain("<0.1 0.3>").speed("<1 1.5>").slow("0.5, 1").room("0.6").delay("0.1").play());
document.getElementById('stop').addEventListener('click', () => hush());