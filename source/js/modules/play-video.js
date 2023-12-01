// кнопка воспроизвести видео
const playButton = document.querySelector('[data-play-video]');
const videoElem = document.querySelector('[data-video-elem] video');

export const initPlayVideo = function () {
  if (!playButton && !videoElem) {
    return;
  }

  playButton.addEventListener('click', handleStartButton, false);

  videoElem.addEventListener('play', handlePlayButton, false);
  videoElem.addEventListener('pause', handlePauseButton, false);

  playVideo();
};

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add('is-active');
  } catch (error) {
    await videoElem.pause();
    playButton.classList.remove('is-active');
  }
}

function handleStartButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove('is-active');
  }
}

function handlePlayButton() {
  playButton.classList.add('is-active');
}

function handlePauseButton() {
  playButton.classList.remove('is-active');
}
