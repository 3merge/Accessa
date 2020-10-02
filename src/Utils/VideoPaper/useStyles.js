import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  figure: {
    margin: '0',
    padding: 0,
    display: 'block',
    textAlign: 'center',
    width: '100%',
  },
  iframe: {
    height: '45vh',
    width: '100%',
  },
  figcaption: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    fontSize: '0.733rem',
    fontStyle: 'italic',
  },
}));

export default useStyles;
