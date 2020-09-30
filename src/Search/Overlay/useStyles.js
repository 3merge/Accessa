import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  btn: () => ({
    alignSelf: 'flex-end',
    color: palette.primary.contrastText,
  }),
}));

export default useStyles;
