import { makeStyles } from '@material-ui/core/styles';

export const getColors = ({ darkMode, underline }) => {
  return {
    // eslint-disable-next-line no-nested-ternary
    borderBottom: underline
      ? darkMode
        ? '1px solid #fff'
        : '1px solid #000'
      : '1px solid transparent',
    color: darkMode ? '#fff' : '#000',
  };
};

const useStyles = makeStyles(() => ({
  root: ({ darkMode }) => ({
    backgroundColor: darkMode ? '#000' : '#fff',
    color: darkMode ? '#fff' : '#000',
  }),
  list: getColors,
  nestedItems: {
    paddingLeft: '.5rem',
    cursor: 'pointer',
  },
}));

export default useStyles;
