import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  paper: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  dialog: {
    display: 'grid',
    justifyItems: 'flex-end',
  },
  btn: {
    width: '2rem',
    height: '2rem',
    color: palette.primary.contrastText,
  },
}));

export default useStyles;
