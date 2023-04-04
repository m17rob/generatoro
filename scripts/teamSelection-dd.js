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

        setTimeout(function() {
          document.querySelector('#footer').style.display = 'block';
        }, 500);

        // întârzie afișarea elementului containerInfo cu 1 secundă
        setTimeout(function() {
          // afișează elementul containerInfo
          // document.querySelector('.containerInfo').style.display = 'block';
          document.querySelector('.containerInfo').classList.add('animate__animated', 'animate__fadeIn', 'vizibil');
        }, 1000);

      }, 500);
    }, 1000);
  }, 2000);
});






blockZoom();

var dict = {
    "Premier League": {
      "img": "img/premierLeague/premierLeagueIcon.png",
      "suboptiuni": {
        "Man. United": "img/premierLeague/t1.png",
        "Arsenal": "img/premierLeague/t3.png",
        "Aston Villa": "img/premierLeague/t7.png",
        "Brentford": "img/premierLeague/t94.png",
        "Brighton": "img/premierLeague/t36.png",
        "Chelsea": "img/premierLeague/t8.png",
        "Crystal Pal.": "img/premierLeague/t31.png",
        "Everton": "img/premierLeague/t11.png",
        "Leeds": "img/premierLeague/t2.png",
        "Leicester": "img/premierLeague/t13.png",
        "Liverpool": "img/premierLeague/t14.png",
        "Man. City": "img/premierLeague/t43.png",
        "Newcastle": "img/premierLeague/t4.png",
        "Fulham": "img/premierLeague/t54.png",
        "Southampton": "img/premierLeague/t20.png",
        "Tottenham": "img/premierLeague/t6.png",
        "Nottingham": "img/premierLeague/t17.png",
        "West Ham": "img/premierLeague/t21.png",
        "Wolverhampton": "img/premierLeague/t39.png"
      }
    },
    "LaLiga": {
      "img": "img/laLiga/laLiga.png",
      "suboptiuni": {
        "Barcelona": "img/laLiga/t1.png",
        "Real Madrin": "img/laLiga/t2.png",
        "Atl. Madrid": "img/laLiga/t3.png",
        "Real Sociedad": "img/laLiga/t4.png",
        "Betis": "img/laLiga/t5.png",
        "Villarreal": "img/laLiga/t6.png",
        "Ath. Bilbao": "img/laLiga/t7.png",
        "Vallecano": "img/laLiga/t8.png",
        "Osasuna": "img/laLiga/t9.png",
        "Celta Vigo": "img/laLiga/t10.png",
        "Girona": "img/laLiga/t11.png",
        "Mallorca": "img/laLiga/t12.png",
        "Sevilla": "img/laLiga/t13.png",
        "Getafe": "img/laLiga/t14.png",
        "Cadiz": "img/laLiga/t15.png",
        "Valladolid": "img/laLiga/t16.png",
        "Valencia": "img/laLiga/t17.png",
        "Espanyol": "img/laLiga/t18.png",
        "Almeria": "img/laLiga/t19.png",
        "Elche": "img/laLiga/t20.png"
      }
    },
    "Ligue 1": {
      "img": "img/ligue1/ligue1.png",
      "suboptiuni": {
        "PSG": "img/ligue1/t1.png",
        "Lens": "img/ligue1/t2.png",
        "Marseille": "img/ligue1/t3.png",
        "Monaco": "img/ligue1/t4.png",
        "Lille": "img/ligue1/t5.png",
        "Rennes": "img/ligue1/t6.png",
        "Reims": "img/ligue1/t7.png",
        "Nice": "img/ligue1/t8.png",
        "Lyon": "img/ligue1/t9.png",
        "Lorient": "img/ligue1/t10.png",
        "Montpellier": "img/ligue1/t11.png",
        "Clermont": "img/ligue1/t12.png",
        "Toulouse": "img/ligue1/t13.png",
        "Nantes": "img/ligue1/t14.png",
        "Brest": "img/ligue1/t15.png",
        "Strasbourg": "img/ligue1/t16.png",
        "Auxerre": "img/ligue1/t17.png",
        "Troyes": "img/ligue1/t18.png",
        "AC Ajaccio": "img/ligue1/t19.png",
        "Angers": "img/ligue1/t20.png"
      }
    },
    "Bundesliga": {
      "img": "img/bundesliga/bundesliga.png",
      "suboptiuni": {
        "Bayern": "img/bundesliga/t1.png",
        "Dortmund": "img/bundesliga/t2.png",
        "Union Berlin": "img/bundesliga/t3.png",
        "Freiburg": "img/bundesliga/t4.png",
        "RB Leipzig": "img/bundesliga/t5.png",
        "Frankfurt": "img/bundesliga/t6.png",
        "Leverkusen": "img/bundesliga/t7.png",
        "Mainz": "img/bundesliga/t8.png",
        "Wolfsburg": "img/bundesliga/t9.png",
        "Monchengladbach": "img/bundesliga/t10.png",
        "Bremen": "img/bundesliga/t11.png",
        "Augsburg": "img/bundesliga/t12.png",
        "Köln": "img/bundesliga/t13.png",
        "Bochum": "img/bundesliga/t14.png",
        "Hoffenheim": "img/bundesliga/t15.png",
        "Hertha": "img/bundesliga/t16.png",
        "Schalke": "img/bundesliga/t17.png",
        "Stuttgart": "img/bundesliga/t18.png"
      }
    },
    "Serie A": {
      "img": "img/serieA/serieA.png",
      "suboptiuni": {
        "Napoli": "img/serieA/t1.png",
        "Lazio": "img/serieA/t2.png",
        "AC Milan": "img/serieA/t3.png",
        "Inter": "img/serieA/t4.png",
        "AS Roma": "img/serieA/t5.png",
        "Atalanta": "img/serieA/t6.png",
        "Juventus": "img/serieA/t7.png",
        "Bologna": "img/serieA/t8.png",
        "Fiorentina": "img/serieA/t9.png",
        "Torino": "img/serieA/t10.png",
        "Udinese": "img/serieA/t11.png",
        "Sassuolo": "img/serieA/t12.png",
        "Monza": "img/serieA/t13.png",
        "Empoli": "img/serieA/t14.png",
        "Salernitana": "img/serieA/t15.png",
        "Lecce": "img/serieA/t16.png",
        "Spezia": "img/serieA/t17.png",
        "Verona": "img/serieA/t18.png",
        "Sampdoria": "img/serieA/t19.png",
        "Cremonese": "img/serieA/t20.png"
      }
    },
    "Liga 1 - Superliga": {
      "img": "img/liga1/liga1.png",
      "suboptiuni": {
        "Farul Constanța": "img/liga1/t1.png",
        "CFR Cluj": "img/liga1/t2.png",
        "FCSB": "img/liga1/t3.png",
        "Univ. Craiova": "img/liga1/t4.png",
        "Rapid București": "img/liga1/t5.png",
        "Sepsi": "img/liga1/t6.png",
        "U Craiova 1948": "img/liga1/t7.png",
        "Petrolul Ploiești": "img/liga1/t8.png",
        "'U' Cluj": "img/liga1/t9.png",
        "FC Voluntari": "img/liga1/t10.png",
        "FC Botoșani": "img/liga1/t11.png",
        "Chindia Târgoviște": "img/liga1/t12.png",
        "FC Hermannstadt": "img/liga1/t13.png",
        "FC Argeș": "img/liga1/t14.png",
        "UTA Arad": "img/liga1/t15.png",
        "CS Mioveni": "img/liga1/t16.png"
      }
    },
    "Champions League": {
      "img": "img/championsLeague/championsLeague.png",
      "suboptiuni": {
        "Benfica": "img/championsLeague/t1.png",
        "Inter": "img/championsLeague/t2.png",
        "Man. City": "img/championsLeague/t3.png",
        "Bayern": "img/championsLeague/t4.png",
        "AC Milan": "img/championsLeague/t5.png",
        "Napoli": "img/championsLeague/t6.png",
        "Real Madrid": "img/championsLeague/t7.png",
        "Chelsea": "img/championsLeague/t8.png"
      }
    }
  };


  

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
  

// găsim elementul HTML pentru dropdown
const dropdown = document.getElementById("dropdown");

// creăm butonul dropdown
const dropdownBtn = document.createElement("button");
// dropdownBtn.textContent = "Alege un campionat";
dropdownBtn.innerHTML = `Alege un campionat<img id="rotate" src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow"> `;
dropdownBtn.classList.add("dropdown-btn");
dropdown.appendChild(dropdownBtn);

// creăm opțiunile dropdown-ului
const options = Object.keys(dict);
const dropdownOptions = document.createElement("ul");
dropdownOptions.classList.add("dropdown-options");

options.forEach(option => {
  const listItem = document.createElement("li");
  listItem.textContent = option;
  listItem.classList.add("dropdown-option");
  
  // adăugăm imaginea pentru fiecare opțiune
  const img = document.createElement("img");
  img.setAttribute("src", dict[option].img);
  listItem.insertBefore(img, listItem.firstChild);

 
  
  listItem.addEventListener("click", () => {
    const subBtn = document.getElementById('submitButton');
    const subVS = document.getElementById('VSub');
    const tag = document.getElementById('tag');
    dropdownBtn.innerHTML = `<div class="pOne"><img src="${dict[option].img}" alt="${option}" class="dropdown-option-img"> ${option}</div><img id="rotate" src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow">`;
    // dropdownOptions.style.animation = 'test1 0.5s ease-in-out forwards';
    dropdownOptions.classList.remove("show");
    subBtn.classList.add('show');
    subVS.classList.add('show');
    tag.classList.add('show', 'animate__animated', 'animate__fadeIn');
    // aici adăugăm codul pentru a crea subdropdown-ul
    const subdropdown = document.getElementById("subdropdown");
    subdropdown.innerHTML = "";
    const subdropdownBtn = document.createElement("button");
    subdropdownBtn.classList.add("dropdown-btn");
    document.querySelector('.subselectori').classList.add('animate__animated', 'animate__fadeIn');
    subBtn.classList.add('animate__animated', 'animate__fadeIn');
      setTimeout(function() {
        subBtn.classList.add('blob', 'white');
      }, 1000); // timpul de întârziere în milisecunde
    subdropdownBtn.setAttribute('id', 'subSelect1');
    subdropdownBtn.innerHTML = '<div id="justCont"><div class="teamTxt">Alege echipa</div><div class="teamArrow"><img class="arrow" src="img/teams-arrow.svg" alt="team arrow"></div></div> ';
    // subdropdownBtn.innerHTML = '<div id="justCont"><img src="${dict[option].suboptiuni[selectedSuboption]}" alt="${selectedSuboption}" class="dropdown-option-img"> ${selectedSuboption}</div> ';
    subdropdown.appendChild(subdropdownBtn);
    const subdropdownOptions = document.createElement("div");
    subdropdownOptions.classList.add("subdropdown-options");
    // subdropdownOptions.style.zIndex = '3';

    subdropdown.appendChild(subdropdownOptions);
    for (const suboption in dict[option].suboptiuni) {
      const suboptionImg = dict[option].suboptiuni[suboption];
      const suboptionHTML = `<div class="dropdown-option" data-suboption="${suboption}"><div class="w20 ml10"><img src="${suboptionImg}" alt="${suboption}" class="dropdown-option-img"> </div> ${suboption} </div>`;
      subdropdownOptions.insertAdjacentHTML("beforeend", suboptionHTML);
     
    }
    // adăugăm evenimentul click pentru butonul subdropdown-ului
    subdropdownBtn.addEventListener("click", () => {
      subdropdownOptions.classList.toggle("show");
      document.querySelector(".subdropdown-options2").classList.remove("show");
      document.querySelector(".dropdown-options").classList.remove("show");
    });
    
    document.querySelector('.dropdown-btn').addEventListener("click", () => {
      document.querySelector('.subdropdown-options2').classList.remove('show');
      document.querySelector('.subdropdown-options').classList.remove('show');
    })

    // adăugăm evenimentul click pentru fiecare subopțiune
    const suboptionElements = subdropdownOptions.querySelectorAll(".dropdown-option");
    suboptionElements.forEach(suboptionElement => {
      suboptionElement.addEventListener("click", () => {
        const selectedSuboption = suboptionElement.getAttribute("data-suboption");
        subdropdownBtn.innerHTML = `<div id="justCont"><div class="pOne"><div class="w20"><img src="${dict[option].suboptiuni[selectedSuboption]}" alt="${selectedSuboption}" class="dropdown-option-img"> </div> ${selectedSuboption}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;

        subdropdownOptions.classList.remove("show");
      });
    });

    // adăugăm codul pentru a crea subdropdown2-ul
const subdropdown2 = document.getElementById("subdropdown2");
subdropdown2.innerHTML = "";
const subdropdownBtn2 = document.createElement("button");
subdropdownBtn2.classList.add("dropdown-btn");
subdropdownBtn2.setAttribute('id', 'subSelect2');
subdropdownBtn2.innerHTML = ' <div id="justCont"><div class="teamTxt">Alege echipa</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div>';
subdropdown2.appendChild(subdropdownBtn2);
const subdropdownOptions2 = document.createElement("div");
subdropdownOptions2.classList.add("subdropdown-options2");
// subdropdownOptions2.style.zIndex = '3';
subdropdown2.appendChild(subdropdownOptions2);
for (const suboption2 in dict[option].suboptiuni) {
  const suboptionImg2 = dict[option].suboptiuni[suboption2];
  const suboptionHTML2 = `<div class="dropdown-option" data-suboption2="${suboption2}">
                          <div class="w20 ml10"> <img src="${suboptionImg2}" alt="${suboption2}" class="dropdown-option-img"> </div>
                           ${suboption2}
                         </div>`;
  subdropdownOptions2.insertAdjacentHTML("beforeend", suboptionHTML2);
}

// adăugăm evenimentul click pentru butonul subdropdown2-ului
subdropdownBtn2.addEventListener("click", () => {
  subdropdownOptions2.classList.toggle("show");
  document.querySelector(".subdropdown-options").classList.remove("show");
  document.querySelector(".dropdown-options").classList.remove("show");
});

// adăugăm evenimentul click pentru fiecare subopțiune din subdropdown2
const suboptionElements2 = subdropdownOptions2.querySelectorAll(".dropdown-option");
suboptionElements2.forEach(suboptionElement2 => {
  suboptionElement2.addEventListener("click", () => {
    const selectedSuboption2 = suboptionElement2.getAttribute("data-suboption2");
    subdropdownBtn2.innerHTML = `<div id="justCont"><div class="pOne"><div class="w20"><img src="${dict[option].suboptiuni[selectedSuboption2]}" alt="${selectedSuboption2}" class="dropdown-option-img"></div>${selectedSuboption2}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;
    subdropdownOptions2.classList.remove("show");
  });
});




});

  
  
  
  dropdownOptions.appendChild(listItem);
});

dropdown.appendChild(dropdownOptions);

// adăugăm evenimentul click la butonul dropdown
dropdownBtn.addEventListener("click", () => {
  dropdownOptions.classList.toggle("show");
  // document.querySelector(".subdropdown-options").classList.remove("show");
  // document.querySelector(".subdropdown-options2").classList.remove("show");
});

// var pronos = ["po1", "po2", "po3", "px1", "px3", "px4", "pf1", "pf2", "pl1", "pl2"];
var pronos = [
  { prono: "1", probabilitate: 0.33 },
  { prono: "X", probabilitate: 0.30 },
  { prono: "2", probabilitate: 0.37 },
  { prono: "1X", probabilitate: 0.70 },
  { prono: "X2", probabilitate: 0.68 },
  { prono: "12", probabilitate: 0.83 },
  { prono: "GG", probabilitate: 0.60 },
  { prono: "PsF 1", probabilitate: 0.55 },
  { prono: "PsF 2", probabilitate: 0.45 },
  { prono: "PsF X", probabilitate: 0.25 },
  { prono: "peste 1.5g", probabilitate: 0.70 },
  { prono: "peste 2.5g", probabilitate: 0.45 },
  { prono: "peste 3.5g", probabilitate: 0.20 },
  { prono: "sub 2.5g", probabilitate: 0.50 },
  { prono: "sub 3.5g", probabilitate: 0.82 },
  { prono: "gazde +0.5g", probabilitate: 0.70 },
  { prono: "gazde +1.5g", probabilitate: 0.60 },
  { prono: "oaspeti +0.5g", probabilitate: 0.70 },
  { prono: "oaspeti +1.5g", probabilitate: 0.45 },
  { prono: "1-3 goluri", probabilitate: 0.70 },
  { prono: "2-3 goluri", probabilitate: 0.65 },
  { prono: "2-4 goluri", probabilitate: 0.60 },
  { prono: "3-4 goluri", probabilitate: 0.30 },
  { prono: "3-5 goluri", probabilitate: 0.35 },
  { prono: "gazde 1-2g", probabilitate: 0.30 },
  { prono: "gazde 1-3g", probabilitate: 0.50 },
  { prono: "gazde 2-3g", probabilitate: 0.40 },
  { prono: "oaspeti 1-2g", probabilitate: 0.40 },
  { prono: "oaspeti 1-3g", probabilitate: 0.50 },
  { prono: "oaspeti 2-3g", probabilitate: 0.35 },
  { prono: "GG&3+", probabilitate: 0.40 },
  { prono: "NuGG&3+", probabilitate: 0.25 },
  { prono: "1/1", probabilitate: 0.02 },
  { prono: "2/2", probabilitate: 0.01 },
  { prono: "1/2", probabilitate: 0.03 },
  { prono: "2/1", probabilitate: 0.015 },
  { prono: "1&+1.5g", probabilitate: 0.60 },
  { prono: "2&+1.5g", probabilitate: 0.45 },
  { prono: "1&-3.5g", probabilitate: 0.60 },
  { prono: "2&-3.5g", probabilitate: 0.60 },
  { prono: "1X&+1.5g", probabilitate: 0.60 },
  { prono: "X2&+1.5g", probabilitate: 0.50 },
  { prono: "1X&-3.5g", probabilitate: 0.70 },
  { prono: "X2&-3.5g", probabilitate: 0.60 },
  { prono: "Gol 1-gazde", probabilitate: 0.30 },
  { prono: "Gol 1-oaspeti", probabilitate: 0.30 },
  { prono: "Rep1 1X", probabilitate: 0.50 },
  { prono: "Rep1 X2", probabilitate: 0.40 },
  { prono: "Rep1 12", probabilitate: 0.50 },
  { prono: "Rep2 1X", probabilitate: 0.50 },
  { prono: "Rep2 X2", probabilitate: 0.25 },
  { prono: "Rep2 12", probabilitate: 0.50 },
  { prono: "Rep1 +0.5g", probabilitate: 0.70 },
  { prono: "Rep1 +1.5g", probabilitate: 0.55 },
  { prono: "Rep2 +0.5g", probabilitate: 0.75 },
  { prono: "Rep2 +1.5g", probabilitate: 0.60 }
];


function validateForm() {
    const subSelect1 = document.getElementById("subSelect1");
    const subSelect2 = document.getElementById("subSelect2");
    const delIcon = document.getElementById('delIcon');
    var subSelect1Value = subSelect1.innerHTML;
    var subSelect2Value = subSelect2.innerHTML;
  
    if (subSelect1.querySelector('div[class="teamTxt"]') || subSelect2.querySelector('div[class="teamTxt"]')) {
      // alert("Selectează echipele");

      animateBubbleBtn('Selectează echipele', 'img/avertizare.svg', '#FF8B13', bubbleContainer);
    } else if (subSelect1.innerText === subSelect2.innerText) {
      // alert("Nu poți selecta aceleași echipe");
      animateBubbleBtn('Nu poți selecta aceleași echipe', 'img/err.svg', '#FF8B13', bubbleContainer);
    } else {
      animateBubbleBtn('Meci generat cu succes 👇', 'img/succes.svg', '#5D9C59', bubbleContainer);
      // var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
      // console.log(randomElement);
      var probabilitateTotala = pronos.reduce((acc, curr) => acc + curr.probabilitate, 0);
var numarAleator = Math.random() * probabilitateTotala;
var pronosticAleator;

for (var i = 0; i < pronos.length; i++) {
  if (numarAleator < pronos[i].probabilitate) {
    pronosticAleator = pronos[i].prono;
    break;
  }
  numarAleator -= pronos[i].probabilitate;
}

console.log(pronosticAleator);

      var resultText = "<div class=containerRes__container--L><div class=containerRes__container--L__one>"+ subSelect1Value + "</div><div class=containerRes__container--L__two>"+ subSelect2Value +"</div></div><div class=containerRes__container--R><div id=randomProno class=containerRes__container--R__one>"+ pronosticAleator +"</div> <div class=containerRes__container--R__two><img id=pronoReload src=img/iconreload.svg alt=iconReload></div></div>";
            delIcon.classList.add('showFlex');

var newDiv = document.createElement("div");
newDiv.classList.add('containerRes__container', 'animate__animated', 'animate__fadeIn');
newDiv.innerHTML = resultText;

// Selecționează toate elementele existente care conțin meciuri
const existingDivs = document.querySelectorAll('.containerRes__container--L');

// Parcurge fiecare element existent și verifică dacă conține meciul nou adăugat
for (let i = 0; i < existingDivs.length; i++) {
  const existingMatchup1 = existingDivs[i].querySelector('.containerRes__container--L__one').textContent.trim();
  const existingMatchup2 = existingDivs[i].querySelector('.containerRes__container--L__two').textContent.trim();

  const newMatchup1 = newDiv.querySelector('.containerRes__container--L__one').textContent.trim();
  const newMatchup2 = newDiv.querySelector('.containerRes__container--L__two').textContent.trim();

  if (
    (existingMatchup1 === newMatchup1 && existingMatchup2 === newMatchup2) ||
    (existingMatchup1 === newMatchup2 && existingMatchup2 === newMatchup1)
  ) {
    // alert('Acest meci a fost generat deja');
    animateBubbleBtn('Acest meci a fost generat deja', 'img/avertizare.svg', '#FF8B13', bubbleContainer);
    return;
  }
}

  
      // If there are no existing elements, append the new p element
      containerRes.appendChild(newDiv);


// se adauga un eveniment de click pentru fiecare buton "pronoReload"
var pronoReloadButtons = document.querySelectorAll("#pronoReload");
pronoReloadButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // se gaseste div-ul parinte
    var div = button.closest(".containerRes__container--R"); // inlocuieste ".divClass" cu clasa ta de div
    // se gaseste elementul "randomProno" din div-ul parinte
    var randomPronoElement = div.querySelector(".containerRes__container--R__one"); // inlocuieste ".randomProno" cu clasa ta de element
    // se genereaza un element random din variabila "pronos"
    // var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
    // se seteaza textul elementului "randomProno"
    var probabilitateTotala = pronos.reduce((acc, curr) => acc + curr.probabilitate, 0);
    var numarAleator = Math.random() * probabilitateTotala;
    var pronosticAleator;

for (var i = 0; i < pronos.length; i++) {
  if (numarAleator < pronos[i].probabilitate) {
    pronosticAleator = pronos[i].prono;
    break;
  }
  numarAleator -= pronos[i].probabilitate;
}
    randomPronoElement.innerText = pronosticAleator;
    console.log(pronosticAleator)
  });
});


// se adauga un eveniment de click pentru fiecare buton "pronoReload"
var randomPronoButtons = document.querySelectorAll("#randomProno");
randomPronoButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // se gaseste div-ul parinte
    var div = button.closest(".containerRes__container--R"); // inlocuieste ".divClass" cu clasa ta de div
    // se gaseste elementul "randomProno" din div-ul parinte
    var randomPronoElement = div.querySelector(".containerRes__container--R__one"); // inlocuieste ".randomProno" cu clasa ta de element
    // se genereaza un element random din variabila "pronos"
    // var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
    // se seteaza textul elementului "randomProno"

    var probabilitateTotala = pronos.reduce((acc, curr) => acc + curr.probabilitate, 0);
var numarAleator = Math.random() * probabilitateTotala;
var pronosticAleator;

for (var i = 0; i < pronos.length; i++) {
  if (numarAleator < pronos[i].probabilitate) {
    pronosticAleator = pronos[i].prono;
    break;
  }
  numarAleator -= pronos[i].probabilitate;
}
    randomPronoElement.innerText = pronosticAleator;
  });
});


    }
  }

 
  


  
  
  
  document.getElementById("submitButton").addEventListener("click", validateForm);
  






  // obține elementul delIcon
var delIcon = document.getElementById("delIcon");

// atașează evenimentul de click
delIcon.addEventListener("click", function() {
  animateBubbleBtn('Stergerea s-a realizat cu succes', 'img/deleteIcon.svg', '#5D9C59', bubbleContainer);
  // obține elementul containerRes
  var containerRes = document.getElementById("containerRes");
  // elimină toate div-urile din containerRes
  while (containerRes.firstChild) {
    containerRes.removeChild(containerRes.firstChild);
  }

  this.classList.remove('showFlex');

});


// selectați butonul și containerul de informații
const closeButton = document.querySelector('#closeBtn');
const containerInfo = document.querySelector('#containerInfo-s');
const mainContentInfo = document.querySelector('.leagueSelection');

closeButton.addEventListener('click', function() {
  // adăugați clasele animate__animated și animate__flipOutX la containerInfo
  containerInfo.classList.add('animate__animated', 'animate__fadeOut');

  // așteptați până când animația este completă și apoi eliminați containerInfo din DOM
  containerInfo.addEventListener('animationend', function() {
    containerInfo.remove();

    // adăugați clasele animate__animated și animate__fadeInUp la mainContentInfo
  });
});








  // MENU


  const menuButton = document.getElementById("menu");
  const closeMenuButton = document.getElementById("closeMenu");
  const menuContainer = document.querySelector(".menuContainer");
  const mainContentMenu = document.getElementById("main-content");
  const bubbleBlur = document.querySelector("#bubbleContainer")
  
  menuButton.addEventListener("click", function() {
    menuContainer.classList.add("showMenu", "animate__animated", "animate__fadeInRight");
    mainContentMenu.style.filter = "blur(2px)";
    bubbleBlur.style.filter = "blur(0px)";
    document.addEventListener("click", closeMenu);
  });
  
  closeMenuButton.addEventListener("click", function() {
    mainContentMenu.style.filter = "none";
    menuContainer.classList.add("animate__animated", "animate__fadeOutRight", "animate__fadeInLeft");
    setTimeout(function() {

      menuContainer.classList.remove("showMenu", "animate__animated", "animate__fadeOutRight", "animate__fadeInLeft");
     
    }, 500); // așteaptă 1 secundă înainte de a elimina clasele pentru a permite finalizarea animației de fadeOut

    document.removeEventListener("click", closeMenu);
  });

// Funcția pentru închiderea meniului
function closeMenu(event) {
  // Verifică dacă elementul apăsat este în afara meniului
  if (!menuContainer.contains(event.target) && event.target !== menuButton) {
    menuContainer.classList.add("animate__animated", "animate__fadeOutRight", "animate__fadeInLeft");
    mainContentMenu.style.filter = "none"; // Resetează stilul filter la "none" când meniul este închis
    setTimeout(function() {
      menuContainer.classList.remove("showMenu", "animate__animated", "animate__fadeOutRight", "animate__fadeInLeft");
    
    }, 500); // așteaptă 1 secundă înainte de a elimina clasele pentru a permite finalizarea animației de fadeOut

    // Dezactivează evenimentul de clic pe elementul document atunci când meniul este închis
    document.removeEventListener("click", closeMenu);
  }
}


const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", function() {
  setTimeout(function() {
    window.location.assign("/");
  }, 400); // timpul de întârziere în milisecunde
});




// JavaScript
const dropdownBtn1 = document.querySelector(".dropdown-btn");
const ddArrow = document.querySelector("#rotate");

dropdownBtn1.addEventListener("click", function() {
  this.classList.toggle("active");
  ddArrow.classList.toggle("rotate");
});



const btnG = document.querySelector(".btnG");

btnG.addEventListener("click", () => {
  window.location.href = "/bilete-castigatoare.html";
});



const disBtn = document.querySelector("#dis");

dis.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "/disclaimer.html";
  }, 300); // 500ms = 0.5s
});


document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown-options.show');
  var subdropdown = document.querySelector('.subdropdown-options.show');
  var subdropdown2 = document.querySelector('.subdropdown-options2.show');

  if (dropdown && !dropdown.contains(event.target) && !event.target.matches('.dropdown-btn, .dropdown-btn *')) {
    dropdown.classList.remove('show');
  }

  if (subdropdown && !subdropdown.contains(event.target) && !event.target.matches('#subSelect1, #subSelect1 *')) {
    subdropdown.classList.remove('show');
  }

  if (subdropdown2 && !subdropdown2.contains(event.target) && !event.target.matches('#subSelect2, #subSelect2 *')) {
    subdropdown2.classList.remove('show');
  }
});



