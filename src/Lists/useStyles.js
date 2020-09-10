import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: ({ darkMode }) => ({
    backgroundColor: darkMode ? '#000' : '#fff',
    color: darkMode ? '#fff' : '#000',
  }),
  list: ({ darkMode, underline }) => ({
    // eslint-disable-next-line no-nested-ternary
    borderBottom: underline
      ? darkMode
        ? '1px solid #fff'
        : '1px solid #000'
      : '1px solid transparent',
    color: darkMode ? '#fff' : '#000',
  }),
  nestedItems: {
    paddingLeft: '.5rem',
    cursor: 'pointer',
  },
}));

export default useStyles;
