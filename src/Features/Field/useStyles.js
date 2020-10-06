import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  card: {
    height: '100%',
    cursor: 'pointer',

    '&:hover, &:focus': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    },
  },
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
