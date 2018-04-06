import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [36, 48, 62, 90].map(emToPx);
export const containerWidth = [36, 46, 54].map(emToPx);

const font = 'Arial, "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const beige = '#f3eee8';
const gray = '#d1ccc7';
const darkGray = '#9b9a98';

export default merge(constants, {
  colors: {
    beige,
    gray,
    darkGray,
    background: beige,
    bg: beige,
  },
  breakpoints,
  containerWidth,
  font,
});
