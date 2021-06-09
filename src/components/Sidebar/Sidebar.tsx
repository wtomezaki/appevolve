import React from 'react';
import { Box, Drawer, Hidden, List, makeStyles, useTheme } from '@material-ui/core';
import SidebarItem from './SidebarItem';
import {
  ChartIcon,
  DashboardIcon,
  OrderIcon,
  StoreIcon,
  SupportIcon,
  TagIcon,
  UserIcon,
  VoucherIcon,
} from '../../icons';
import LogoIcon from '../../icons/LogoIcon';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#2C2D35',
    color: 'white',
  },
  toolbar: theme.mixins.toolbar,
}));

export interface SidebarItems {
  path: string;
  title: string;
  icon: React.ReactNode;
}

export const items = [
  { path: '', title: 'Dashboard', icon: <DashboardIcon /> },
  { path: 'orders', title: 'Orders', icon: <OrderIcon /> },
  { path: 'products', title: 'Products', icon: <TagIcon /> },
  { path: 'clients', title: 'Clients', icon: <UserIcon /> },
  { path: 'stores', title: 'Stores', icon: <StoreIcon /> },
  { path: 'promoCodes', title: 'Promo Codes', icon: <VoucherIcon /> },
  { path: 'reports', title: 'Reports', icon: <ChartIcon /> },
  { path: 'support', title: 'Support', icon: <SupportIcon /> },
];

const drawerContent = (
  <List>
    {items.map((item, index) => (
      <SidebarItem data={item} key={index} />
    ))}
  </List>
);

interface Props {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  window?: () => Window;
}

const Sidebar = ({ mobileOpen, handleDrawerToggle, window }: Props): React.ReactElement => {
  const classes = useStyles();
  const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          color="primary"
          open
        >
          <>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="95px"
              borderBottom="1px solid #8C8A98"
            >
              <LogoIcon />
            </Box>
            {drawerContent}
          </>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
