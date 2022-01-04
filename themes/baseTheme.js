import { css } from '@emotion/react';
import { rem, rgba } from 'polished';

const sizes = {
  xl: 1600,
  l: 1200,
  m: 1024,
  s: 480,
  xs: 320,
};

const media = {
  xs: (...args) => css`
    @media (min-width: ${sizes.xs}px) {
      ${css(...args)};
    }
  `,
  s: (...args) => css`
    @media (min-width: ${sizes.m}px) {
      ${css(...args)};
    }
  `,
  m: (...args) => css`
    @media (min-width: ${sizes.m}px) {
      ${css(...args)};
    }
  `,
  l: (...args) => css`
    @media (min-width: ${sizes.l}px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (min-width: ${sizes.xl}px) {
      ${css(...args)};
    }
  `,
};

const color = {
  footerBackgroundColor: '#06011c',
  gradientMainColor: 'linear-gradient(90deg, #b22a72 0%, #3756e3 100%)',
  primaryTextColor: '#fff',
  secondaryTextColor: rgba(255, 255, 255, 0.8),
  memberBackground: '#021226',
  avatarBackground: '#c4c4c4',
  danger: '#D31312',
  dangerBackground: 'rgba(240, 104, 104, 0.16)',
};

const font = {
  'font-family': 'frank-new',
};

const containerSize = rem(1200);

const input = {
  background: '#fff',
  placeholderColor: 'rgba(54, 55, 64, 0.56)',
};

const buttons = {
  gradient: {
    default: color.gradientMainColor,
    hover: '#b22a72',
    border: 'none',
    textColor: '#fff',
    iconColor: '#fff',
  },
  primary: {
    default: '#43AD36',
    hover: '#36882b',
    border: 'none',
    textColor: '#fff',
    iconColor: '#fff',
  },
  submit: {
    default: '#43AD36',
    hover: '#36882b',
    border: 'none',
    textColor: '#fff',
    iconColor: '#fff',
  },
  outline: {
    default: 'transparent',
    hover: 'rgba(54, 55, 64, 0.08)',
    border: `${rem(2)} solid rgb(54, 55, 64, 0.08)`,
    textColor: color.primaryTextColor,
    iconColor: color.primaryTextColor,
  },
  gray: {
    default: 'rgba(54, 55, 64, 0.08)',
    hover: '#999999',
    border: 'none',
    textColor: color.primaryTextColor,
    iconColor: color.primaryTextColor,
  },

  'gray-selected': {
    default: color.primaryTextColor,
    border: 'none',
    textColor: '#fff',
    iconColor: '#fff',
  },
};

const theme = {
  color,
  font,
  media,
  buttons,
  containerSize,
  input,
};

export default theme;
