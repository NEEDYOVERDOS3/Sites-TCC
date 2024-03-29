let text = document.getElementById('titulo');
let killjoyazul1 = document.getElementById('killjoy_blueefx');
let killjoyrosa1 = document.getElementById('killjoy_pinkefx');
let Killjoy_Artwork_Full = document.getElementById('killjoy_png');
let jinx_jinx = document.getElementById('jinx')
let jinx_was = document.getElementById('was')
let btn = document.getElementById('btn');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    
    text.style.marginTop = value * -0.2 + 'px';
    btn.style.marginTop = value * -0.2 + 'px';
    killjoyazul1.style.left = value * -0.2 + 'px';
    killjoyrosa1.style.left = value * 0.1 + 'px';
    Killjoy_Artwork_Full.style.top = value * 0.1 + 'px';
    Killjoy_Artwork_Full.style.marginLeft = value * 0.1 + 'px';
    jinx.style.marginLeft = value * -0.02 + 'px';
    was.style.marginLeft = value * 0.02 + 'px';
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var startFadePosition = 500;
    var fadeInDistance = 300;
  
    if (scrollPosition > startFadePosition && scrollPosition < (startFadePosition + fadeInDistance)) {
      var opacity = (scrollPosition - startFadePosition) / fadeInDistance;
      document.querySelector('.fundojinx').style.opacity = opacity;
    } else if (scrollPosition <= startFadePosition) {
      document.querySelector('.fundojinx').style.opacity = 0;
    } else {
      document.querySelector('.fundojinx').style.opacity = 1;
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var startFadePosition = 500;
    var fadeInDistance = 300;
  
    if (scrollPosition > startFadePosition && scrollPosition < (startFadePosition + fadeInDistance)) {
      var opacity = (scrollPosition - startFadePosition) / fadeInDistance;
      document.querySelector('.fundojinx2').style.opacity = opacity;
    } else if (scrollPosition <= startFadePosition) {
      document.querySelector('.fundojinx2').style.opacity = 0;
    } else {
      document.querySelector('.fundojinx2').style.opacity = 1;
    }
});

document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.imagem-mostruario');
    const curtain = document.querySelector('.cortina-efx');
  
    wrapper.addEventListener('mouseover', function(){
      curtain.style.height = '100%';
    });
  
    wrapper.addEventListener('mouseout', function(){
      curtain.style.height = '0';
    });
  
  });

  document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.imagem-mostruario2');
    const curtain = document.querySelector('.cortina-efx2');
  
    wrapper.addEventListener('mouseover', function(){
      curtain.style.height = '100%';
    });
  
    wrapper.addEventListener('mouseout', function(){
      curtain.style.height = '0';
    });
  
  });