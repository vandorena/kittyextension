import { myCat } from './catInstance.js';

let img;
let isDragging = false;

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

    // Make the burger draggable
    const burger = document.getElementById('burger');
    burger.addEventListener('mousedown', (e) => {
        if (!isDragging) {
            isDragging = true;
            burger.style.cursor = 'grabbing';
            const shiftX = e.clientX - burger.getBoundingClientRect().left;
            const shiftY = e.clientY - burger.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                burger.style.left = pageX - shiftX + 'px';
                burger.style.top = pageY - shiftY + 'px';

                // Check for collision with the cat
                const burgerRect = burger.getBoundingClientRect();
                const catRect = img.getBoundingClientRect();

                if (
                    burgerRect.left < catRect.right &&
                    burgerRect.right > catRect.left &&
                    burgerRect.top < catRect.bottom &&
                    burgerRect.bottom > catRect.top
                ) {
                    // Collision detected
                    img.style.animationPlayState = 'paused';
                    myCat.changeExpressionToEat();
                    updateCatGif();

                    setTimeout(() => {
                        myCat.changeExpressionToNormal();
                        updateCatGif();
                        img.style.animationPlayState = 'running';
                    }, 3000);
                }
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            burger.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', onMouseMove);
                burger.style.cursor = 'grab';
                isDragging = false;
            });

            burger.addEventListener('dragstart', () => false);
        } else {
            isDragging = false;
            burger.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
        }
    });
});

export function updateCatGif() {
    if (img) {
        img.src = myCat.current_gif;
    }
}
