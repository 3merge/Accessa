import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  btn: () => ({
    alignSelf: 'flex-end',
    color: palette.primary.contrastText,
  }),
  container: () => ({
    backgroundColor: palette.background.default,
    height: '100vh',
  }),
}));

export default useStyles;
