import { ranges } from "./elements.js";
export default function () {
  const florist =
    "https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Floresta.wav?raw=true";
  const rain =
    "https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Chuva.wav?raw=true";
  const shop =
    "https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Cafeteria.wav?raw=true";
  const fire =
    "https://github.com/Alexxcamargo1000/focus-timer/blob/main/audios/Lareira.wav?raw=true";
  const musics = [
    {
      name: "florist",
      path: new Audio(florist),
    },
    {
      name: "rain",
      path: new Audio(rain),
    },
    {
      name: "shop",
      path: new Audio(shop),
    },
    {
      name: "fire",
      path: new Audio(fire),
    },
  ];
  let volume = 0.5;

  function playMusic(buttonMusic) {
    musics.forEach((music) => {
      if (music.name === buttonMusic.className) {
        music.path.loop;
        music.path.play();
      } else {
        music.path.pause();
      }
    });
  }

  function musicVolume(volume, name) {
    musics.map((music) => {
      if (music.name === name) {
        music.path.volume = volume;
      }else {
        music.path.volume = 0;

      }
    });
  }

  function onClickMusic(name) {
    musicVolume(volume, name)
    ranges.forEach((range) => {
      if (range.name === name) {
        range.range.value = 50
      }else {
        range.range.value = 0

      }
    })
  }

  function controlVolume(newVolume) {
    return Number(newVolume) / 100
 }



  return {
    playMusic,
    musicVolume,
    onClickMusic,
    controlVolume
  };
}
