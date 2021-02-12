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
    });

    // stop
    stop.addEventListener('click', function () {
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
    });

    // mute 
    mute.addEventListener('click', function () {
        video.muted ? video.muted = false : video.muted = true;
    });

    // volume up
    volInc.addEventListener('click', function () {
        if (video.volume < 1.0) {
            video.volume += 0.1;
        }
    });

    // volume down
    voldec.addEventListener('click', function () {
        if (video.volume > 0.0) {
            video.volume -= 0.1;
        }
    });

    // progress 
    // set max value of progress bar
    video.addEventListener('loadedmetadata', function () {
        progress.setAttribute('max', video.duration);
    });

    // set the current value of progress bar
    video.addEventListener('timeupdate', function () {
        if (!progress.getAttribute('max')) {
            progress.setAttribute('max', video.duration);
        };

        progress.value = video.currentTime;
        progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
    });

    // seek through the video
    progress.addEventListener('click', function (e) {
        var pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
        video.currentTime = pos * video.duration;
    });

    // fullscreen
    // check if browser supports the fullscreen
    let fullScreenEn = !!(document.fullscreenEnabled);

    // if doesn't support don't show full screen button
    if (!fullScreenEn) {
        fullscreen.style.display = 'none';
    }

    // check if the browser is in fullscreen
    let isFullscreen = () => {
        return !!document.fullscreenElement
    };

    fullscreen.addEventListener('click', function () {
        if (isFullscreen()) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        else {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            }
        }
    })
}