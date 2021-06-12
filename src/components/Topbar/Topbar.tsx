import {
  makeStyles,
  createStyles,
  Theme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Box,
} from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BadgeAvatar } from '..';
import { MenuIcon } from '../../icons';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
);

interface Props {
  handleDrawerToggle: () => void;
}

const Topbar = ({ handleDrawerToggle }: Props): React.ReactElement => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Hidden smUp implementation="css">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" justifyContent="center" flexGrow={1}>
            <Typography variant="h5" noWrap style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
              {location.pathname.replace('/', '')}
            </Typography>
          </Box>
          <IconButton color="inherit" edge="end">
            <BadgeAvatar name="Admin" imgSrc={`${process.env.PUBLIC_URL}/images/avatar.png`} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Topbar;
