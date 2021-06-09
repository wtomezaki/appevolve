import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { SidebarItems } from './Sidebar';

const SidebarItem = ({ data }: { data: SidebarItems }): React.ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const handleClose = (): void => {
    history.push(data.path);
  };

  const isSelected = (): boolean => {
    return location.pathname.replace('/', '') === data.path;
  };
  return (
    <ListItem button onClick={handleClose} selected={isSelected()}>
      <ListItemIcon>{data.icon}</ListItemIcon>
      <ListItemText primary={data.title} />
    </ListItem>
  );
};

export default SidebarItem;
