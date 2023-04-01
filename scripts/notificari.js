let count = 5;
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
  
  document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.card') && !event.target.closest('#bell-icon')) {
      document.querySelector('.card').classList.add('hide');
    }
  });
  



// Definim un obiect gol in care sa stocam informatiile
var cardInfo = {};

// Functia pentru a adauga un element "cardNot" si actualizarea dictionarului
function addCardNot(day, month, author, title, description, time) {
  // Gasim elementul ".card__content"
  var cardContent = document.querySelector(".card__content");

  // Creem elementul "cardNot" nou
  var cardNot = document.createElement("div");
  cardNot.classList.add("cardNot");

  // Creem elementul "left"
  var left = document.createElement("div");
  left.classList.add("left");

  // Creem elementul "cardNot__timeC"
  var cardTimeC = document.createElement("div");
  cardTimeC.classList.add("cardNot__timeC");

  // Creem elementele pentru ziua si luna
  var cardDay = document.createElement("div");
  cardDay.classList.add("card__timeC--day");
  cardDay.textContent = day;
  var cardMonth = document.createElement("div");
  cardMonth.classList.add("card__timeC__month");
  cardMonth.textContent = month;

    // Creem elementul "cardNot__time" pentru ora
    var cardTime = document.createElement("div");
    cardTime.classList.add("cardNot__time");
    cardTime.textContent = time;

  // Adaugam elementele pentru ziua si luna in elementul "cardNot__timeC"
  cardTimeC.appendChild(cardDay);
  cardTimeC.appendChild(cardMonth);
   // Adaugam elementul "cardNot__time" in elementul "cardNot"
   cardTimeC.appendChild(cardTime);

  // Adaugam elementul "cardNot__timeC" in elementul "left"
  left.appendChild(cardTimeC);

  var bgCard = document.createElement("div");
  bgCard.classList.add("bgCard");

  

  // Creem elementul "cardNot__left" pentru autor
  var cardLeft = document.createElement("div");
  cardLeft.classList.add("cardNot__left");
  cardLeft.textContent = author;

  // Adaugam elementul "cardNot__left" in elementul "left"
  bgCard.appendChild(cardLeft);

  // Creem elementul "cardNot__right" pentru titlu si descriere
  var cardRight = document.createElement("div");
  cardRight.classList.add("cardNot__right");
  var cardTitle = document.createElement("div");
  cardTitle.classList.add("cardNot__right--title");
  cardTitle.textContent = title;
  var cardDescription = document.createElement("div");
  cardDescription.classList.add("cardNot__right--txt");
  cardDescription.textContent = description;
  cardRight.appendChild(cardTitle);
  cardRight.appendChild(cardDescription);

  // Adaugam elementul "cardNot__right" in elementul "left"
  bgCard.appendChild(cardRight);

  // Adaugam elementul "left" in elementul "cardNot"
  cardNot.appendChild(left);
  cardNot.appendChild(bgCard);


 

  // Adaugam elementul "cardNot" in elementul ".card__content"
  cardContent.appendChild(cardNot);

  // Actualizam dictionarul
  var index = Object.keys(cardInfo).length;
  cardInfo[index] = {
    "day": day,
    "month": month,
    "author": author,
    "title": title,
    "description": description,
    "time": time
  };
}


// Exemplu de adaugare a unui element nou
addCardNot("30", "Mar.", "ADMIN", "Noi campionate", "Noi campionate adaugate: Premier league, Ligue One, La Liga", "17:50")
addCardNot("30", "Mar.", "ADMIN", "Noua stire", "test", "17:49")

  