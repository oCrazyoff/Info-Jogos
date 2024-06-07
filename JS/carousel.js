document.addEventListener('DOMContentLoaded', (event) => {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevBtn = carousel.querySelector('.prevBtn');
        const nextBtn = carousel.querySelector('.nextBtn');
        let index = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = 'none';
                img.classList.remove('active');
            });
            images[index].style.display = 'flex';
            images[index].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            index = (index > 0) ? index - 1 : images.length - 1;
            showImage(index);
        });

        nextBtn.addEventListener('click', () => {
            index = (index < images.length - 1) ? index + 1 : 0;
            showImage(index);
        });

        showImage(index);
    });
});
