const video = document.querySelector('.preview__video-container');
const videoButton = document.querySelector('.preview__video-button');

videoButton.addEventListener('click', () => {
  if (video.classList.contains('playing')) {
    return;
  }
  videoButton.remove();
  video.classList.add('playing');
  video.insertAdjacentHTML('afterbegin', '<iframe width="364" height="228" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
