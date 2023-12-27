import { useState } from "react";

export const useBackGroundColor = () => {
  const [randomColor, setRandomColor] = useState<string>("");
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

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

  const onChangeColor = () => {
    const newColor = randomRGB();
    setRandomColor(newColor);
  };

  const onChangeGradient = () => {
    const newColors = randomGradient();
    setRandomColor(newColors);
  };

  const getRandomColor = () => {
    return randomColor;
  };
  return {
    onChangeColor,
    getRandomColor,
    onChangeGradient,
    displayColorPicker,
    randomColor,
    setRandomColor,
  };
};
