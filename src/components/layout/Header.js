import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, AppBar, Toolbar, List, Typography, ListItem, ListItemIcon } from '@material-ui/core';
import { AccountCircle, Home, Group } from '@material-ui/icons';

const drawerWidth = 75;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  title: {
    flexGrow: 1,
  },
  listItemIcon: {
    width: '100%',
    minWidth: 'unset',
  },
  icon: {
    margin: 'auto',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nuse Gym
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon className={classes.listItemIcon}>
                <Home color="secondary" className={classes.icon} />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.listItemIcon}>
                <Group className={classes.icon} />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
