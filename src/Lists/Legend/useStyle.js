import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.dark,
    fontSize: '0.711rem',
    height: '1.5rem',
    width: '1.5rem',
  },
  avatarContainer: {
    marginRight: theme.spacing(1),
    minWidth: 'auto',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '100%',
    width: 575,
  },
  item: {
    paddingLeft: 0,
    paddingRight: 0,
    width: '50%',
  },
}));
