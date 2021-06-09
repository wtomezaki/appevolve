import { makeStyles, createStyles, Theme, AppBar, Toolbar, Typography, IconButton, Hidden } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
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
          <Typography variant="h6" noWrap style={{ textTransform: 'capitalize' }}>
            {location.pathname.replace('/', '')}
          </Typography>
        </Toolbar>
      </AppBar>
    </Hidden>
  );
};

export default Topbar;
