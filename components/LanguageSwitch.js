import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { rem } from 'polished';
import styled from '@emotion/styled';

const LanguageSwitch = () => {
  const { locale, locales } = useRouter();

  return (
    <Wrapper>
      {locales.map((l) => (
        <Link key={l} href={`/${l}`} locale={l} passHref>
          <Switch selected={l === locale}>
            <Flag src={`/static/flags/${l}.svg`} alt={locale} />
          </Switch>
        </Link>
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
