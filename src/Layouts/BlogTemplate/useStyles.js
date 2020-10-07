import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
  verticalPadding: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  relatedArticlesWrapper: {
    backgroundColor: palette.grey['200'],
  },
}));

export default useStyles;
