import { useState } from "react";
import useBooleanToggle from "./useBooleanToggle";

export const useBackGroundColor = () => {
  const [randomColor, setRandomColor] = useState<string>("");
  const [colorPlatte, toggleColorPlatte] = useBooleanToggle(false);

  const randomRGB = () => {
    const rColor = Math.floor(Math.random() * 256);
    const gColor = Math.floor(Math.random() * 256);
    const bColor = Math.floor(Math.random() * 256);

    return `rgb(${rColor},${gColor},${bColor})`;
  };

  const randomGradient = () => {
    const color1 = randomRGB();
    const color2 = randomRGB();
    return `linear-gradient(${color1}, ${color2})`;
  };

  // const onPlattePopup = () => {

  // }

  const changeColor = {
    onChangeColor: () => {
      const newColor = randomRGB();
      setRandomColor(newColor);
    },
    onChangeGradient: () => {
      const newColors = randomGradient();
      setRandomColor(newColors);
    },

    getRandomColor: () => randomColor,
    setRandomColor,
    randomColor,
  };
  return {
    changeColor,
    colorPlatte,
    toggleColorPlatte,
  };
};
