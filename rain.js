const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = [];

for (let i = 0; i < 500; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 5,
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        ctx.fillRect(drop.x, drop.y, 2, 10);
        drop.y += drop.speed;

        if (drop.y > canvas.height) {
            drop.y = 0;
        }
    }

    requestAnimationFrame(draw);
}

draw();
