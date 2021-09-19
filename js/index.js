'use strict';

const PALETTE = [
  { "horz": "LucheonH",
    "horzAlt": "Lucheon Palette Horizontal",
    "full": "LucheonP",
    "fullAlt": "Lucheon Palette",
  },

  { "horz": "LangloisH",
    "horzAlt": "Langlois Palette Horizontal",
    "full": "LangloisP",
    "fullAlt": "Langlois Palette",
  },

  { "horz": "HAH",
    "horzAlt": "HenryAsencio Palette Horizontal",
    "full": "HAP",
    "fullAlt": "HenryAsencio Palette",
  },

  { "horz": "TasteH",
    "horzAlt": "Taste Palette Horizontal",
    "full": "TasteP",
    "fullAlt": "Taste Palette",
  },

  { "horz": "ElegantH",
    "horzAlt": "Elegant Palette Horizontal",
    "full": "ElegantP",
    "fullAlt": "Elegant Palette",
  },

  { "horz": "HorrorH",
    "horzAlt": "Horror Palette Horizontal",
    "full": "HorrorP",
    "fullAlt": "Horror Palette",
  },
]

const  PAINTING = [
  { "painting": "LuncheonOnTheGrass",
    "alt": "Luncheon On The Grass",
    "link": "https://www.claude-monet.com/luncheon-on-the-grass.jsp",
    "title": "Claude Monet - Luncheon On The Grass",
    "text": "The Luncheon on the Grass by Edouard Manet was a monumental impressionist works that broke away from the classical view that art should obey established conventions and seek to achieve timelessness. Manet's work was exhibited at the Salon des Refuses in 1863 and caused outrage with its scandalous subject of a naked woman lunching with two clothed men. Two years later Monet decided to paint his own version of Luncheon on the Grass.",
    "type": "classic",
  },

  { "painting": "TheLangloisBridgeAtArles",
    "alt": "The Langlois Bridge At Arles",
    "link": "https://www.vincentvangogh.org/langlois-bridge-at-arles.jsp",
    "title": "Vincent van Gogh - The Langlois Bridge At Arles",
    "text": "In February 1888, Van Gogh headed for the south of France, to Arles, a rural, agricultural town nestled between the River Rhone and the wild countryside of the Camargue. He arrived armed with romantic preconceptions: to him the south was an unpolluted haven, a place of pure, clear colors and translucent light - it was to him the Japan of France, landscape scenes such as this, and paintings of trees and blossoms dominated his work as he immersed himself in the countryside, ignoring the ancient, buildings and more popular tourist sites in the town. His palette had brightened and become bolder, and increasingly he drew on the influence of Japanese woodcuts, which can clearly be seen here. He painted a number of pictures of the little wooden drawbridge outside Arles, which ironically was very Dutch in design.",
    "type": "classic",
  },

  { "painting": "HenryAsencio",
    "alt": "Henry Asencio's Artwork",
    "link": "http://asenciostudio.com",
    "title": "Henry Asencio - Artwork",
    "text": "Asencio is inspired by feminine beauty, life, experience, and nature. Abstraction of subconscious thought and reality entwine to tell the artist’s story. Freedom from responsibility and protection from the negative forces that can hold one captive became escapism for the artist and the viewers. It is the ultimate intention in his evocative work of art. Asencio’s art has been described as “Abstract Naturalism” and his work is strongly inﬂuenced by Lucien Freud, Willem de Kooning, Pablo Picasso, and Gustav Klimt.",
    "type": "modern",
  },

  { "painting": "Taste",
    "alt": "Taste",
    "link": "http://blog.sina.com.cn/aikebeer",
    "title": "Aikebaer - Taste",
    "text": "Aikebaer believes that our core philosophy about art is simple, but powerful. We live in a wide variety of cultures and societies. Our values are also different and, sadly, they are often in conflict with one another. Art is one of the few achievements of mankind that is generally and widely accepted and appreciated. Art is universal, powerful, and makes us more human. Instead of dividing, art, at its best, brings us together in enjoyment and understanding. Art is the universal language.",
    "type": "modern",
  },

  { "painting": "Elegant",
    "alt": "Elegant",
    "link": "https://rellaorz.lofter.com/post/12530e_12af9ccd",
    "title": "Rella - Elegant",
    "text": "Rella published this work on 2018/04/24, and this work exhibited in the AKIBA_SQUARE during 2018/04/28 to 2018/05/06 in Akihabara.",
    "type": "anime",
  },

  { "painting": "Horror",
    "alt": "Horror",
    "link": "https://harry-miao.lofter.com/post/2be455_1cb011fa6",
    "title": "Harrymiao - Horror",
    "text": "Harrymiao published this work on 2020/12/06. The boy stands in the middle of the work is the original character created by the author.",
    "type": "anime",
  }
]

const STATE = {
  currentPalette: PALETTE,
  paletteDescription: [],

  currentPainting: PAINTING,

  displayClassic: false,
  displayModern: false,
  displayAnime: false,

  displayFullPalette: false,
}

/* For the Palette Section*/
function renderPaletteHorz(paletteObj) {
  let paletteHorz = document.createElement("img");

  paletteHorz.src = "./img/"+ paletteObj.horz + ".png";

  paletteHorz.alt = paletteObj.horzAlt;
  
  paletteHorz.classList.add("cp-palette-h");

  return paletteHorz;
}

function renderPaletteFull(paletteObj) {
  let paletteFull = document.createElement("img");

  paletteFull.src = "./img/"+ paletteObj.full + ".jpg";

  paletteFull.alt = paletteObj.fullAlt;
  
  paletteFull.classList.add("cp-palette");

  return paletteFull;
}

function renderPaletteDescription(paletteObj) {
  let paletteDes = document.createElement("p");
  paletteDes.textContent = paletteObj.description;

  let linkElem = document.createElement("a");
  linkElem.textContent = "Check out here!";
  linkElem.href = paletteObj.link;

  let comb = document.createElement("div");
  comb.appendChild(paletteDes);
  comb.appendChild(linkElem);

  return comb;
}




function rederPaletterDeck(stateObj) {
  let paletteHorzElemArray = stateObj.currentPalette
    .map((paletteObj) => renderPaletteHorz(paletteObj))

  let paletteFullElemArray = stateObj.currentPalette
    .map((paletteObj) => renderPaletteFull(paletteObj))

  fetch('data/palette.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      stateObj.paletteDescription = data;
      console.log(stateObj.paletteDescription);
    })
  
  let paletteFullDescription = stateObj.paletteDescription
    .map((paletteObj) => renderPaletteDescription(paletteObj))

  let paletteSection = document.querySelector(".palette-section");
  paletteSection.innerHTML = '';
  for (let i = 0; i<paletteHorzElemArray.length; i++) {
    let divParent = document.createElement("div");
    divParent.classList.add("col-12", "col-xl-6");
  
    let divCard = document.createElement("div");
    divCard.classList.add("card", "card-no-shadow", "card"+i);
  
    let divRow = document.createElement("div");
    divRow.classList.add("cp-row");
  
    let pCard = document.createElement("p");
    
    paletteHorzElemArray[i].id = "palette"+i;

    divRow.appendChild(paletteHorzElemArray[i]);
    if (stateObj.displayFullPalette == true) {
      divRow.appendChild(paletteFullElemArray[i]);
      divRow.appendChild(paletteFullDescription[i]);
    }
    
    /*
    divButton.appendChild(displayFullButton);
    */
    divRow.appendChild(pCard);
    divCard.appendChild(divRow);
    /*
    divCard.appendChild(divButton);
    */
    divParent.appendChild(divCard);
    paletteSection.appendChild(divParent);
  }
}

/*
For the Painting section
*/
function renderPainting(paintingObj) {
  let paintImg = document.createElement("img");

  paintImg.src = "./img/"+ paintingObj.painting + ".jpg";
  paintImg.alt = paintingObj.alt;
  paintImg.classList.add("card-img-top");
  
  return paintImg;
}

function renderTitle(paintingObj) {
  let linkElem = document.createElement("a");

  linkElem.textContent = paintingObj.title;
  linkElem.href = paintingObj.link;
  
  return linkElem;
}

function renderParagraph(paintingObj) {
  let pElem = document.createElement("p");

  pElem.textContent = paintingObj.text;
  pElem.classList.add("card-text");

  return pElem;
}

function renderpaintingDeck(stateObj) {
  let paintingToShow = stateObj.currentPainting;

  if (stateObj.displayClassic && stateObj.displayModern && stateObj.displayAnime) {
    paintingToShow = stateObj.currentPainting;
  } else if (stateObj.displayClassic && stateObj.displayModern) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "classic" || paintingObj.type == "modern";
    })
  } else if (stateObj.displayModern && stateObj.displayAnime) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "modern" || paintingObj.type == "anime";
    })
  } else if (stateObj.displayClassic && stateObj.displayAnime) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "classic" || paintingObj.type == "anime";
    })
  } else if (stateObj.displayClassic) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "classic";
    })
  } else if (stateObj.displayModern) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "modern";
    })
  } else if (stateObj.displayAnime) {
    paintingToShow = paintingToShow.filter(function(paintingObj) {
      return paintingObj.type == "anime";
    })
  } else {
    paintingToShow = stateObj.currentPainting;
  }


  let paintingElemArray = paintingToShow
    .map((paintingObj) => renderPainting(paintingObj))
  let titleElemArray = paintingToShow
    .map((paintingObj) => renderTitle(paintingObj))
  let pElemArray = paintingToShow
    .map((paintingObj) => renderParagraph(paintingObj))
  
  let paintingSection = document.querySelector(".painting-section");

  paintingSection.innerHTML = '';

  for (let i = 0; i<paintingElemArray.length; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("col-12", "col-xl-6");

    let divCard = document.createElement("div");
    divCard.classList.add("card", "card-no-shadow");
    
    let divBody = document.createElement("div");
    divBody.classList.add("card-body");

    let headerElem = document.createElement("h3");
    headerElem.classList.add("card-title");

    headerElem.appendChild(titleElemArray[i]);

    divBody.appendChild(paintingElemArray[i]);
    divBody.appendChild(headerElem);
    divBody.appendChild(pElemArray[i]);
    
    divCard.appendChild(divBody);
    divCol.appendChild(divCard);
    paintingSection.appendChild(divCol);
  }
}

/*
Section that calls previous functions
*/
rederPaletterDeck(STATE);
renderpaintingDeck(STATE);
const checkbox1 = document.querySelector("#choice1");
checkbox1.addEventListener('change', function(){
  STATE.displayClassic = checkbox1.checked

  renderpaintingDeck(STATE);
})

const checkbox2 = document.querySelector("#choice2");
checkbox2.addEventListener('change', function(){
  STATE.displayModern = checkbox2.checked

  renderpaintingDeck(STATE);
})

const checkbox3 = document.querySelector("#choice3");
checkbox3.addEventListener('change', function(){
  STATE.displayAnime = checkbox3.checked

  renderpaintingDeck(STATE);
})

const settingButton = document.querySelector(".setting-button");
settingButton.addEventListener('click', function(){
  document.querySelector("#choice1").checked = false;
  document.querySelector("#choice2").checked = false;
  document.querySelector("#choice3").checked = false;

  STATE.displayClassic = false;
  STATE.displayModern = false;
  STATE.displayAnime = false;

  renderpaintingDeck(STATE);
})

let detailButton = document.querySelector(".detail-button")
detailButton.addEventListener("click", function(){
  STATE.displayFullPalette = true;
  rederPaletterDeck(STATE);
  let checkMessage = document.querySelector(".check-success");
  checkMessage.classList.remove('d-none');
  detailButton.classList.add('d-none');
})


/*
Response for submit advise/more photo
*/
let form = document.querySelector('#contactForm');
let submit = document.querySelector(".form-button");
let alert = document.querySelector('.submit-success');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(form.checkValidity()) {
    form.classList.add('d-none');
    alert.classList.remove('d-none');
  } else {
    form.classList.add('was-validated');
    submit.disabled = true;
  }
});

let inputs = document.querySelectorAll('.input-check');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    if(form.classList.contains('was-validated')) {
      submit.disabled = true;
    } else {
      submit.disabled = false;
    }
  });
});

let goBackButton = document.querySelector('.go-back-button');

goBackButton.addEventListener('click', function() {
  form.classList.remove('d-none');
  alert.classList.add('d-none');
});
