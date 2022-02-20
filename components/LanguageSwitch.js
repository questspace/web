import PropTypes from 'prop-types';
import Link from 'next/link';
import { LanguageSwitcher, useLanguageQuery } from 'next-export-i18n';
import { rem } from 'polished';
import styled from '@emotion/styled';

const LanguageSwitch = () => {
  const locales = ["sk", "en"]
  const [query] = useLanguageQuery();
  const currentLocale = query && query.lang || "sk"

  return (
    <Wrapper>
      {locales.map((l) => (
        <LanguageSwitcher key={l} lang={l}>
          <Switch selected={l === currentLocale}>
            <Flag src={`/static/flags/${l}.svg`} alt={currentLocale} />
          </Switch>
        </LanguageSwitcher>
      ))}
    </Wrapper>
  );
};

const Flag = styled.img`
  width: ${rem(24)};
`;

const Switch = styled.div`
  cursor: pointer;

  border-bottom: ${(props) => (props.selected ? rem(3) : rem(0))} solid #b22a72;

  margin: ${rem(4)};
`;

const Wrapper = styled.div`
  display: flex;
`;

LanguageSwitch.defaultProps = {};

LanguageSwitch.propTypes = {};

export default LanguageSwitch;
