import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  nav: {
    backgroundColor: 'transparent',
    color: palette.secondary.contrastText,
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    marginBottom: '.8rem',
  },
  a: {
    textDecoration: 'none',
    color: palette.secondary.contrastText,
  },
  collapse: {
    backgroundColor: palette.secondary.dark,
  },
}));

export default useStyles;
