import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  container: () => ({
    backgroundColor: palette.background.default,
    height: '100vh',
  }),
  btn: () => ({
    alignSelf: 'flex-end',
    color: palette.primary.contrastText,
  }),
}));

export default useStyles;
