import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gatsbyImage: {
    width: '100%',
    height: '200px',
  },
  card: {
    height: '100%',
    cursor: 'pointer',

    '&:hover, &:focus': {
      boxShadow:
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    },
    borderRadius: 0,
    boxShadow: 'none',
  },
  noCta: {
    cursor: 'default',

    '&:hover, &:focus': {
      boxShadow: 'none',
    },
  },
  title: {
    fontSize: '2.13rem',
    margin: 0,
    marginBottom: '2rem',
  },
  subtitle: {
    fontSize: '.8rem',

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
  li: ({ fill }) => ({
    flexGrow: fill ? 1 : 0,
    maxWidth: fill ? '100%' : 'auto',
  }),
}));

export default useStyles;
