import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';

const Dialog = ({ ButtonComponent, children, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ButtonComponent setOpen={setOpen} />
      <MaterialDialog open={open} {...rest}>
        {children({ open, setOpen })}
      </MaterialDialog>
    </>
  );
};

Dialog.propTypes = {
  ButtonComponent: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
};

export default Dialog;
