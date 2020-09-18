import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    width: '100%',
    height: '100%',
    minHeight: 350,
  },
  textWrapper: {
    animation: '$fadeInText .5s ease-in-out',
  },
  body: {
    margin: '25px 0',
  },
  swap: ({ swap }) => ({
    order: swap ? -1 : 0,
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  }),
  '@keyframes fadeInText': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}));

export default useStyles;
