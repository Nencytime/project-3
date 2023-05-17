export const initTab = () => {
  document.querySelector('.tabs__button').classList.add('is-active')
  document.querySelector('.tabs__item').classList.add('is-active')

  const selectPanel = (e) => {
    let target = e.target.dataset.target

    document.querySelectorAll('.tabs__button, .tabs__item').forEach(el => el.classList.remove('is-active'))
    e.target.classList.add('is-active')
    console.log(document.querySelector('.' + target))
    document.querySelector('.' + target).classList.add('is-active')
  };

  document.querySelectorAll('.tabs__button').forEach(el => {
    el.addEventListener('click', selectPanel)
  })
};
