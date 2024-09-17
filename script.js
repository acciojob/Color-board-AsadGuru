//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Generate 800 boxes
    for (let i = 0; i < 800; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
    }
});
