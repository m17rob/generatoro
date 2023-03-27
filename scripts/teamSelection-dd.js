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
      "img": "img/premierLeagueIcon.png",
      "suboptiuni": {
        "Man. United": "img/manunited.png",
        "Arsenal": "img/arsenal.png",
        "Aston Villa": "img/arsenal.png",
        "Brentford": "img/arsenal.png",
        "Brighton": "img/arsenal.png",
        "Chelsea": "img/arsenal.png",
        "Crystal Pal.": "img/arsenal.png",
        "Everton": "img/arsenal.png",
        "Leeds": "img/arsenal.png",
        "Leicester": "img/arsenal.png",
        "Liverpool": "img/arsenal.png",
        "Man. City": "img/arsenal.png",
        "Newcastle": "img/arsenal.png",
        "Norwich": "img/arsenal.png",
        "Southampton": "img/arsenal.png",
        "Tottenham": "img/arsenal.png",
        "Watford": "img/arsenal.png",
        "West Ham": "img/arsenal.png",
        "Wolverhampton": "img/arsenal.png"
      }
    },
    "LaLiga": {
      "img": "img/premierLeagueIcon.png",
      "suboptiuni": {
        "Real Madrid": "img/premierLeagueIcon.png",
        "Sevilla": "img/premierLeagueIcon.png"
      }
    },
    "Ligue One": {
      "img": "img/premierLeagueIcon.png",
      "suboptiuni": {
        "PSG": "img/premierLeagueIcon.png",
        "Lyon": "img/premierLeagueIcon.png"
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
dropdownBtn.innerHTML = `Alege un campionat<img src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow"> `;
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
    dropdownBtn.innerHTML = `<div class="pOne"><img src="${dict[option].img}" alt="${option}" class="dropdown-option-img"> ${option}</div><img src="img/dropdown-arrow.svg" alt="dropdown arrow" class="ddarrow">`;
    dropdownOptions.classList.remove("show");
    subBtn.classList.add('show');
    subVS.classList.add('show');
    tag.classList.add('show');
    // aici adăugăm codul pentru a crea subdropdown-ul
    const subdropdown = document.getElementById("subdropdown");
    subdropdown.innerHTML = "";
    const subdropdownBtn = document.createElement("button");
    subdropdownBtn.classList.add("dropdown-btn");
    subdropdownBtn.setAttribute('id', 'subSelect1');
    subdropdownBtn.innerHTML = '<div id="justCont"><div class="teamTxt">Alege echipa</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> ';
    // subdropdownBtn.innerHTML = '<div id="justCont"><img src="${dict[option].suboptiuni[selectedSuboption]}" alt="${selectedSuboption}" class="dropdown-option-img"> ${selectedSuboption}</div> ';
    subdropdown.appendChild(subdropdownBtn);
    const subdropdownOptions = document.createElement("div");
    subdropdownOptions.classList.add("subdropdown-options");
    subdropdown.appendChild(subdropdownOptions);
    for (const suboption in dict[option].suboptiuni) {
      const suboptionImg = dict[option].suboptiuni[suboption];
      const suboptionHTML = `<div class="dropdown-option" data-suboption="${suboption}"><div class="w20 ml10"><img src="${suboptionImg}" alt="${suboption}" class="dropdown-option-img"> </div> ${suboption} </div>`;
      subdropdownOptions.insertAdjacentHTML("beforeend", suboptionHTML);
     
    }
    // adăugăm evenimentul click pentru butonul subdropdown-ului
    subdropdownBtn.addEventListener("click", () => {
      subdropdownOptions.classList.toggle("show");
    });

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
});

var pronos = ["po1", "po2", "po3", "px1", "px3", "px4", "pf1", "pf2", "pl1", "pl2"];

function validateForm() {
    const subSelect1 = document.getElementById("subSelect1");
    const subSelect2 = document.getElementById("subSelect2");
    // const img1 = subSelect1.querySelector("img");
    // const img2 = subSelect2.querySelector("img");
    const delIcon = document.getElementById('delIcon');
    var subSelect1Value = subSelect1.innerHTML;
    var subSelect2Value = subSelect2.innerHTML;
  
    if (subSelect1.querySelector('div[class="teamTxt"]') || subSelect2.querySelector('div[class="teamTxt"]')) {
      // alert("Selectează echipele");

      animateBubbleBtn('Selecteaza echipele', 'img/avertizare.svg', '#FF8B13', bubbleContainer);
    } else if (subSelect1.innerText === subSelect2.innerText) {
      // alert("Nu poți selecta aceleași echipe");
      animateBubbleBtn('Nu poți selecta aceleași echipe', 'img/err.svg', '#FF8B13', bubbleContainer);
    } else {
      animateBubbleBtn('Meci generat cu succes ', 'img/succes.svg', '#5D9C59', bubbleContainer);
      // var resultText = "Au fost selectate: " + subSelect1Value + " si " + subSelect2Value;
      var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
      console.log(randomElement);
      var resultText = "<div class=containerRes__container--L><div class=containerRes__container--L__one>"+ subSelect1Value + "</div><div class=containerRes__container--L__two>"+ subSelect2Value +"</div></div><div class=containerRes__container--R><div id=randomProno class=containerRes__container--R__one>"+ randomElement +"</div> <div class=containerRes__container--R__two><img id=pronoReload src=img/iconreload.svg alt=iconReload></div></div>";
            delIcon.classList.add('showFlex');

var newDiv = document.createElement("div");
newDiv.classList.add('containerRes__container');
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
    var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
    // se seteaza textul elementului "randomProno"
    randomPronoElement.innerText = randomElement;
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
    var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
    // se seteaza textul elementului "randomProno"
    randomPronoElement.innerText = randomElement;
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
  
  menuButton.addEventListener("click", function() {
    menuContainer.classList.add("showMenu", "animate__animated", "animate__fadeInRight");
    mainContentMenu.style.filter = "blur(2px)";

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

