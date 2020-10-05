import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  title: {
    fontSize: '1.8rem',
    marginBottom: '2rem',
  },
  subtitle: {
    fontSize: '.8rem',
    color: palette.grey['600'],
    marginBottom: '.5rem',
    display: 'block',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  body1: {
    color: palette.grey['600'],
  },
}));

export default useStyles;
