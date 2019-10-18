document.addEventListener('DOMContentLoaded', () => {
    let btnToggle = document.createElement('button'),
        btnBack = document.createElement('a');

    btnToggle.textContent = 'Mobile';
    btnToggle.classList.add('btn-toggle-screen');
    btnBack.textContent = 'Back';
    btnBack.classList.add('btn-back');
    btnBack.href = 'index.html';
    document.body.appendChild(btnToggle);
    document.body.appendChild(btnBack);

    let btn = document.querySelector('.btn-toggle-screen'),
        btn2 = document.querySelector('.btn-back');


    btn.style.cssText = `position: fixed;bottom: 110px;right:40px; border-radius: 10px; font-size: 32px; width: 220px; height: 70px; border: none; cursor: pointer; background: #000; color: #fff;`;
    btn2.style.cssText = `position: fixed;bottom: 20px;right:40px; border-radius: 10px; font-size: 32px; display: flex; justify-content: center; text-decoration: none; align-items: center; width: 220px; height: 70px; border: none; cursor: pointer; background: #000; color: #fff;`;

    let frame = document.querySelector('.frame'),
        box = document.querySelector('.box');

    btn.addEventListener('click', () => {
        btn.textContent === 'Mobile' ? btn.textContent = 'Desktop' : btn.textContent = 'Mobile';
        frame.classList.toggle('mobile');
        box.classList.toggle('dark');
    })
});