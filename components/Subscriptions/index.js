import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import SubscriptionItem from './SubscriptionItem';
import { H2SubTitle, H2Title } from '../ReusableComponents';
import NewsletterSubscription from './NewsletterSubscription';
import { rem } from 'polished';
import { useTranslation } from "next-export-i18n";

const Subscriptions = ({ items, id }) => {
  const { t } = useTranslation();

  return (
    <Wrapper id={id}>
      <SubTitle>
        <H2Title>{t('subscriptions_title')}</H2Title>
        <H2SubTitle>{t('subscription_subtitle')}</H2SubTitle>
      </SubTitle>
      <div className="list">
        {items.length > 0 ? items.map((item) => (
          <SubscriptionItem key={item.title} item={item} />
        )) : <NewsletterSubscription />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 20;
  .list {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 600px));
    grid-gap: 2rem;
  }
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  margin-bottom: ${rem(40)};
`;

SubscriptionItem.defaultProps = {
  items: [],
};

SubscriptionItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Subscriptions;
