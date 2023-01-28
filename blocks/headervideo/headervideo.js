import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
    // load component from external
    console.log('decorating testblock');
    console.log(block);
    const script = document.createElement('script');     
    const video = document.createElement('video-js');
    video.setAttribute('data-account', '1852113022001');
    video.setAttribute('data-player', 'g2OtgoAoBs');
    video.setAttribute('data-embed', 'default');
    video.setAttribute('controls', '');
    video.setAttribute('data-video-id', '6314069952112');
    video.setAttribute('data-playlist-id', '');
    video.setAttribute('data-application-id', '');
    video.setAttribute('width', '960');
    video.setAttribute('height', '540');
    block.append(video);
    console.log(video);
    script.src = "https://players.brightcove.net/1852113022001/g2OtgoAoBs_default/index.min.js"; 
    block.append(script);   
}

