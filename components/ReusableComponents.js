import styled from '@emotion/styled';
import { rem } from 'polished';

export const H1Title = styled.h1`
  font-size: ${rem(47)};
  color: ${(props) => props.theme.color.primaryTextColor};
  font-weight: bold;
  margin-bottom: ${rem(4)};

  ${(props) => props.theme.media.m`
  font-size: ${rem(67)};
    `};
`;

export const H1SubTitle = styled.h1`
  font-size: ${rem(37)};
  font-weight: bold;
  background: ${(props) => props.theme.color.gradientMainColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: ${rem(4)};
  margin-bottom: ${rem(24)};

  ${(props) => props.theme.media.m`
 font-size: ${rem(67)};
    `};
`;

export const H2Title = styled.h2`
  font-size: ${rem(27)};
  color: ${(props) => props.theme.color.primaryTextColor};
  font-weight: bold;
  margin-bottom: ${rem(6)};
  text-transform: uppercase;

  ${(props) => props.theme.media.m`
 font-size: ${rem(37)};
    `};
`;

export const H2SubTitle = styled.h2`
  font-size: ${rem(22)};
  background: ${(props) => props.theme.color.gradientMainColor};
  -webkit-background-clip: text;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  margin-bottom: ${rem(32)};
  margin-top: ${rem(4)};
  margin-bottom: ${rem(40)};

  ${(props) => props.theme.media.m`
 font-size: ${rem(30)};
    `};
`;

export const TitlePerex = styled.div`
  margin-bottom: ${rem(32)};
  font-size: ${rem(20)};
  max-width: ${rem(700)};
  color: ${(props) => props.theme.color.secondaryTextColor};
  line-height: ${rem(32)};
  text-align: ${(props) => (props.centered ? 'center' : props.align)};
  ${(props) => props.theme.media.m`
    text-align: inherit;
    `};
`;

export const CenteredTitlePerex = styled(TitlePerex)`
  text-align: center;
  font-size: ${rem(20)};
`;
