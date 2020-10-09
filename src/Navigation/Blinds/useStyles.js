import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  nav: {
    backgroundColor: 'transparent',
    color: palette.text.primary,
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  dropdownList: ({ columnCount }) => ({
    listStyleType: 'none',
    margin: 0,
    columnCount,
  }),
  a: {
    textDecoration: 'none',
    color: palette.text.primary,
  },
  overlay: ({ height, isOpen }) => ({
    height,
    left: 0,
    width: '100%',
    top: 0,
    transition: 'all 1250ms',
    opacity: isOpen ? 0.95 : 0,
  }),
}));

export default useStyles;
