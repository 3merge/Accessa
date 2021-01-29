import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette }) => ({
  wrapper: {
    position: 'relative',
    '&:hover': {
      '& $nested': {
        display: 'block',
      },
    },
    '&:focus-within': {
      '& $nested': {
        display: 'block',
      },
    },
  },
  link: {
    textDecoration: 'none',
    '&:focus': {
      '& + $nested': {
        display: 'block',
      },
    },
  },
  nested: {
    position: 'absolute',
    top: '100%',
    left: 0,
    display: 'none',
    minWidth: '250px',
    backgroundColor: palette.background.paper,
    zIndex: 1000,
  },
  root: {
    display: 'flex',
  },
}));
