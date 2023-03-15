import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');

const player = new Player(videoEl, {});

player.on('timeupdate', throttle(getTime, 1000));

const videoCurrentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(videoCurrentTime);

function getTime(ell) {
  localStorage.setItem('videoplayer-current-time', ell.seconds);
}
