var videoPaths = [
  '../img/video/Untitled (1).mp4',
  '../img/video/PRESTIGE STAR GUARDIAN SYNDRA 1080p.mp4',
  '../img/video/star-guardian-xayah-and-rakan-league-of-legends-moewalls-com.mp4',
  'img/video/Battle Bunny Miss Fortune Animated Login Screen.mp4',
  'img/video/arcane-jinx-league-of-legends-moewalls-com.mp4',
  'img/video/Ahri - Spirit Blossom Animated Wallpaper 1080p (HD).mp4',
  'img/video/MORGANA NEMESIS ESTELAR.mp4'
];


function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function changeBackgroundVideo() {
  var videoIndex = getRandomIndex(videoPaths.length);
  var video = document.getElementById('bg-video');
  video.src = videoPaths[videoIndex];
  video.load();
}

window.onload = changeBackgroundVideo;