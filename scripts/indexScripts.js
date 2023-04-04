// Blochează zoom-ul pe dispozitivele mobile
function blockZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}
window.addEventListener('load', function(){
  // afișează preloader-ul
  document.querySelector('#preloader').style.display = 'block';
  // întârzie afișarea conținutului principal cu 2 secunde
  setTimeout(function() {
    // adaugă clasele animate__animated animate__zoomOut la preloader
    document.querySelector('#preloader').classList.add('animate__animated', 'animate__fadeOut');
    // așteaptă 1 secundă ca animația să se încheie
    setTimeout(function() {
      // adaugă opacitatea 0 pentru preloader
      document.querySelector('#preloader').style.opacity = '0';
      // așteaptă 0,5 secunde ca opacitatea să scadă la 0
      setTimeout(function() {
        // ascunde preloader-ul
        document.querySelector('#preloader').style.display = 'none';
        // adaugă clasele animate__animated animate__zoomIn la conținutul principal
        document.querySelector('#main-content').classList.add('animate__animated', 'animate__fadeIn');
        // afișează conținutul principal
        document.querySelector('#main-content').style.display = 'block';
        // pornește timer-ul pentru #virtuale-button după ce conținutul principal este afișat
        setTimeout(function() {
          document.querySelector('#footer').style.display = 'block';
        }, 500);
        setTimeout(function() {
          document.getElementById('fotbal-button').style.display = 'block';
        }, 50);
        setTimeout(function() {
          document.getElementById('virtuale-button').style.display = 'block';
        }, 1050);
        // pornește timer-ul pentru #loterie-button după ce conținutul principal este afișat
      }, 500);
    }, 1000);
  }, 2000);
});


function redirectToPage(pageUrl) {
  setTimeout(function() {
    window.location.href = pageUrl;
  }, 400);
}



function createBubble() {
  const bubbleParent = document.createElement('div');
  bubbleParent.id = 'bubble';
  bubbleParent.classList.add('bubble-parent');

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const bubbleImg = document.createElement('img');
  bubbleImg.id = 'bubbleImg';
  bubbleImg.src = 'img/err.svg';
  bubbleImg.alt = 'avertizare icon';

  const bubbleTxt = document.createElement('div');
  bubbleTxt.id = 'bubbleTxt';
  bubbleTxt.classList.add('bubble__txt');
  bubbleTxt.textContent = 'eroare nedeterminata.contactati suportul';

  bubble.appendChild(bubbleImg);
  bubble.appendChild(bubbleTxt);
  bubbleParent.appendChild(bubble);

  document.body.appendChild(bubbleParent);

  return bubbleParent;
}


let animationTimeout;

function animateBubbleBtn(text, imgSrc, bgColor, container) {
  const oldBubbleBtn = container.querySelector('.bubble-btn');
  if (oldBubbleBtn) {
    oldBubbleBtn.classList.remove(
      'animate__animated',
      'animate__fadeOut',
      'animate__bounceIn'
    );
    oldBubbleBtn.remove();
    clearTimeout(animationTimeout);
  }

  const bubbleBtn = createBubble();
  const bubbleTxt = bubbleBtn.querySelector('#bubbleTxt');
  const bubbleImg = bubbleBtn.querySelector('#bubbleImg');
  const bubble = bubbleBtn.querySelector('.bubble');

  bubbleTxt.textContent = text;
  bubbleImg.src = imgSrc;
  bubble.style.backgroundColor = bgColor;

  bubbleBtn.classList.add('animate__animated', 'animate__bounceIn', 'bubble-btn');
  container.appendChild(bubbleBtn);

  animationTimeout = setTimeout(function () {
    bubbleBtn.classList.add('animate__animated', 'animate__fadeOut');
    bubbleBtn.classList.remove(
      'animate__animated',
      'animate__fadeOut',
      'animate__bounceIn'
    );

    setTimeout(function () {
      bubbleBtn.remove(); // remove the element from the document
    }, 1000);
  }, 2000);
}



const bubbleContainer = document.getElementById('bubbleContainer');