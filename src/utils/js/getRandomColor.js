export const getRandomHslColor = () => {
 
  const getRandomNumber = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  
  const { hue, saturation, lightness } = {
    hue: getRandomNumber(210, 230),
    saturation: getRandomNumber(70, 90),
    lightness: getRandomNumber(50, 85),
  };
  // Return the string with hsl prefix
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
	