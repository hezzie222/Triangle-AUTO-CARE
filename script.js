// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const photoGallery = document.querySelector('.photo-gallery');

    // Generate image elements dynamically
    for (let i = 1; i <= 91; i++) {
        const img = document.createElement('img');
        img.src = `images/photo1 (${i}).jpg`;
        img.alt = `Work Example ${i}`;
        photoGallery.appendChild(img);
    }
});
