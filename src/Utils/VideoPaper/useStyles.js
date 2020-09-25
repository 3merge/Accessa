import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  grid: {
    display: 'grid',
    justifyItems: 'flex-end',
  },
  closeBtn: {
    width: '2rem',
    height: '2rem',
    color: palette.primary.contrastText,
  },
  figure: {
    display: 'grid',
    justifyItems: 'center',
  },
  iframe: {
    height: '250px',
    width: '300px',
  },
  figcaption: {
    // textAlign: 'center',
    color: palette.primary.contrastText,
    marginTop: '1rem',
    fontSize: '1.5rem',
  },
}));

export default useStyles;
