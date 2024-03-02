document.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  
  const windowHeight = window.innerHeight;
  let cards = document.querySelectorAll('#card');

  cards.forEach(function(card) {
    let cardOffsetTop = card.offsetTop;
    let cardHeight = card.offsetHeight;

    const isInViewport = scrollTop > cardOffsetTop - windowHeight + cardHeight / 2 && scrollTop < cardOffsetTop + cardHeight / 2;


    if (isInViewport) {
        card.style.scale = '1'; 
    } else  {
        card.style.scale = '0.7'; 
    }
  });
});

document.addEventListener('scroll', function() {
  let scrollTop = window.scrollY;
  
  const windowHeight = window.innerHeight;
  let images = document.querySelectorAll('#image');


  images.forEach(function(image) {
    let imageOffsetTop = image.offsetTop;
    let imageHeight = image.offsetHeight;

    const isInViewport = scrollTop > imageOffsetTop - windowHeight + imageHeight / 2 && scrollTop < imageOffsetTop + imageHeight / 2;


    if (isInViewport) {
        image.style.scale = '1.15'; 
    } else  {
        image.style.scale = '1'; 
    }
  });
});