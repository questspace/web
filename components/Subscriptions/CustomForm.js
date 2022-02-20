import { useTranslation } from "next-export-i18n";
import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Input from '../Input';
import { validateEmail } from '../../utils';

export const CustomForm = ({ status, message, onValidated }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail(email);
    if (email && validateEmail(email)) {
        return onValidated({
            EMAIL: email,
        });
    }
    
    setError(t('email_error'));
  };

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
    setError('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {status === 'sending' && (
        <div className="input-wrapper">{t('newsletter_sending')}</div>
      )}
      {status === 'error' && (
        <div
          className="input-wrapper newsletter-error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className="input-wrapper newsletter-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== 'success' ? (
        <div className="input-wrapper">
          <Input
            placeholder={t('enter_email')}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setError(null);
              }
            }}
            errorMessage={error}
          />
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {status === 'success' ? (
        <div className="input-wrapper">{t('newsletter_success')}</div>
      ) : (
        <div className="input-wrapper">
          <Button
            borderRadius={8}
            height={50}
            type="gradient"
            fullWidth
            onClick={handleSubmit}
          >{`${t('subscribe_to')} ${t('newsletter_title')}`}</Button>
        </div>
      )}
    </form>
  );
};
