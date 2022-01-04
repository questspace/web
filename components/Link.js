import NextLink from 'next/link';
import { useCallback } from 'react';

const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  ...anchorProps
}) => {
  const handleClick = useCallback(
    (e) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const destination = document.querySelector(href);
        if (destination) {
          destination.scrollIntoView({
            behavior: 'smooth',
            block: "center"
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;