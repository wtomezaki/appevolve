import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Manrope',
  },
  palette: {
    primary: { main: '#2C2D35' },
    secondary: { main: '#E5E5E5' },
  },
  overrides: {
    MuiListItem: {
      root: {
        background: 'transparent',
        borderLeft: '5px solid transparent',
        '&$selected': {
          height: '50px',
          backgroundColor: 'rgba(255, 82, 70, 0.25)',
          borderLeft: '5px solid #FF5246',
        },
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '27px',
      },
    },
    MuiAvatar: {
      root: {
        border: '2px solid white',
      },
    },
  },
});
export default theme;
