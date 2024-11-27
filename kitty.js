// kitty.js
import { myCat } from './catInstance.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.background = 'linear-gradient(to bottom, pink, purple)';

    // Create an img element
    const img = document.createElement('img');
    img.src = myCat.current_gif;
    img.alt = 'Cat GIF';
    img.style.maxWidth = '20%';
    img.style.maxHeight = '20%';

    // Append the img element to the body
    document.body.appendChild(img);
});