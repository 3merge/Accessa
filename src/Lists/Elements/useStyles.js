import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    display: 'grid',
    gridGap: '1.75rem',
    gridTemplateColumns: '1fr',
    [breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
}));

export default useStyles;
