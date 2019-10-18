document.addEventListener('DOMContentLoaded', () => {
    let btnShow = document.querySelectorAll('.btn-show');

    // Dropdown description slide
    btnShow.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target,
                list = target.closest('.more-inf').querySelector('.inf-list');
            target.classList.toggle('active');
            list.classList.toggle('inf-list_show');
        })
    });

    //Slider
    let slides = document.querySelectorAll('.slide'),
        currentSlide = 0,
        btnNext = document.querySelector('.arrow__direction_next'),
        btnPrev = document.querySelector('.arrow__direction_prev'),
        isEnable = true;

    function changeCurrentSlide(n) {
        currentSlide = (n + slides.length) % slides.length;
    }

    function hideSlide(direction) {
        isEnable = false;
        slides[currentSlide].classList.add(direction);
        slides[currentSlide].addEventListener('animationend', function () {
            this.classList.remove('slide_active', direction);
        })
    }

    function showSlide(direction) {
        slides[currentSlide].classList.add('slide_next', direction);
        slides[currentSlide].addEventListener('animationend', function () {
            this.classList.remove('slide_next', direction);
            this.classList.add('slide_active');
            isEnable = true;
        })
    }

    function nextSlide(n) {
        hideSlide('to-left');
        changeCurrentSlide(n + 1);
        showSlide('from-right');
    }

    function prevSlide(n) {
        hideSlide('to-right');
        changeCurrentSlide(n - 1);
        showSlide('from-left');
    }

    btnNext.addEventListener('click', () => {
        if (isEnable) nextSlide(currentSlide);
    });

    btnPrev.addEventListener('click', () => {
        if (isEnable) prevSlide(currentSlide);
    });

    //Swiper
    function swipeDetect(el) {
        let surface = el,
            startX = 0,
            startY = 0,
            distX = 0,
            distY = 0,
            startTime = 0,
            elapsedTime = 0,
            threshold = 150,
            restraint = 100,
            allowedTime = 300;

        surface.addEventListener('mousedown', (e) => {
            startX = e.pageX;
            startY = e.pageY;
            startTime = new Date().getTime;
            e.preventDefault();
        }, false);

        surface.addEventListener('mouseup', (e) => {
            distX = e.pageX - startX;
            distY = e.pageY - startY;
            elapsedTime = startTime - new Date().getTime();

            if (allowedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    if (distX > 0 && isEnable) prevSlide(currentSlide);
                    else if (isEnable) nextSlide(currentSlide);
                }
            }
        });

        surface.addEventListener('touchstart', (e) => {
            let target = e.target;
            if (target.classList.contains('arrow__direction') || target.classList.contains('arrow')) {
                if (target.classList.contains('arrow__direction_prev') && isEnable) prevSlide(currentSlide);
                else if (isEnable) nextSlide(currentSlide);
            }

            let touchItem = e.changedTouches[0];
            startX = touchItem.pageX;
            startY = touchItem.pageY;
            startTime = new Date().getTime();
            console.log(startX, startY, startTime)
        }, false);


        surface.addEventListener('touchend', (e) => {
            let touchItem = e.changedTouches[0];
            distX = touchItem.pageX - startX;
            distY = touchItem.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;

            console.log(distX, startY, elapsedTime);
            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    if (distX > 0 && isEnable) prevSlide(currentSlide);
                    else if (isEnable) nextSlide(currentSlide);
                }
            }
        }, false);
    }

    let el = document.querySelector('.slider');
    swipeDetect(el);


    // Dropdown description swiper
    let btnDescrSwipe = document.querySelectorAll('.btn-swipe-description');

    btnDescrSwipe.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target,
                swipeList = target.closest('.slide').querySelector('.slide__description');

            target.classList.toggle('active');
            swipeList.classList.toggle('slide__description_show');
        });
    })

});

