import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  primary: () => ({
    fontWeight: typography.fontWeightMedium,
    color: palette.text.primary,
    fontSize: '18px',
    paddingTop: '10px',
    paddingBottom: '10px',
  }),
  secondary: () => ({
    fontWeight: typography.fontWeightBold,
    color: palette.text.secondary,
    fontSize: '14px',
  }),
  wrapper: {
    display: 'grid',
    columnGap: '10px',
    gridTemplateColumns: '1fr 50px',
    borderBottom: `1px solid ${palette.grey['200']}`,
  },
  btn: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    borderRadius: 0,

    '&:hover': {
      backgroundColor: palette.primary.light,
      color: palette.primary.dark,
    },
  },
}));

export default useStyles;
