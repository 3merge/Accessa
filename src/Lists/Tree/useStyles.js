import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ typography, palette }) => ({
  primary: () => ({
    fontWeight: typography.fontWeightMedium,
    color: palette.text.primary,
    fontSize: '18px',
    paddingTop: '5px',
    paddingBottom: '5px',
  }),
  secondary: () => ({
    fontWeight: typography.fontWeightBold,
    color: palette.text.secondary,
    fontSize: '14px',
    marginBottom: '10px',
  }),
  wrapper: {
    display: 'grid',
    columnGap: '10px',
    gridTemplateColumns: '1fr 50px',
    borderBottom: `1px solid ${palette.grey['200']}`,
  },
}));

export default useStyles;
