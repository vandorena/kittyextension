import { myCat } from './catInstance.js';

let img;
let isDragging = false;
let initialBurgerPosition = { top: '50%', left: '50%' };

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
    initialBurgerPosition = { top: burger.style.top, left: burger.style.left };

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

                        // Reset the burger to its original position
                        burger.style.top = initialBurgerPosition.top;
                        burger.style.left = initialBurgerPosition.left;
                    }, 3000);
                }
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    document.removeEventListener('mousemove', onMouseMove);
                    burger.style.cursor = 'grab';
                    isDragging = false;

                    // Reset the burger to its original position if the mouse button is released
                    burger.style.top = initialBurgerPosition.top;
                    burger.style.left = initialBurgerPosition.left;
                }
            }, { once: true });

            burger.addEventListener('dragstart', () => false);
        } else {
            isDragging = false;
            burger.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
        }
    });
});

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
    if (randomNumber === 1) {
        myCat.changeExpressionToNap();
        updateCatGif();
        img.style.animationPlayState = 'paused'; // Pause the animation

        setTimeout(() => {
            myCat.changeExpressionToNormal();
            updateCatGif();
            img.style.animationPlayState = 'running'; // Resume the animation
        }, 3000);
    }
}, 15000); // 15 seconds

export function updateCatGif() {
    if (img) {
        img.src = myCat.current_gif;
    }
}
