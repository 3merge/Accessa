import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  container: () => ({
    backgroundColor: palette.background.default,
    height: '100vh',
  }),
}));

export default useStyles;
