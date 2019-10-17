document.addEventListener('DOMContentLoaded', () => {
    let btnShow = document.querySelectorAll('.btn-show');

    btnShow.forEach((item) => {
        item.addEventListener('click', (e) => {
            let target = e.target,
                list = target.closest('.more-inf').querySelector('.inf-list');
            target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active');
            (list.classList.contains('inf-list_show')) ? list.classList.remove('inf-list_show') : list.classList.add('inf-list_show');
        })
    });
});