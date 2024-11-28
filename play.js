import { myCat } from './catInstance.js';

let img;

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'flex-end'; // Align items to the bottom
    document.body.style.background = 'linear-gradient(to bottom, pink, purple)';

    // Create an img element
    img = document.createElement('img');
    img.src = myCat.current_gif;
    img.alt = 'Cat GIF';
    img.style.maxWidth = '35%'; // Enlarge the cat to 35%
    img.style.maxHeight = '35%';
    img.style.position = 'absolute';
    img.style.bottom = '0'; // Position at the bottom
    img.style.animation = 'moveSideToSide 10s infinite'; // Slow down the movement

    // Append the img element to the body
    document.body.appendChild(img);

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'uwu.html';
    });

    img.addEventListener('click', () => {
        // Change the cat's expression to love
        myCat.changeExpressionToLove();
        updateCatGif();

        // Stop the animation
        img.style.animationPlayState = 'paused';

        // Resume the animation and change back to normal after 3 seconds
        setTimeout(() => {
            myCat.changeExpressionToNormal();
            updateCatGif();
            img.style.animationPlayState = 'running';
        }, 3000);
    });
});

export function updateCatGif() {
    if (img) {
        img.src = myCat.current_gif;
    }
}
