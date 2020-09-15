import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: ({ backgroundColor }) => ({
    backgroundColor:
      backgroundColor || palette.background.default,
    display: 'grid',
    gridAutoColumns: '1fr',
    justifyItems: 'center',
    alignContent: 'center',
    rowGap: '1.2rem',
  }),
  title: ({ titleColor }) => ({
    fontWeight: 'bold',
    color: titleColor || palette.text.primary,
  }),
  main: ({ mainColor }) => ({
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: mainColor || palette.text.primary,
  }),
}));

export default useStyles;
