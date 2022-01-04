import React from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Header from './Header';
import styled from '@emotion/styled';
import { rem } from 'polished';
import useWindowSize from '../utils/windowSize';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  max-width: ${(props) => props.theme.containerSize};
  padding: ${rem(12)};
  width: 100%;
  ${(props) => props.theme.media.l`
    padding: ${rem(24)};
  `};
  z-index: 10;
`;

const BackgroundImage = styled.img`
  width: ${(props) => rem(props.width)};
  position: absolute;
  z-index: 1;
`;

const Layout = ({ children }) => {
  const size = useWindowSize();
  return (
    <>
      <Wrapper>
        <BackgroundImage
          width={size.width}
          src={`static/images/${
            size.width > 1000 ? 'background2.png' : 'background_clear.png'
          }`}
        />
        <InnerWrapper>
          <Meta title={'QuestSpace Hackerspace & Co-working'} />
          <Header />
          <main>{children}</main>
        </InnerWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
