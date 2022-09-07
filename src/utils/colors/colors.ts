import colors from './colors.json';

const GetColor = (color: string) : string => {
  try {
    return colors[color].color;
  } catch (error) {
    return "#c4c4c4"
  }
}

export default GetColor;