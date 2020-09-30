import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog as MaterialDialog,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

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

Dialog.CloseBtn = ({ setOpen }) => {
  return (
    <IconButton
      // className={closeBtn}
      onClick={() => setOpen((cur) => !cur)}
      aria-label="close dialog"
      aria-labelledby="closeDialog"
      aria-describedby="closeDialog"
    >
      <Close />
    </IconButton>
  );
};

Dialog.CloseBtn.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Dialog;
