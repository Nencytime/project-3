const scroll = document.querySelectorAll('a[href^="#"]');

const initScroll = () => {
  for (let smoothLink of scroll) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {initScroll};
