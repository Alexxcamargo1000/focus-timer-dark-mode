const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonFlorist = document.querySelector(".florist");
const buttonRain = document.querySelector(".rain");
const buttonShop = document.querySelector(".shop");
const buttonFire = document.querySelector(".fire");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const buttonDark = document.querySelector(".buttonDark");
const buttonLight = document.querySelector(".light");

const ranges = [
  {
    name: 'florist',
    range: document.querySelector(`.florist .range`),
  },
  {
    name: 'rain',
    range: document.querySelector(`.rain .range`),
  },
  {
    name: 'shop',
    range: document.querySelector(`.shop .range`),
  },
  {
    name: 'fire',
    range: document.querySelector(`.fire .range`),
  },
];

const buttonMusicArray = [buttonFlorist, buttonRain, buttonShop, buttonFire];

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonFlorist,
  buttonRain,
  buttonShop,
  buttonFire,
  minutes,
  seconds,
  buttonMusicArray,
  buttonDark,
  buttonLight,
  ranges,
};
