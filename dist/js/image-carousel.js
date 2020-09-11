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
  let myTimer = setInterval(slideShow, 4000);

  // Create bubble controllers
  for (let i = 0; i < imgs.length; i++) {
    let b = document.createElement('span');
    b.classList.add('bubble');
    bubblesContainer.appendChild(b);
    bubbles.push(b);

    b.addEventListener('click', function () {
      clearInterval(myTimer);
      myTimer = setInterval(slideShow, 4000);

      currentImageIndex = i;
      switchActiveImgBtn();
    });
  }

  // Give corresponding bubble 'active' class
  function switchActiveImgBtn() {
    inner.style.left = -width * currentImageIndex + unit;

    bubbles.forEach(function (b, i) {
      if (i === currentImageIndex) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
  }

  // Next Btn
  next.addEventListener('click', function () {
    clearInterval(myTimer);
    myTimer = setInterval(slideShow, 4000);

    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    }

    switchActiveImgBtn();
  });

  // Prev Btn
  prev.addEventListener('click', function () {
    clearInterval(myTimer);
    myTimer = setInterval(slideShow, 4000);

    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = imgs.length - 1;
    }

    switchActiveImgBtn();
  });

  // Automatic slideshow
  function slideShow() {
    currentImageIndex++;

    if (currentImageIndex >= imgs.length) {
      currentImageIndex = 0;
    }

    switchActiveImgBtn();
  }

  switchActiveImgBtn();
});
