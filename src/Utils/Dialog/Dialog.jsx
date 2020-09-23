import React from 'react';
import { Dialog } from '@material-ui/core';

const _Dialog = ({ PaperComponent, children }) => {
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState(0);

  const props = { open, setOpen, target, setTarget };

  const handleDialog = () => setOpen((cur) => !cur);

  return (
    <>
      {children(props)}
      <Dialog
        open={open}
        onClose={handleDialog}
        PaperComponent={() => <PaperComponent {...props} />}
      />
    </>
  );
};

export default _Dialog;
