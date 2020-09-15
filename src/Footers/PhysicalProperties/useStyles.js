import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  subtitle1: {
    fontWeight: 'bold',
    marginBottom: '15px',
    color: palette.text.secondary,
  },
}));

export default useStyles;
