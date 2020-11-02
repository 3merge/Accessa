import { Link } from '@reach/router';

export const getProps = ({
  isCurrent,
  isPartiallyCurrent,
}) => {
  if (isCurrent || isPartiallyCurrent)
    return {
      style: {
        textDecoration: 'underline',
      },
    };

  return {};
};

export const getButtonProps = (item) =>
  item.href
    ? {
        component: Link,
        to: item.href,
        getProps,
      }
    : {
        disableRipple: true,
        style: {
          cursor: 'not-allowed',
        },
      };
