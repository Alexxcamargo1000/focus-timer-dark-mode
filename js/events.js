import {
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
  buttonDark,
  buttonLight,
  ranges,
} from "./elements.js";

export default function ({ timer, control, sons }) {
  let newMinutes = Number(minutes.textContent);
  let newSeconds = Number(seconds.textContent);

  

  control.disabledButton(buttonStop);

  buttonPlay.addEventListener("click", () => {
    control.play();
    timer.countdown();
  });

  buttonStop.addEventListener("click", () => {
    control.stop();
    timer.updateTimer(newMinutes, newSeconds);
    timer.hold();
  });

  buttonPlus.addEventListener("click", () => {
    newMinutes = newMinutes + 5;
    timer.updateTimer(newMinutes, newSeconds);
    control.activeButton(buttonMinus);
  });

  buttonMinus.addEventListener("click", () => {
    if (newMinutes >= 5) {
      newMinutes = newMinutes - 5;
      control.activeButton(buttonPlus);
      timer.updateTimer(newMinutes, newSeconds);
    } else {
      control.disabledButton(buttonMinus);
    }
  });

  // ===================Button Sons =========================== //
  buttonFlorist.addEventListener("click", () => {
    sons.onClickMusic('florist');
    sons.playMusic(buttonFlorist);
    control.activeButtonMusic(buttonFlorist);
    
  });

  buttonRain.addEventListener("click", () => {
    sons.onClickMusic('rain');
    sons.playMusic(buttonRain);
    control.activeButtonMusic(buttonRain);
  });

  buttonShop.addEventListener("click", () => {
    sons.onClickMusic('shop');
    sons.playMusic(buttonShop);
    control.activeButtonMusic(buttonShop);
  });

  buttonFire.addEventListener("click", () => {
    sons.onClickMusic('fire');
    sons.playMusic(buttonFire);
    control.activeButtonMusic(buttonFire);
  });

  // ===================Button Dark / light =========================== //
  buttonDark.addEventListener("click", () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    buttonDark.classList.add("hide");
    buttonLight.classList.remove("hide");
  });

  buttonLight.addEventListener("click", () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    buttonLight.classList.add("hide");
    buttonDark.classList.remove("hide");
  });

  // ===================Range ====================================

  ranges.map( inputRange => {
    inputRange.range.addEventListener("change", () => {
      let volume = sons.controlVolume(inputRange.range.value);
      sons.musicVolume(volume, inputRange.name)
    })
  })
  sons.musicVolume(0)


  
}
