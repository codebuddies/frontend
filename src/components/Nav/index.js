import React, { useState, useRef, useEffect, useContext } from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Button,
  ClickAwayListener,
  IconButton,
  Grow,
  MenuList,
  MenuItem,
  Paper,
  Popper,
} from '@material-ui/core';
import { AuthContext } from '../Auth/AuthContext';

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
  const authContext = useContext(AuthContext);

  const logout = () => {
    authContext.setAuthTokens();
    localStorage.clear('tokens');
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
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="Codebuddies Logo"
                width="200"
                className={classes.logo}
              />
            </Link>
          </li>
        </div>
        <div className={classes.navItems}>
          <li>
            <Link href="/about">
              <Button component="a">About</Button>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <Button component="a">Resources</Button>
            </Link>
          </li>
          <li>
            <IconButton
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <Link href="/profile">
                <AccountCircleIcon />
              </Link>
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
                          <a onClick={logout}>Logout</a>
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
