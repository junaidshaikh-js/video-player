// check if the browser support the 'video' element
const supportsVideo = !!document.createElement('video').canPlayType;

if (supportsVideo) {
    // get handles
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const videoControls = document.getElementById('video-controls');

    // hide default controls and show custom controls
    video.controls = false;
    videoControls.style.display = 'block';

    // get control buttons
    const playPause = document.getElementById('playpause');
    const stop = document.getElementById('stop');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progress-bar');
    const mute = document.getElementById('mute');
    const volInc = document.getElementById('volinc');
    const voldec = document.getElementById('voldec');
    const fullscreen = document.getElementById('fullscreen');

    // play/pause 
    playPause.addEventListener('click', function () {
        if (video.paused || video.ended) {
            video.play();
        }
        else {
            video.pause();
        }
    })

    // console.log(videoContainer, video, videoControls);
}