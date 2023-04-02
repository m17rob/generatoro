const data = {
    "div1": {
        "matchCount": "",
        "utilizator": "@andreiC...",
        "data": "joi 30",
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
        "cotaTotala": ""
    },
    "div2": {
        "matchCount": "",
        "utilizator": "@mariaD...",
        "data": "joi 30",
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
            },
            {
                "match": "Manchester United - Arsenal",
                "prono": "X",
                "odd": "3.50"
            }
            
        ],
        "cotaTotala": ""
    }
};

const contentDiv = document.getElementById("content");
const containers = [];
let currentDiv = null;

for (let divKey in data) {
  let matches = data[divKey].matches;
  let totalOdd = 1;
  
  for (let i = 0; i < matches.length; i++) {
    let odd = parseFloat(matches[i].odd);
    totalOdd *= odd;
  }
  
  let cotaTotala = totalOdd.toFixed(2);
  data[divKey].cotaTotala = cotaTotala;
}

for (let divKey in data) {
  let matches = data[divKey].matches;
  let matchCount = matches.length;
  
  data[divKey].matchCount = matchCount.toString();
}



for (const key in data) {
  
    const cardW = document.createElement("div");
    cardW.classList.add("cardW");
    cardW.innerHTML = `
        <div class="top">
            <div class="cardW__left">
                <div class="cardW__left--matchCount">${data[key].matchCount}</div>
                <div class="data">
                <div class="cardW__left--data">${data[key].data}</div>
                    <div class="cardW__left--utilizator">${data[key].utilizator}</div>
                
                </div>
            </div>
            <div class="cardW__right"><img src="img/dropdown-arrowMatch.svg" alt="icon"></div>
        </div>
        <div class="center hidden">
        </div>
        <div class="bottom">
            <div class="cardW__bottom">Cota totala: <span>${data[key].cotaTotala}</span></div>
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


const closeContent = document.querySelector("#btnHomeS");

closeContent.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "/fotbal.html";
  }, 300); // 500ms = 0.5s
});



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
          document.querySelector('#contentShow').classList.add('animate__animated', 'animate__fadeIn');
          // afișează conținutul principal
          document.querySelector('#contentShow').style.display = 'block';
  
          setTimeout(function() {
            document.querySelector('#footer').style.display = 'block';
          }, 500);
  
  
        }, 500);
      }, 1000);
    }, 2000);
  });
  