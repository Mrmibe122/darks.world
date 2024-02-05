document.addEventListener('DOMContentLoaded', function () {
    createRaindrops();
});

function createRaindrops() {
    var container = document.querySelector('.container');

    for (var i = 0; i < 100; i++) {
        var raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        container.appendChild(raindrop);

        animateRaindrop(raindrop);
    }
}

function animateRaindrop(raindrop) {
    var container = document.querySelector('.container');
    var screenHeight = container.clientHeight;
    var screenWidth = container.clientWidth;

    var startPositionX = Math.random() * screenWidth;
    var endPositionX = startPositionX + Math.random() * 20 - 10;

    var duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds

    raindrop.style.left = startPositionX + 'px';
    raindrop.style.animation = 'fall ' + duration + 's linear infinite';

    raindrop.addEventListener('animationiteration', function () {
        // Reset raindrop position for next iteration
        raindrop.style.left = startPositionX + 'px';
    });
}
