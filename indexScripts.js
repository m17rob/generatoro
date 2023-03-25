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
          document.getElementById('fotbal-button').style.display = 'block';
        }, 50);
        setTimeout(function() {
          document.getElementById('virtuale-button').style.display = 'block';
        }, 1050);
        // pornește timer-ul pentru #loterie-button după ce conținutul principal este afișat
        setTimeout(function() {
          document.getElementById('loterie-button').style.display = 'block';
        }, 2050);
      }, 500);
    }, 1000);
  }, 2000);
});


function redirectToPage(pageUrl) {
  setTimeout(function() {
    window.location.href = pageUrl;
  }, 400);
}


