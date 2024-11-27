import { myCat } from './catInstance.js';

document.getElementById('playButton').addEventListener('click', () => {
    console.log('Play button clicked!');
    window.location.href = 'play.html';
});

document.getElementById('feedButton').addEventListener('click', () => {
    console.log('Feed button clicked!');
    window.location.href = 'feed.html';
});

document.getElementById('catButton').addEventListener('click', () => {
    console.log('Cat button clicked!');
    myCat.changeCatType();
});