const cardFooter = document.querySelector('.card__footer');
const cardBtn = document.querySelector('.card__btn');

cardBtn.addEventListener('click', () => {
    cardFooter.classList.toggle('card__footer--share');
})
