import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  modal: () => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }),
  grid: {
    display: 'grid',
    justifyItems: 'flex-end',
  },
  closeBtn: {
    width: '2rem',
    height: '2rem',
    color: palette.primary.contrastText,
  },
  iframe: {
    height: '250px',
    width: '300px',
  },
  figcaption: {
    textAlign: 'center',
    color: palette.primary.contrastText,
    marginTop: '1rem',
  },
}));

export default useStyles;
