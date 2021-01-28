import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
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
    minWidth: '300px',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
