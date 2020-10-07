import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  list: ({ underline }) => {
    const p = underline ? undefined : 0;

    return {
      color: palette.text.primary,
      paddingBottom: p,
      paddingTop: p,

      '&:not(:last-of-type)': {
        borderBottom: `1px solid ${
          underline ? palette.text.primary : 'transparent'
        }`,
      },
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
