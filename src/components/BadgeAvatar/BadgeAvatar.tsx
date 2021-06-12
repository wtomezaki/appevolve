import React from 'react';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Badge, Avatar } from '@material-ui/core';

const StyledBadge = withStyles(() =>
  createStyles({
    badge: {
      height: '28%',
      width: '28%',
      backgroundColor: '#55A3AE',
      borderRadius: '100%',
      color: '#55A3AE',
    },
  })
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  })
);

interface Props {
  name: string;
  imgSrc: string;
}

const BadgeAvatar = ({ name, imgSrc }: Props): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt={name} src={imgSrc} />
      </StyledBadge>
    </div>
  );
};

export default BadgeAvatar;
