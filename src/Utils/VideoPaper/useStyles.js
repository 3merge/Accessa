import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  figure: {
    margin: '0',
    padding: 0,
    display: 'block',
    width: '100%',
  },
  iframe: {
    height: '350px',
    width: '100%',
  },
  figcaption: {
    marginTop: '1rem',
    fontSize: '0.733rem',
    fontStyle: 'italic',
  },
}));

export default useStyles;
