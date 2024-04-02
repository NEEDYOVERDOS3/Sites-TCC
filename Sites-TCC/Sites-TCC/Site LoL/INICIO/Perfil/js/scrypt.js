let text = document.getElementById('titulo');
let evelynnfrente = document.getElementById('eveFrente');
let evelynnfundo = document.getElementById('eveFundo');
let btn = document.getElementById('btn');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 0.2 + 'px';
    text.style.transform = 'scale('+ (1 + value * 0.0003) + ')';
    btn.style.marginTop = value * 0.3 + 'px';
    evelynnfrente.style.transform = 'scale('+ (1 + value * 0.0001) + ')';
    evelynnfrente.style.top = value * -0.03 + 'px';
})