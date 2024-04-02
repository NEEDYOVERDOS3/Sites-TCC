let text = document.getElementById('titulo');
let jinxFrente = document.getElementById('jinxFrente');
let jinxFundo = document.getElementById('jinxFundo');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 0.2 + 'px';
    text.style.transform = 'scale('+ (1 + value * 0.0003) + ')';
    btn.style.marginTop = value * 0.3 + 'px';
    jinxFrente.style.transform = 'scale('+ (1 + value * 0.0002) + ')';
    jinxFrente.style.marginTop = value * -0.02 + 'px';
})