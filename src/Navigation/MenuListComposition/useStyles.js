import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(({ palette, spacing }) => ({
  wrapper: {
    position: 'relative',
    '&:hover, &:focus-within': {
      '& $nested': {
        visibility: 'visible',
        opacity: 1,
        transform: 'none',
      },
    },
  },
  link: ({ isMultiColumns, columns }) => ({
    textDecoration: 'none',

    '&:focus': {
      '& + $nested': {
        visibility: 'visible',
        opacity: 1,
        transform: 'none',
      },
    },
    '& span': {
      justifyContent:
        isMultiColumns && columns > 1
          ? 'flex-start'
          : 'center',
    },
  }),
  nested: ({ isMultiColumns, rows, columns }) => ({
    display: isMultiColumns ? 'grid' : 'block',
    gridAutoFlow: 'column',
    gridTemplateColumns: `repeat(${columns}, max-content)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: '5px 5px',
    position: 'absolute',
    top: '96%',
    left: 0,

    minWidth: 175,
    visibility: 'hidden',
    opacity: 0,
    width: 'auto',
    padding: spacing(1),
    backgroundColor: palette.background.paper,
    transform: 'translateY(15px)',
    transitionProperty: 'opacity,transform',
    transitionDuration: 250,
    transitionDelay: 75,
    zIndex: 1000,

    '&::before': {
      width: 0,
      height: 0,
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: `7px solid ${palette.background.paper}`,
      position: 'absolute',
      bottom: '100%',
      left: '1.5rem',
      content: '""',
    },
  }),
  root: {
    display: 'flex',
  },
}));
