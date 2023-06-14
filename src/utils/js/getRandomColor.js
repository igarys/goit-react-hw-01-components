
export const getRandomHslColor = () => {
  
  const getRandomNumber = (min, max) =>
    Math.round(Math.random() * (max - min) + min);
  
  
  const { hue, saturation, lightness } = {
    hue: getRandomNumber(200, 210),
    saturation: getRandomNumber(70, 90),
    lightness: getRandomNumber(65, 85),
  };
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };