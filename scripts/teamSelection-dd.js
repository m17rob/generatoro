var dict = {
    "Premier League": {
      "img": "img/premierLeagueIcon.png",
      "suboptiuni": {
        "Man. United": "img/premierLeagueIcon.png",
        "Arsenal": "img/premierLeagueIcon.png"
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
      const suboptionHTML = `<div class="dropdown-option" data-suboption="${suboption}"><img src="${suboptionImg}" alt="${suboption}" class="dropdown-option-img"> ${suboption} </div>`;
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
        subdropdownBtn.innerHTML = `<div id="justCont"><div class="pOne"><img src="${dict[option].suboptiuni[selectedSuboption]}" alt="${selectedSuboption}" class="dropdown-option-img"> ${selectedSuboption}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;

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
                           <img src="${suboptionImg2}" alt="${suboption2}" class="dropdown-option-img"> 
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
    subdropdownBtn2.innerHTML = `<div id="justCont"><div class="pOne"><img src="${dict[option].suboptiuni[selectedSuboption2]}" alt="${selectedSuboption2}" class="dropdown-option-img"> ${selectedSuboption2}</div><div class="teamArrow"><img src="img/teams-arrow.svg" alt="team arrow"></div></div> `;
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
      alert("Selectează echipele");
    } else if (subSelect1.innerText === subSelect2.innerText) {
      alert("Nu poți selecta aceleași echipe");
    } else {
      // var resultText = "Au fost selectate: " + subSelect1Value + " si " + subSelect2Value;
      var randomElement = pronos[Math.floor(Math.random() * pronos.length)];
      console.log(randomElement);
      var resultText = "<div class=containerRes__container--L><div class=containerRes__container--L__one>"+ subSelect1Value + "</div><div class=containerRes__container--L__two>"+ subSelect2Value +"</div></div><div class=containerRes__container--R><div id=randomProno class=containerRes__container--R__one>"+ randomElement +"</div> <div class=containerRes__container--R__two><img id=pronoReload src=img/iconreload.svg alt=iconReload></div></div>";
            delIcon.classList.add('showFlex');

var newDiv = document.createElement("div");
newDiv.classList.add('containerRes__container');
newDiv.innerHTML = resultText;

// selectați toate div-urile existente în containerul "containerRes"
var existingDivs = document.querySelectorAll('#containerRes .containerRes__container');

// verificați dacă există deja un div cu aceeași valoare a elementului "containerRes__container--L__one"
for (var i = 0; i < existingDivs.length; i++) {
  if (existingDivs[i].querySelector('.containerRes__container--L__one').textContent === newDiv.querySelector('.containerRes__container--L__one').textContent) {
    alert('Acest meci a fost generat deja');
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
  // obține elementul containerRes
  var containerRes = document.getElementById("containerRes");
  // elimină toate div-urile din containerRes
  while (containerRes.firstChild) {
    containerRes.removeChild(containerRes.firstChild);
  }
  this.classList.remove('showFlex');
});





  