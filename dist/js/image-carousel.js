let carousels = document.getElementsByClassName('image-carousel');

[].forEach.call(carousels, function (c) {
  let next = c.getElementsByClassName('next')[0];
  let prev = c.getElementsByClassName('prev')[0];
  let bubblesContainer = c.getElementsByClassName('bubbles')[0];
  let inner = c.getElementsByClassName('inner')[0];
  let imgs = inner.getElementsByTagName('img');
  let currentImageIndex = 0;
  let width = 100;
  let unit = 'vw';
  let bubbles = [];

  for (let i = 0; i < imgs.length; i++) {
    let b = document.createElement('span');
    b.classList.add('bubble');
    bubblesContainer.appendChild(b);
    bubbles.push(b);

    b.addEventListener('click', function () {
      currentImageIndex = i;
      switchImg();
    });
  }

  function switchImg() {
    inner.style.left = -width * currentImageIndex + unit;

    bubbles.forEach(function (b, i) {
      if (i === currentImageIndex) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  next.addEventListener('click', function () {
    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    }

    switchImg();
  });

  prev.addEventListener('click', function () {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - 1;
    }

    switchImg();
  });

  switchImg();
});
