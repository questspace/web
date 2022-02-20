import Button from './Button';
import Link from 'next/link';
import { useLanguageQuery } from 'next-export-i18n';


const LinkButton = (props) => {
  const [query] = useLanguageQuery();

  if (props.disabled || !props.to) {
    return <Button {...props} />;
  }

  return (
    <Link href={{ pathname: props.to, query }}>
      <a>
        <Button {...props} />
      </a>
    </Link>
  );
};

LinkButton.defaultProps = {
  to: null,
};

export default LinkButton;
