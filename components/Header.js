import React, { useState } from 'react';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import SlidingPanel from 'react-sliding-side-panel';
import 'react-sliding-side-panel/lib/index.css';
import LanguageSwitch from './LanguageSwitch';
import { useLanguageQuery } from 'next-export-i18n';
import Link from './Link';

const Header = ({ menuItems }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [query] = useLanguageQuery();
  const currentLocale = (query && query.lang) || 'sk';

  return (
    <Wrapper>
      <div className="mobile-wrapper">
        <BurgerWrapper onClick={() => setMenuOpened(!menuOpened)}>
          <Bar opened={menuOpened} className={menuOpened ? 'open1' : ''} />
          <Bar opened={menuOpened} className={menuOpened ? 'open2' : ''} />
          <Bar opened={menuOpened} className={menuOpened ? 'open3' : ''} />
        </BurgerWrapper>

        <SlidingPanel
          type={'left'}
          isOpen={menuOpened}
          size={75}
          // backdropClicked={() => setOpenCategories(false)}
          backdropClicked={() => setMenuOpened(false)}
        >
          <MobileMenuWrapper>
            {
              <ul className="menu-items-mobile">
                {menuItems[currentLocale].map((item) => (
                  <li key={item.key} className="menu-item-mobile">
                    <Link href={{ pathname: item.linkTo, query }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            }
            <div className="mobile-lang-switch-wrapper">
              <LanguageSwitch />
            </div>
          </MobileMenuWrapper>
        </SlidingPanel>
      </div>
      <img
        className="logo-image"
        src="/static/images/logo.png"
        alt="questSpace"
        style={{
          width: rem(193),
        }}
      />

      <MenuWrapper>
        <ul className="menu-items">
          {menuItems[currentLocale].map((item) => (
            <li key={item.key} className="menu-item">
              <Link href={{ pathname: item.linkTo, query }}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <LanguageSwitch />
      </MenuWrapper>
    </Wrapper>
  );
};

const MenuWrapper = styled.div`
  display: none;
  align-items: center;

  ${(props) => props.theme.media.m`
    display: flex;
    `};
`;

const MobileMenuWrapper = styled.div`
  background: ${(props) => props.theme.color.footerBackgroundColor};
  width: 100%;
  height: 100%;
  padding-top: ${rem(50)};
`;

const Bar = styled.div`
  width: ${rem(26)};
  height: ${rem(3)};
  background-color: #ffffff;
  margin: ${rem(4)} 0;
  transition: 0.4s;
`;

const BurgerWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  z-index: 10000;
  ${(props) => props.theme.media.m`
   display: none;
    `};

  display: inline-block;
  & > .open1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 4px);
    transform: rotate(-45deg) translate(-4px, 4px);
  }

  & > .open2 {
    opacity: 0;
  }

  & > .open3 {
    -webkit-transform: rotate(45deg) translate(-6px, -6px);
    transform: rotate(45deg) translate(-6px, -6px);
  }
`;

const Wrapper = styled.div`
  padding-top: ${rem(24)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${(props) => props.theme.media.m`
    justify-content: space-between;
    flex-direction: row;
  `};

  .mobile-lang-switch-wrapper {
    margin-top: ${rem(24)};
    margin-left: ${rem(24)};
  }

  .mobile-wrapper {
    display: block;
    ${(props) => props.theme.media.m`
    display: none;
    `};
  }

  .menu-items {
    list-style: none;
    padding-left: 0;
    display: flex;
    margin-right: ${rem(8)};
  }

  .menu-items-mobile {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    margin-right: ${rem(26)};
    font-size: ${rem(16)};
    font-weight: bold;
    text-transform: uppercase;

    :last-of-type {
      margin-right: 0;
    }
  }

  .menu-item-mobile {
    margin-right: ${rem(26)};
    font-size: ${rem(16)};
    font-weight: bold;
    text-transform: uppercase;
    padding: ${rem(12)};
  }
`;

Header.defaultProps = {
  menuItems: {
    sk: [
      // {
      //   key: 1,
      //   label: 'O nás',
      //   linkTo: '#about-us',
      // },
      // {
      //   key: 2,
      //   label: 'DAO',
      //   linkTo: '#dao',
      // },
      // {
      //   key: 3,
      //   label: 'Komunita',
      //   linkTo: '#community',
      // },
    ],
    en: [
      // {
      //   key: 1,
      //   label: 'About us',
      //   linkTo: '#about-us',
      // },
      // {
      //   key: 2,
      //   label: 'DAO',
      //   linkTo: '#dao',
      // },
      // {
      //   key: 3,
      //   label: 'Community',
      //   linkTo: '#community',
      // },
    ],
  },
};

Header.propTypes = {
  menuItems: PropTypes.shape({
    label: PropTypes.string,
    linkTo: PropTypes.string,
  }),
};

export default withTheme(Header);
