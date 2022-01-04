import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { rem } from 'polished';

const Button = (props) => {
  return (
    <StyledButton {...props} type={props.type}>
      <div className="color-inside">{props.children}</div>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'primary',
  fullWidth: false,
  small: false,
  borderRadius: 24,
  height: 44,
};

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  small: PropTypes.bool,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
};

const StyledButton = styled.button`
  font-weight: bold;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  padding-top: ${rem(2)};
  padding-bottom: ${rem(2)};
  font-size: ${rem(12)};
  color: ${(props) => props.theme.buttons[props.type].textColor};
  height: ${(props) => (props.small ? rem(32) : rem(props.height))};
  border-radius: ${(props) => rem(props.borderRadius)};
  border: ${(props) => props.theme.buttons[props.type].border};
  background: ${(props) => props.theme.buttons[props.type].default};
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  padding-right: ${rem(2)};
  padding-left: ${rem(2)};
  &:hover {
    background: ${(props) => props.theme.buttons[props.type].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  .color-inside {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.backgroundInside};
    border-radius: ${(props) => rem(props.borderRadius)};
    width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
    height: 100%;
    padding-right: ${rem(40)};
    padding-left: ${rem(40)};
  }
`;

export default withTheme(Button);
