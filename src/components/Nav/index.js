import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: "1em 0em"
  },
  ul: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    width: "100%",
    padding: "0"
  },
  navItems: {
    display: "flex",
    "& li": {
      margin: "0em .5em"
    }
  }
}));

export default function Nav() {
  const classes = useStyles();
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
            <Link to="/resources">Resources</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
