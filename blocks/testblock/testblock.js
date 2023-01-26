import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    console.log('decorating testblock');
    console.log(block);
    video = document.createElement('video-js');
    video.setAttribute('data-account', '1507807800001');
    video.setAttribute('data-player', 'rf1BTdKk6M');
    video.setAttribute('data-embed', 'default');
    video.setAttribute('controls', '');
    video.setAttribute('data-video-id', '6116779877001');
    video.setAttribute('data-playlist-id', '');
    video.setAttribute('data-application-id', '');
    video.setAttribute('width', '960');
    video.setAttribute('height', '540');
    block.append(video);


}

<script src="https://players.brightcove.net/1507807800001/rf1BTdKk6M_default/index.min.js"></script>