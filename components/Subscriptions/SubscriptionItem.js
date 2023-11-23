import styled from '@emotion/styled';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from '@emotion/react';
import { useState } from 'react';
import { useTranslation } from 'next-export-i18n';
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
    flex-wrap: wrap;
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
  margin-bottom: ${rem(8)};
  flex-direction: row;

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

  return (
    <Wrapper>
      <div className="header">{`${item.title} (${item.pricePerMonth}€ / ${t(
        'month',
      )})`}</div>
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
          <Button borderRadius={8} height={50} type="gradient" fullWidth>
            <a
              href="https://membership.ppke.sk/"
              target="_blank"
              rel="noopener noreferrer"
            >{`${t('buy_text')} ${item.title} ${t('with_crypto')}`}</a>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default withTheme(SubscriptionItem);
