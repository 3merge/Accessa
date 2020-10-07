import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: ({ color }) => ({
    color,
    display: 'grid',
    gridAutoColumns: '1fr',
    justifyItems: 'center',
    alignContent: 'center',
    rowGap: '1.2rem',
    textAlign: 'center',
    height: '100%',

    '*': {
      color: 'inherit',
    },
  }),
  background: ({ color }) => ({
    backgroundColor: color,
    filter: 'brightness(.5)',
    opacity: 0.25,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }),
  main: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
}));

export default useStyles;
