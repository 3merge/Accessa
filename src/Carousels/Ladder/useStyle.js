import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    height: 'auto',
    padding: theme.spacing(2),
    position: 'relative',
    width: 245,

    '& > .carousel': {
      height: '100%',
      width: '100%',
    },

    '& [role="listbox"]': {
      height: 'calc(12rem * 3)',
      overflow: 'hidden',
      width: '100%',

      [theme.breakpoints.down('md')]: {
        flex: 1,
        height: '12rem',
      },

      '& ul': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
    },

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  stack: {
    flexDirection: 'column',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    },
  },
  back: {
    '& button': {
      transform: 'rotate(90deg) translateX(-50%)',
      [theme.breakpoints.down('md')]: {
        transform: 'none',
      },
    },
  },
  next: {
    '& button': {
      transform: 'rotate(90deg) translateX(-50%)',
      [theme.breakpoints.down('md')]: {
        transform: 'none',
      },
    },
  },
}));
