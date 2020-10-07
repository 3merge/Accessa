import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, shadows }) => ({
  wrapper: {
    background: palette.background.paper,
    boxShadow: shadows[2],
    width: '100%',
    padding: '1rem',
  },
  title: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '.3rem',
    color: palette.text.primary,
  },
  size: {
    color: palette.text.secondary,
    fontSize: '.8rem',
  },
  icon: {
    color: palette.text.secondary,
  },
}));

export default useStyles;
