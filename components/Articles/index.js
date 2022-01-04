import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ArticleItem from './ArticleItem';

const Articles = ({ items, id }) => {
  return (
    <Wrapper id={id}>
      {items.map((item, index) => (
        <ArticleItem
          key={`${index} - ${item.link}`}
          item={item}
          centered={item.centered}
          orientation={index % 2 === 1 ? 'left' : 'right'}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

Articles.defaultProps = {
  items: [],
};

Articles.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      perex: PropTypes.string,
      content: PropTypes.func,
      link: PropTypes.string,
    }),
  ),
};

export default Articles;
