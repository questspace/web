import Button from './Button';
import Link from 'next/link';

const LinkButton = (props) => {
  if (props.disabled || !props.to) {
    return <Button {...props} />;
  }

  return (
    <Link href={props.to}>
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
