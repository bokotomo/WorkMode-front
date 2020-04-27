import { style as typestyleStyle } from 'typestyle';

export const style = typestyleStyle;

// デザインの統一感を出すものはここから呼び出す
export const color = {
  white: 'white',
  buttonOK: 'linear-gradient(125deg, #66B7FF, #0052de)',
  buttonNO: '#4C6276',
  input: '#2B4D6C',
};

export const hover = {
  button: {
    $nest: {
      '&:hover': {
        opacity: '0.9',
      },
    },
  },
  icon: {
    $nest: {
      '&:hover': {
        opacity: '0.6',
      },
    },
  },
  card: {
    $nest: {
      '&:hover': {
        opacity: '0.85',
      },
    },
  },
};
