import { Link } from '@reach/router';

export const getProps = (
  { isCurrent, isPartiallyCurrent },
  styleProps = {},
) => {
  if (isCurrent || isPartiallyCurrent)
    return {
      style: {
        textDecoration: 'underline',
        ...styleProps,
      },
    };

  return {};
};

export const getButtonProps = (item, styleProps) =>
  item.href
    ? {
        component: Link,
        to: item.href,
        getProps: (args) => getProps(args, styleProps),
      }
    : {
        disableRipple: true,
        style: {
          cursor: 'not-allowed',
        },
      };
