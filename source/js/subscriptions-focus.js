const card = document.querySelectorAll('.subscriptions__item');

const cardFocus = () => {
  card.forEach(function (item) {
    item.addEventListener('focus', function () {
      closeCard();
      item.classList.add('border-gradient');
      item.querySelector('.subscriptions__button').focus();
    });
  });
}

const closeCard = () => {
  card.forEach(function (item) {
    if (item.classList.contains('border-gradient')) {
      item.classList.remove('border-gradient');
    }
  });
};

export {cardFocus};
