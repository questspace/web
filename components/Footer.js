import React from 'react';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import SocialItem from './SocialItem';
import useWindowSize from '../utils/windowSize';
import useTranslation from 'next-translate/useTranslation';
import LinkButton from './LinkButton';

const Footer = ({ socials }) => {
  const { t } = useTranslation('common');
  const size = useWindowSize();

  return (
    <MainWrapper>
      <img
        src="/static/images/globe.png"
        style={{
          width: rem(size.width),
          zIndex: 10,
        }}
      />
      <Wrapper>
        <div className="inner-wrapper">
          <div className="top-part">
            <div>
              <img
                className="logo-image"
                src="/static/images/logo.png"
                alt="questSpace"
              />
            </div>

            <div className="button-wrapper">
              <LinkButton to={'/'} type="gradient">
                {t('get started')}
              </LinkButton>
            </div>
          </div>

          <div className="bottom-part">
            <div className="copyright">{t('copyright')}</div>
            <div className="social-links">
              {socials.map((s, index) => (
                <div
                  key={`${index} - ${s.link}`}
                  className="social-link-wrapper"
                >
                  <SocialItem link={s.link} name={s.name} icon={s.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  margin-top: -100px;
  z-index: 2;

  ${(props) => props.theme.media.m`
    margin-top: -500px;
    `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${(props) => props.theme.color.footerBackgroundColor};
  z-index: 10;

  .button-wrapper {
    display: none;
    ${(props) => props.theme.media.m`
    display: flex;
    `}
  }

  .inner-wrapper {
    width: 100%;
    max-width: ${(props) => props.theme.containerSize};
    padding: ${rem(64)} ${rem(24)} ${rem(64)} ${rem(24)};
  }

  .top-part,
  .bottom-part {
    display: flex;
    justify-content: space-between;
  }

  .top-part {
    border-bottom: ${rem(2)} solid rgba(255, 255, 255, 0.3);
    padding-bottom: ${rem(32)};
  }

  .bottom-part {
    margin-top: ${rem(24)};

    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(props) => props.theme.media.m`
     justify-content: space-between;
     flex-direction: row;
    `};
  }

  .copyright {
    font-size: ${rem(12)};
    font-weight: bold;
    order: 2;
    text-align: center;
    ${(props) => props.theme.media.m`
      font-size: ${rem(14)};
    `};
    text-align: inherit;
    ${(props) => props.theme.media.m`
     font-size: ${rem(21)};
     order: 1;
     text-align: inherit;
    `};
  }

  .social-links {
    display: flex;
    margin-bottom: ${rem(24)};
    order: 1;
    ${(props) => props.theme.media.m`
     order: 2;
     margin-bottom: 0;
    `};
  }

  .social-link-wrapper {
    margin-right: ${rem(10)};

    :last-of-type {
      margin-right: 0;
    }
  }
`;

Footer.defaultProps = {
  socials: [
    {
      link: 'https://www.facebook.com/',
      name: 'Facebook',
      icon: 'facebook-f',
    },
    {
      link: 'https://www.instagram.com/',
      name: 'Instagram',
      icon: 'instagram',
    },
    {
      link: 'https://www.linkedin.com/',
      name: 'LinkedIn',
      icon: 'linkedin-in',
    },
    {
      link: 'https://twitter.com/',
      name: 'Twitter',
      icon: 'twitter',
    },
  ],
};

Footer.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default withTheme(Footer);
