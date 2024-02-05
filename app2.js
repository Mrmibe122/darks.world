document.addEventListener('DOMContentLoaded', function () {
    createRaindrops();
});

function createRaindrops() {
    var container = document.querySelector('.container');
    var screenHeight = container.clientHeight;

    for (var i = 0; i < 100; i++) {
        var raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        container.appendChild(raindrop);

        animateRaindrop(raindrop, screenHeight);
    }
}

function animateRaindrop(raindrop, screenHeight) {
    var container = document.querySelector('.container');
    var screenWidth = container.clientWidth;

    var startPositionX = Math.random() * screenWidth;
    var startPositionY = Math.random() * screenHeight;
    var endPositionY = screenHeight + 10; // End below the container

    var duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds

    raindrop.style.left = startPositionX + 'px';
    raindrop.style.top = startPositionY + 'px';
    raindrop.style.animation = `fall ${duration}s linear infinite`;

    raindrop.addEventListener('animationiteration', function () {
        // Reset raindrop position for the next iteration
        raindrop.style.left = startPositionX + 'px';
        raindrop.style.top = startPositionY + 'px';
    });
}

function executeCode() {
    window.location.href = "https://lootdest.com/s?odjM"; // Replace with your desired URL
}
