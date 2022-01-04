import styled from '@emotion/styled';
import { rem } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from '@emotion/react';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { CustomForm } from './CustomForm';
import MailchimpSubscribe from "react-mailchimp-subscribe";
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

  .newsletter {
    height: auto;
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

const SoonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${rem(40)};
`;

function NewsletterSubscription({ item }) {
  const { t } = useTranslation('common');

  const postUrl = `https://questspace.us20.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

  return (
    <Wrapper>
      <div className="header">{t('subscription_soon')}</div>
      <div className="content-wrapper newsletter">
        <div className="text"><SoonText>{t('newsletter_join')}</SoonText></div>
        <MailchimpSubscribe
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    </Wrapper>
  );
}

export default withTheme(NewsletterSubscription);
