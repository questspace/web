import styled from '@emotion/styled';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from '@emotion/react';
import { useState } from 'react';
import { useTranslation } from "next-export-i18n";
import { validateEmail } from '../../utils';
import Button from '../Button';
import Input from '../Input';

const Wrapper = styled.div`
  background: ${(props) => props.theme.color.gradientMainColor};
  border-radius: ${rem(20)};
  padding: ${rem(2)};
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${rem(18)};
    text-transform: uppercase;
    font-weight: bold;
    border-radius: ${rem(20)} ${rem(20)} ${rem(0)} ${rem(0)};
    background: #000a16;
    height: ${rem(79)};
    margin-bottom: ${rem(2)};
  }

  .content-wrapper {
    background: #000a16;
    height: ${rem(416)};
    border-radius: ${rem(0)} ${rem(0)} ${rem(20)} ${rem(20)};
    padding: ${rem(32)};
  }

  .text {
    color: ${(props) => props.theme.color.secondaryTextColor};
    line-height: 34px;
    text-align: center;
  }

  .opens {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${rem(24)};
    margin-bottom: ${rem(24)};
  }

  .input-wrapper {
    margin-bottom: ${rem(8)};
  }
`;

const OpensItem = styled.div`
  display: flex;
  margin-right: ${rem(8)};

  .icon-wrapper {
    width: ${rem(24)};
    height: ${rem(24)};
    border-radius: ${rem(24)};
    background: ${(props) => props.theme.color.gradientMainColor};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${rem(12)};
  }
`;

function SubscriptionItem({ item }) {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const confirmEmail = () => {
    if (validateEmail(email)) {
      //send data
    } else {
      setError(t('email_error'));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      confirmEmail();
    }
  };

  return (
    <Wrapper>
      <div className="header">{`${item.title} (${item.pricePerMonth}€ / ${t('month')})`}</div>
      <div className="content-wrapper">
        <div className="text">{item.text}</div>
        <div className="opens">
          {item.opens.map((i) => (
            <OpensItem key={i}>
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={['fas', 'check']} />
              </div>
              {i}
            </OpensItem>
          ))}
        </div>
        <div className="input-wrapper">
          <Input
            placeholder={t('enter_email')}
            value={email}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setError(null);
              }
            }}
            errorMessage={error}
          />
        </div>
        <div className="input-wrapper">
          <Button
            borderRadius={8}
            height={50}
            type="gradient"
            fullWidth
            onClick={() => confirmEmail()}
          >{`${t('subscribe_to')} ${item.title}`}</Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default withTheme(SubscriptionItem);
