import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';

const MemberItem = ({ item }) => {
  return (
    <Wrapper>
      <div className="avatar-circle">
        {item.avatarPicture ? (
          <img className="title-image" src={item.avatarPicture} alt="avatar" />
        ) : (
          'AVATAR'
        )}
      </div>
      <div className="name">{`${item.name} ${item.surname}`}</div>
      <div className="positions">{item.positions.join(',')}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${rem(220)};
  height: ${rem(220)};
  margin: ${rem(10)} ${rem(0)} ${rem(10)} ${rem(0)};

  ${(props) => props.theme.media.m`
 margin: ${rem(10)} ${rem(20)} ${rem(10)} ${rem(0)};
    `};

  background: ${(props) => props.theme.color.memberBackground};

  .title-image {
    width: ${rem(130)};
    height: ${rem(130)};
    border-radius: ${rem(130)};
  }

  .avatar-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${rem(130)};
    height: ${rem(130)};
    border-radius: ${rem(130)};
    background: ${(props) => props.theme.color.avatarBackground};
    color: ${(props) => props.theme.color.memberBackground};
    text-transform: uppercase;
    margin-bottom: ${rem(12)};
  }

  .name {
    color: ${(props) => props.theme.color.primaryTextColor};
    font-weight: bold;
    font-size: ${rem(14)};
    margin-bottom: ${rem(4)};
  }

  .positions {
    color: ${(props) => props.theme.color.secondaryTextColor};
    font-size: ${rem(10)};
  }
`;

MemberItem.defaultProps = {};

MemberItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    positions: PropTypes.arrayOf(PropTypes.string),
    avatarPicture: PropTypes.string,
  }).isRequired,
};

export default MemberItem;
