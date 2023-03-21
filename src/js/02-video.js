import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');
const videoCurrentTime = localStorage.getItem('videoplayer-current-time');

const player = new Player(videoEl, {});

player.on('timeupdate', throttle(getTime, 1000));

function getTime(ell) {
  localStorage.setItem('videoplayer-current-time', ell.seconds);
}

if (videoCurrentTime !== 0) {
  player.setCurrentTime(videoCurrentTime);
}
