import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyle from './useStyle';

const DialogContent = ({
  titleId,
  title,
  onClose,
  onCloseLabel,
  description,
  descriptionId,
  children,
}) => {
  const cls = useStyle();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        component="header"
      >
        <MuiDialogTitle id={titleId} className={cls.title}>
          {title}
        </MuiDialogTitle>
        <Box px={2}>
          <IconButton
            size="small"
            aria-label={onCloseLabel}
            onClick={onClose}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
      <MuiDialogContent dividers component="section">
        {description && (
          <Box mb={2}>
            <Typography id={descriptionId}>
              {description}
            </Typography>
          </Box>
        )}
        {children}
      </MuiDialogContent>
    </>
  );
};

DialogContent.propTypes = {
  /**
   * Renders directly inside the modal <section /> element
   */
  children: PropTypes.func.isRequired,

  /**
   * The title text
   */
  title: PropTypes.string.isRequired,

  /**
   * The description text
   */
  description: PropTypes.string,

  /**
   * Populates the <h2 /> element's ID attribute
   */
  titleId: PropTypes.string.isRequired,

  /**
   * Populates the <p /> element's ID attribute if a description is provided
   */
  descriptionId: PropTypes.string,

  /**
   * Calls this prop when <IconButton /> component is clicked
   */
  onClose: PropTypes.func.isRequired,

  /**
   * The close button's aria label
   */
  onCloseLabel: PropTypes.string,
};

DialogContent.defaultProps = {
  description: undefined,
  descriptionId: undefined,
  onCloseLabel: 'Click to close the dialog',
};

export default DialogContent;
