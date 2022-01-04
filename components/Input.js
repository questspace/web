import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';
import { rem } from 'polished';
import { css } from '@emotion/react';

const Input = (props) => {
  return (
    <InputContainer>
      <StyledInput
        error={
          props.errorMessage && props.errorMessage.length > 0 ? true : false
        }
        background={props.background}
        {...props}
      />
      {props.errorMessage && props.errorMessage.length > 0 && (
        <div className="errorMessage">{props.errorMessage}</div>
      )}
    </InputContainer>
  );
};

Input.defaultProps = {
  errorMessage: '',
  error: false,
  icon: null,
  background: null,
};

const InputContainer = styled.div`
  position: relative;

  .errorMessage {
    opacity: ${(props) => (props.display ? 0 : 1)};
    transition: opacity 0.5s ease-in-out;
    height: ${rem(8)};
    font-size: ${rem(10)};
    font-weight: bold;
    color: ${(props) => props.theme.color.danger};
    margin-top: ${rem(4)};
  }
`;

const StyledInput = styled.input`
  height: ${(props) => (props.large ? rem(64) : rem(48))};
  border-radius: ${rem(8)};
  width: 100%;
  outline: 0;
  padding-left: ${(props) => (props.icon ? rem(56) : rem(24))};
  padding-right: ${rem(32)};
  border: ${({ theme, error }) => {
    if (error) {
      return `solid ${rem(2)} ${theme.color.danger}`;
    }

    return 'none';
  }};
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return css`
        ${theme.color.disabled};
      `;
    }
    return css`
      ${theme.color.text};
    `;
  }};

  background-color: ${({ theme, error, background }) => {
    if (error) {
      return css`
        ${theme.color.dangerBackground};
      `;
    }
    return css`
      ${background || theme.input.background};
    `;
  }};
  cursor: ${({ disabled }) => {
    if (disabled) {
      return 'not-allowed';
    }
    return 'auto';
  }};

  ::placeholder {
    color: ${(props) => props.theme.input.placholderColor};
    font-size: ${rem(14)};
  }
`;

export default withTheme(Input);
