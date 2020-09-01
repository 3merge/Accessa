import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    '& ul': {
      display: 'flex !important',
      padding: 0,
      margin: 0,
    },

    '& [role="listbox"]': {
      overflow: 'hidden',
      width: '100%',
    },
  },
}));
