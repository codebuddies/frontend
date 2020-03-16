import React, { useState, useRef, useEffect, useContext } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AuthContext from '../Auth/AuthContext';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: '1em 0em',
  },
  ul: {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0',
  },
  navItems: {
    display: 'flex',
    alignItems: 'center',
    '& li': {
      margin: '0em .5em',
    },
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const anchorRef = useRef(null);
  const { setAuthTokens } = useContext(AuthContext);
  console.log(setAuthTokens);

  const logout = () => {
    setAuthTokens();
  };

  const handleMenuOpen = () => {
    setIsMenuExpanded(prevMenuState => !prevMenuState);
  };

  const handleMenuClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setIsMenuExpanded(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsMenuExpanded(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevMenuState = useRef(isMenuExpanded);
  useEffect(() => {
    if (prevMenuState.current === true && isMenuExpanded === false) {
      anchorRef.current.focus();
    }

    prevMenuState.current = isMenuExpanded;
  }, [isMenuExpanded]);

  return (
    <nav className={classes.root}>
      <ul className={classes.ul}>
        <div className={classes.logoArea}>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" width="200" className={classes.logo} />
            </Link>
          </li>
        </div>
        <div className={classes.navItems}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/newsfeed">Newsfeed</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/groups">Groups</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <IconButton
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <AccountCircleIcon />
            </IconButton>
            <Popper
              open={isMenuExpanded}
              anchorEl={anchorRef.current}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper id="menu-list-grow">
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList
                        autoFocusItem={isMenuExpanded}
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleMenuClose}>
                          <Link onClick={logout}>Logout</Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </li>
        </div>
      </ul>
    </nav>
  );
}
