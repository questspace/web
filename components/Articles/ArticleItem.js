import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { H2Title, TitlePerex } from '../ReusableComponents';
import Button from '../Button';
import { rem } from 'polished';
import { useTranslation } from "next-export-i18n";
import LinkButton from '../LinkButton';

const ArticleItem = ({ item, orientation, centered, hasButton = false }) => {
  const { t } = useTranslation();

  return (
    <Wrapper orientation={orientation} centered={centered} id={item.id || ""}>
      <div className="title-wrapper">
        <StyledH2Title centered={centered} align={orientation}>
          {item.title}
        </StyledH2Title>
        <TitlePerex centered={centered} align={orientation}>
          {item.perex}
        </TitlePerex>
        {hasButton && <div className="button-wrapper">
          <LinkButton to={item.link} type="gradient">
            {t('get started')}
          </LinkButton>
        </div>}
      </div>
      <div className="spacer" />
      <div className="content-wrapper">{item.content(orientation)}</div>
    </Wrapper>
  );
};

const StyledH2Title = styled(H2Title)`
  text-align: ${(props) => (!props.centered ? props.align : 'inherit')};
  ${(props) => props.theme.media.m`
  text-align: inherit;
  margin-bottom: ${rem(25)};
  `}
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: ${rem(50)};
  margin-bottom: ${rem(50)};
  flex-direction: ${(props) =>
    props.centered
      ? props.orientation === 'right'
        ? 'column-reverse'
        : 'column'
      : 'row'};

  ${(props) => props.theme.media.m`
   margin-bottom: ${rem(180)};
   margin-top: ${rem(180)};
   flex-direction: row;
    `};

  .spacer {
    order: 2;
    width: ${rem(0)};
    height: ${rem(40)};
    ${(props) => props.theme.media.m`
     width: ${rem(40)};
    `};
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => props.centered && 'center'};
    width: ${(props) => (props.centered ? '100%' : '70%')};
    order: ${(props) => (props.orientation === 'left' ? 1 : 3)};
    z-index: 20;
    ${(props) => props.theme.media.m`
    width: 50%;
    align-items: flex-start;
    `};
  }

  .button-wrapper {
    display: flex;
    justify-content: ${(props) =>
      props.orientation === 'right' ? 'flex-end' : 'flex-start'};
  }

  .content-wrapper {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    order: ${(props) => (props.orientation === 'right' ? 1 : 3)};
    width: ${(props) => (props.centered ? '100%' : '30%')};
    z-index: 10;
    ${(props) => props.theme.media.m`
    width: 50%;
    `};
  }
`;

ArticleItem.defaultProps = {
  orientation: 'left',
};

ArticleItem.propTypes = {
  orientation: PropTypes.string,
  item: PropTypes.shape({
    title: PropTypes.string,
    perex: PropTypes.string,
    content: PropTypes.func,
    link: PropTypes.string,
  }).isRequired,
};

export default ArticleItem;
