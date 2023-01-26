import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    console.log('decorating testblock');
    console.log(block);
    const video = document.createElement('video-js');
    video.setAttribute('data-account', '1507807800001');
    video.setAttribute('data-player', 'rf1BTdKk6M');
    video.setAttribute('data-embed', 'default');
    video.setAttribute('controls', '');
    video.setAttribute('data-video-id', '6116779877001');
    video.setAttribute('data-playlist-id', '');
    video.setAttribute('data-application-id', '');
    video.setAttribute('width', '960');
    video.setAttribute('height', '540');
    block.textContent = '';
    block.append(video);
    console.log(video);
}

