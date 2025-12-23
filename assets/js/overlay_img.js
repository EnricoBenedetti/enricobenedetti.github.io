const img = document.getElementById("portrait");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayPortrait");

img.addEventListener("click", () => {
    overlayImg.src = img.src;
    overlay.style.display = "flex";
});

overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});
