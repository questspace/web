import styled from '@emotion/styled';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from '@emotion/react';

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: ${rem(40)};
  background: ${(props) => props.theme.color.gradientMainColor};

  :hover {
    .inner {
      background: none;
    }
  }

  .inner {
    width: ${rem(38)};
    height: ${rem(38)};
    border-radius: ${rem(38)};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.color.footerBackgroundColor};
  }
`;

function SocialItem({ theme, link, icon, name }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Circle title={name}>
        <div className="inner">
          <FontAwesomeIcon size={'lg'} icon={['fab', icon]} />
        </div>
      </Circle>
    </a>
  );
}

SocialItem.defaultProps = {
  link: '',
  icon: '',
  name: '',
  theme: {},
};

SocialItem.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  theme: PropTypes.shape({}),
};

export default withTheme(SocialItem);
