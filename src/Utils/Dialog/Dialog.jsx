import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';
import DialogContent from '../DialogContent';

const Dialog = ({
  ButtonComponent,
  children,
  description,
  id,
  title,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const titleId = `${id}-title`;

  const descriptionId = description
    ? `${id}-description`
    : undefined;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonComponent
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
      <MaterialDialog
        open={open}
        onClose={handleClose}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        {...rest}
      >
        <DialogContent
          titleId={titleId}
          title={title}
          describedby={descriptionId}
          description={description}
          onClose={handleClose}
          {...rest}
        >
          {children({
            open,
            setOpen,
            handleClose,
            handleOpen,
          })}
        </DialogContent>
      </MaterialDialog>
    </>
  );
};

Dialog.propTypes = {
  ButtonComponent: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
};

Dialog.defaultProps = {
  description: '',
  id: 'modal',
};

export default Dialog;
