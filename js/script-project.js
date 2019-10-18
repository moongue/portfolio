document.addEventListener('DOMContentLoaded', () => {
    let btnToggle = document.createElement('button'),
        btnBack = document.createElement('a');

    if (window.innerWidth > 375) {
        document.body.appendChild(btnToggle);
    }
    btnToggle.textContent = 'Mobile';
    btnToggle.classList.add('btn-toggle-screen');
    btnBack.textContent = 'Back';
    btnBack.classList.add('btn-back');
    btnBack.href = 'index.html';

    document.body.appendChild(btnBack);

    let btn = document.querySelector('.btn-toggle-screen'),
        btn2 = document.querySelector('.btn-back'),
        frame = document.querySelector('.frame'),
        box = document.querySelector('.box');

    if (btn) {
        btn.style.cssText = `position: fixed;bottom: 110px;right:40px; border-radius: 10px; font-size: 32px; width: 220px; height: 70px; border: none; cursor: pointer; background: #000; color: #fff;`;
        btn.addEventListener('click', () => {
            btn.textContent === 'Mobile' ? btn.textContent = 'Desktop' : btn.textContent = 'Mobile';
            frame.classList.toggle('mobile');
            box.classList.toggle('dark');
        })
    }
    btn2.style.cssText = `position: fixed;bottom: 20px;right:40px; border-radius: 10px; font-size: 32px; display: flex; justify-content: center; text-decoration: none; align-items: center; width: 220px; height: 70px; border: none; cursor: pointer; background: #000; color: #fff;`;

    if (innerWidth < 524) {
        btn2.style.cssText = `position: fixed;bottom: 20px;right:40px; border-radius: 10px; font-size: 22px; display: flex; justify-content: center; text-decoration: none; align-items: center; width: 120px; height: 40px; border: none; cursor: pointer; background: #000; color: #fff;`;
        if (btn) {
            btn.style.cssText = `position: fixed;bottom: 80px;right:40px; border-radius: 10px; font-size: 22px; width: 120px; height: 40px; border: none; cursor: pointer; background: #000; color: #fff;`;
        }
    }


});