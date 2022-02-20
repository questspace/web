import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import EventItem from './EventItem';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { rem } from 'polished';
import { useLanguageQuery } from 'next-export-i18n';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const Events = ({ items }) => {
  const [query] = useLanguageQuery();
  const currentLocale = query && query.lang || "sk"

  return (
    <div style={{ width: '100%' }}>
      <Wrapper>
        <Carousel partialVisible responsive={responsive} infinite>
          {items[currentLocale].map((item, index) => (
            <EventItem key={`${index} - ${item.link}`} item={item} />
          ))}
        </Carousel>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: ${rem(900)};

  .react-multi-carousel-item--active {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-multiple-carousel__arrow--right {
    background: ${(props) => props.theme.color.gradientMainColor};
  }

  .react-multiple-carousel__arrow--left {
    background: ${(props) => props.theme.color.gradientMainColor};
  }
`;

Events.defaultProps = {
  items: {
    sk: [],
    en: [],
  },
};

Events.propTypes = {
  items: PropTypes.shape({
    sk: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        by: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
    cz: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        by: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
  }),
};

export default Events;
