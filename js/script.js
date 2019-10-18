document.addEventListener('DOMContentLoaded', () => {
    let btnShow = document.querySelectorAll('.btn-show'),
        slides = document.querySelectorAll('.slide'),
        next = document.querySelector('.arrow__direction_next'),
        prev = document.querySelector('.arrow__direction_prev'),
        slideIndex = 1;

    // Dropdown description
    btnShow.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target,
                list = target.closest('.more-inf').querySelector('.inf-list');
            target.classList.toggle('active');
            list.classList.toggle('inf-list_show');
        })
    });

    //Slider
    let showSlides = (n) => {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'flex';
    };
    showSlides(slideIndex);

    let plusSlides = (n) => {
        showSlides(slideIndex += n);
    };

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    })

});