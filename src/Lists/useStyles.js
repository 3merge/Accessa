import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: ({ darkMode }) => ({
    backgroundColor: darkMode
      ? palette.primary.dark
      : palette.common.white,
    color: darkMode
      ? palette.primary.contrastText
      : palette.text.primary,
  }),
  list: ({ darkMode, underline }) => {
    return {
      // eslint-disable-next-line no-nested-ternary
      borderBottom: underline
        ? darkMode
          ? `1px solid ${palette.common.white}`
          : `1px solid ${palette.common.black}`
        : '1px solid transparent',
      color: darkMode
        ? palette.common.white
        : palette.common.black,
    };
  },
  listButton: {
    cursor: 'pointer',
  },
  nestedItems: {
    paddingLeft: '.5rem',
    cursor: 'pointer',
  },
}));

export default useStyles;
