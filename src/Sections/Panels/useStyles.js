import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ theme }) => ({
  imageWrapper: {
    width: '100%',
    height: '100%',
  },
  body: {
    margin: '25px 0',
  },
  swap: ({ swap }) => ({
    order: swap ? -1 : 0,
  }),
}));

export default useStyles;
