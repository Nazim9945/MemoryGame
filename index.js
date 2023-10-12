const grid = document.querySelector(".grid");
const result = document.querySelector(".result");

const cardsArray = [
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hot-dog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hot-dog",
    img: "images/hotdog.png",
  },
  {
    name: "icecream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
];
let matchArray = [];
let setid = [];
let count = [];
cardsArray.sort(() => 0.5 - Math.random());

function cardestablishing() {
  for (let i = 0; i < cardsArray.length; i++) {
    const imgcard = document.createElement("img");
    imgcard.setAttribute("id", i);
    imgcard.setAttribute("src", "images/blank.png");
    imgcard.addEventListener("click", flipcard);
    grid.append(imgcard);
    // console.log(imgcard);
  }
}
function checkformatch() {
  const cardsimg = document.querySelectorAll("img");

  if (setid[0] == setid[1]) {
    alert("you clicked on the same card");
    cardsimg[setid[0]].setAttribute("src", "images/blank.png");
  }

  else if (matchArray[0] === matchArray[1]) {
    cardsimg[setid[0]].setAttribute("src", "images/white.png");
    cardsimg[setid[1]].setAttribute("src", "images/white.png");
    cardsimg[setid[0]].removeEventListener("click", flipcard);
    cardsimg[setid[1]].removeEventListener("click", flipcard);
    count.push(setid);
    result.textContent = count.length;
    if (count.length == cardsArray.length / 2) {
      result.textContent = "congrats..you found all the matches!!";
    }
  } else {
    cardsimg[setid[0]].setAttribute("src", "images/blank.png");
    cardsimg[setid[1]].setAttribute("src", "images/blank.png");
  }
  matchArray = [];
  setid = [];
}
function flipcard() {
  //(****learn abt this..in depth*****)
  // here it is an object of  a card which you clicked upon!!
  let cardId = this.getAttribute("id");

  this.setAttribute("src", cardsArray[cardId].img);
  matchArray.push(cardsArray[cardId].name);
  setid.push(cardId);

  if (matchArray.length === 2) {
    setTimeout(checkformatch, 500);
  }
}

cardestablishing();
