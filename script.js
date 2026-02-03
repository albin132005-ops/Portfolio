const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 240;
const images = [];
let currentFrame = 0;

/* Load images */
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    const num = String(i).padStart(3, "0");
    img.src = `Image/ezgif-frame-${num}.jpg`;
    images.push(img);
}

/* Draw frame */
function drawFrame(index) {
    const img = images[index];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalAlpha = 0.22;  // 🔥 transparency so text visible
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

/* Scroll animation */
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = scrollTop / maxScroll;
    currentFrame = Math.floor(progress * (frameCount - 1));

    drawFrame(currentFrame);
});

/* First frame */
images[0].onload = () => drawFrame(0);

/* Resize */
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
