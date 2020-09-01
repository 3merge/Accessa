import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyle = makeStyles(() => ({
  root: {
    textAlign: 'center',
    '& button': {
      backgroundColor: 'transparent',
      border: 0,

      '&[disabled]': {
        cursor: 'not-allowed',
      },
    },
  },
}));

export const ButtonWrapper = ({
  // eslint-disable-next-line
  children,
  // eslint-disable-next-line
  className,
  ...rest
}) => {
  const cls = useStyle();

  return (
    <Grid
      item
      className={classnames(cls.root, className)}
      {...rest}
    >
      {children}
    </Grid>
  );
};

// eslint-disable-next-line
export default ({ children }) => {
  const ref = React.useRef();
  const [isDisabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    const callback = (mutationsList) => {
      Object.values(mutationsList).forEach((item) => {
        if (item.attributeName === 'disabled')
          setDisabled(item.target.disabled);
      });
    };

    const observer = new MutationObserver(callback);
    observer.observe(ref.current.parentElement, {
      attributes: true,
    });

    setDisabled(ref.current.parentElement.disabled);

    return () => observer.disconnect();
  }, []);

  return (
    <IconButton
      ref={ref}
      disabled={isDisabled}
      aria-disabled={undefined}
      role={undefined}
      tabIndex={-1}
      component="span"
      size="small"
    >
      {children}
    </IconButton>
  );
};
