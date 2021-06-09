import React, { ReactElement, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import { Sidebar, Topbar } from '..';

export interface PageTemplateProps {
  children?: React.ReactNode;
  loading?: boolean;
  title?: string;
  titleButton?: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  pageTitle: {
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const PageTemplate = memo(({ children = <></>, title, titleButton }: PageTemplateProps): ReactElement => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {!!title && (
          <Box pb={3} display="flex" justifyContent="space-between">
            <Typography className={classes.pageTitle}>{title}</Typography>
            {!!titleButton && titleButton}
          </Box>
        )}
        {children}
      </main>
    </div>
  );
});

export default PageTemplate;
