import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 'bold',
  },
  grayScaled: {
    filter: 'grayscale(100%)',
  },
  logo: {
    filter: 'grayscale(100%)',
    height: '70px',
    objectFit: 'contain',
    width: 'auto',
    minWidth: '100px',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'filter .5s ease-out',

    '&:hover': {
      filter: 'grayscale(0%)',
    },
  },
}));

export default useStyles;
