import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MemberItem from './MemberItem';

const Members = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <div className="col" key={`${index} ${item.avatarPicture}`}>
          <MemberItem item={item} />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 240px));
  grid-gap: 0rem;
  justify-content: center;
  align-items: center;

  .col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

Members.defaultProps = {
  items: [],
};

Members.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      positions: PropTypes.arrayOf(PropTypes.string),
      avatarPicture: PropTypes.string,
    }),
  ),
};

export default Members;
