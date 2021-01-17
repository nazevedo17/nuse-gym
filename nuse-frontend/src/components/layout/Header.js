import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { Router } from '../../i18n';

import A from '../../components/util/A';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, Typography, ListItem, ListItemIcon, Button } from '@material-ui/core';
import { Add, ExitToApp, Search, Refresh } from '@material-ui/icons';

import Cookies from 'js-cookie';

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
    height: '100%',
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  listItemIcon: {
    width: '100%',
    minWidth: 'unset',
  },
  icon: {
    margin: 'auto',
  },
  ul: {
    height: '100%',
  },
  logout: {
    position: 'absolute',
    bottom: 8,
  },
  li: {
    '&:hover > div': {
      color: theme.palette.secondary.main,
    },
  },
  hover: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const Header = ({ t, handleAdd, handleFind, handleRefresh }) => {
  const classes = useStyles();

  const router = useRouter();

  const handleLogout = () => {
    Cookies.set('token', '');
    Router.push('/login');
  };

  useEffect(() => {
    if (!Cookies.get('token')) {
      handleLogout();
    }
  }, [Cookies.get('token')]);

  const handleColor = (pathname) => {
    if (router.pathname === pathname) {
      return 'secondary';
    }
    return 'inherit';
  };

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <A href="/customers">
            <Typography variant="h6" className={classes.title}>
              Nuse Gym
            </Typography>
          </A>
          <A href="/customers">
            <Button color={handleColor('/customers')} className={classes.hover}>
              {t('pages.customers')}
            </Button>
          </A>
          <A href="/measurements">
            <Button color={handleColor('/measurements')} className={classes.hover}>
              {t('pages.measurements')}
            </Button>
          </A>
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
          <List className={classes.ul}>
            {handleAdd && (
              <ListItem button className={classes.li} onClick={handleAdd}>
                <ListItemIcon className={classes.listItemIcon}>
                  <Add className={classes.icon} />
                </ListItemIcon>
              </ListItem>
            )}
            {handleFind && (
              <ListItem button className={classes.li} onClick={handleFind}>
                <ListItemIcon className={classes.listItemIcon}>
                  <Search className={classes.icon} />
                </ListItemIcon>
              </ListItem>
            )}
            {handleRefresh && (
              <ListItem button className={classes.li} onClick={handleRefresh}>
                <ListItemIcon className={classes.listItemIcon}>
                  <Refresh className={classes.icon} />
                </ListItemIcon>
              </ListItem>
            )}
            <ListItem button className={`${classes.logout} ${classes.li}`} onClick={handleLogout}>
              <ListItemIcon className={classes.listItemIcon}>
                <ExitToApp className={classes.icon} />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  handleAdd: PropTypes.func,
  handleFind: PropTypes.func,
  handleRefresh: PropTypes.func,
};

export default Header;
