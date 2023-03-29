let count = 4;
let countCheck = parseInt(localStorage.getItem("countCheck")) || 1;
let buttonPressed = false;

// Verificăm localStorage și afișăm bulina dacă este necesar
if (count === countCheck) {
  document.querySelector("#dot").classList.remove("show");
} else {
  document.querySelector("#dot").classList.add("show");
}

// Funcția evenimentului de click pentru buton
function onClick() {
  if (!buttonPressed) {
    document.getElementById("bell-icon").classList.add("pressed");
    document.querySelector("#dot").classList.remove("show");
    countCheck = count;
    localStorage.setItem("countCheck", countCheck);
    buttonPressed = true;
  }
}

document.getElementById("bell-icon").addEventListener("click", onClick);



document.querySelector('#bell-icon').addEventListener('click', function() {
    document.querySelector('.card').classList.toggle('hide');
  });