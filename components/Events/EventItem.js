import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';
import { rem } from 'polished';
import { useLanguageQuery } from 'next-export-i18n';

const EventItem = ({ item }) => {
  const [query] = useLanguageQuery();
  
  return (
    <Link href={{ pathname: item.link, query }} passHref>
      <a>
        <Wrapper>
          {item.image && (
            <img className="image" src={item.image} alt={item.title} />
          )}
          <div className="fader">
            <div className="title">{item.title}</div>
            <div className="by">{item.by}</div>
            <div className="text">{item.text}</div>
          </div>
        </Wrapper>
      </a>
    </Link>
  );
};

const Wrapper = styled.div`
  width: ${rem(420)};
  height: ${rem(320)};
  overflow: hidden;
  background: #c4c4c4;
  position: relative;

  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: ${rem(320)};
  }

  .title {
    font-size: ${rem(18)};
    font-weight: bold;
    margin-bottom: ${rem(4)};
  }

  .by {
    display: inline;
    font-size: ${rem(14)};
    font-weight: bold;
    background: linear-gradient(90deg, #b22a72 0%, #3756e3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: ${rem(4)};
  }

  .text {
    font-size: ${rem(14)};
    color: ${(props) => props.theme.color.secondaryTextColor};
  }

  .fader {
    width: 100%;
    padding: ${rem(12)};
    height: ${rem(200)};
    background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(0, 9, 28, 1)
    );
    position: absolute;
    bottom: 0;
    left: 0;

    :hover {
      cursor: pointer;

      .title {
        text-decoration: underline;
      }

      .text {
        text-decoration: underline;
      }
    }
  }
`;

EventItem.defaultProps = {};

EventItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    by: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default EventItem;
