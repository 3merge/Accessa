import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Dialog as MaterialDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

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

  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonComponent setOpen={setOpen} />
      <MaterialDialog
        open={open}
        onClose={handleClose}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        {...rest}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MuiDialogTitle
            id={titleId}
            style={{ maxWidth: '75%' }}
          >
            {title}
          </MuiDialogTitle>
          <Box px={2}>
            <IconButton
              size="small"
              aria-label="Close dialog"
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>
        <MuiDialogContent dividers>
          {description && (
            <Box mb={2}>
              <Typography id={descriptionId}>
                {description}
              </Typography>
            </Box>
          )}
          {children({ open, setOpen })}
        </MuiDialogContent>
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
