const data = {
    "div1": {
        "matchCount": "3",
        "utilizator": "@andreiC...",
        "data": "30.05.2023",
        "matches": [
            {
                "match": "Milan - Arsenal",
                "prono": "p1.5",
                "odd": "1.43"
            },
            {
                "match": "Barcelona - Real Madrid",
                "prono": "X2",
                "odd": "2.10"
            }
        ],
        "cotaTotala": "20.15"
    },
    "div2": {
        "matchCount": "2",
        "utilizator": "@mariaD...",
        "data": "01.06.2023",
        "matches": [
            {
                "match": "Liverpool - Chelsea",
                "prono": "1",
                "odd": "1.80"
            },
            {
                "match": "Paris Saint-Germain - Bayern Munich",
                "prono": "2",
                "odd": "2.25"
            },
            {
                "match": "Manchester United - Manchester City",
                "prono": "1X",
                "odd": "1.70"
            }
        ],
        "cotaTotala": "30.50"
    }
};

const contentDiv = document.getElementById("content");
const containers = [];
let currentDiv = null;

for (const key in data) {
    const cardW = document.createElement("div");
    cardW.classList.add("cardW");
    cardW.innerHTML = `
        <div class="top">
            <div class="cardW__left">
                <div class="cardW__left--matchCount">${data[key].matchCount}</div>
                <div class="data">
                    <div class="cardW__left--utilizator">${data[key].utilizator}</div>
                    <div class="cardW__left--data">${data[key].data}</div>
                </div>
            </div>
            <div class="cardW__right"><img src="img/dropdown-arrow.svg" alt="icon"></div>
        </div>
        <div class="center hidden">
        </div>
        <div class="bottom">
            <div class="cardW__bottom">Cota totala: ${data[key].cotaTotala}</div>
        </div>
    `;
    contentDiv.appendChild(cardW);

    const centerDiv = cardW.querySelector(".center");
    cardW.addEventListener("click", function() {
        // Închide div-ul curent, dacă există
        if (currentDiv !== null && currentDiv !== centerDiv) {
          currentDiv.classList.add("hidden");
          currentDiv.parentElement.style.boxShadow = "";
        }
      
        // Deschide sau închide div-ul curent
        centerDiv.classList.toggle("hidden");
        if (!centerDiv.classList.contains("hidden")) {
          centerDiv.parentElement.style.boxShadow = "inset 0 0 0.3em 0 #5FD068, 0 0 0.3em 0 #5FD068";
        } else {
          centerDiv.parentElement.style.boxShadow = "";
        }
      
        // Actualizează div-ul curent
        currentDiv = centerDiv;
      });
      

    // Adaugă div-ul în array-ul containers
    containers.push(cardW);

    // Adaugă meciurile în centru
    const center = cardW.querySelector(".center");
    const matches = data[key].matches;
    for (const matchKey in matches) {
        const match = matches[matchKey];
        const cardMw = document.createElement("div");
        cardMw.classList.add("cardMw");
        cardMw.innerHTML = `
            <div class="cardMw__match">${match.match}</div>
            <div class="cardMw__datas">
                <div class="cardMw__datas--prono">${match.prono}</div>
                <div class="cardMw__datas--odd">${match.odd}</div>
            </div>
        `;
        center.appendChild(cardMw);
    }
}

// Adaugă array-ul containers în HTML
contentDiv.append(...containers);


const btnG = document.querySelector('.btnG');
const bileteContent = document.querySelector('.bileteContent');
const closeContent = document.querySelector('#closeContent');

btnG.addEventListener('click', () => {
    bileteContent.classList.replace('hideB', 'showFlex');
    document.querySelector('.menuContainer').classList.remove('showMenu')
    bileteContent.classList.add('animate__animated', 'animate__fadeIn');
  bileteContent.classList.remove('animate__fadeOutUpBig');
});

closeContent.addEventListener('click', () => {
  bileteContent.classList.add('animate__animated', 'animate__fadeOutUpBig');
  setTimeout(() => {
    bileteContent.classList.replace('showFlex', 'hideB');
    bileteContent.classList.remove('animate__animated', 'animate__fadeOutUpBig', 'animate__fadeIn');
  }, 1000); // timpul în milisecunde (în acest exemplu este 1 secundă)
});

  
