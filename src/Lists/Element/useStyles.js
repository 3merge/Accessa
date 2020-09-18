import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  first: {
    gridColumn: '1 / -1',
    marginBottom: '1rem',
  },
  listWrapper: {
    alignItems: 'flex-start',
  },
  avatarImg: {
    borderRadius: '0',
    marginTop: '.5rem',
    width: '6.25rem',
    height: '6.25rem',
    marginRight: '2rem',
  },
  content: {
    alignSelf: 'flex-start',
  },
  subtitle1: {
    fontWeight: typography.fontWeightBold,
    fontSize: '1.3rem',
  },
  subtitle2: {
    fontWeight: typography.fontWeightBold,
    fontSize: '.9rem',
    marginBottom: '.5rem',
  },
  body1: {
    fontSize: '1rem',
  },
}));

export default useStyles;
