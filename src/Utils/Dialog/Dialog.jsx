import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';

const Dialog = ({
  PaperComponent,
  initialTarget,
  disableOnClose,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(true);
  const [target, setTarget] = React.useState(
    () => initialTarget,
  );

  const props = {
    open,
    setOpen,
    target,
    setTarget,
    ...rest,
  };

  return (
    <>
      {children(props)}
      <MaterialDialog
        open={open}
        onClose={
          disableOnClose ? null : () => setOpen(false)
        }
        PaperComponent={() => <PaperComponent {...props} />}
        {...rest}
      />
    </>
  );
};

Dialog.defaultProps = {
  initialTarget: null,
  disableOnClose: false,
};

Dialog.propTypes = {
  PaperComponent: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  disableOnClose: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  initialTarget: PropTypes.any,
};

export default Dialog;
