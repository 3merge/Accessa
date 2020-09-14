import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, breakpoints }) => {
  return {
    wrapper: {
      backgroundColor: palette.grey.A400,
      color: palette.primary.contrastText,
    },
    iconWrapper: {
      marginTop: '15px',
      [breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  };
});

export default useStyles;
