import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';

const Dialog = ({
  PaperComponent,
  initialTarget,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState(
    () => initialTarget,
  );

  const props = { open, setOpen, target, setTarget };

  return (
    <>
      {children(props)}
      <MaterialDialog
        open={open}
        onClose={() => setOpen(false)}
        PaperComponent={() => <PaperComponent {...props} />}
        {...rest}
      />
    </>
  );
};

Dialog.defaultProps = {
  initialTarget: null,
};

Dialog.propTypes = {
  PaperComponent: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialTarget: PropTypes.any,
};

export default Dialog;
