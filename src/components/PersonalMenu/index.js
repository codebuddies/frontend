import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function PersonalMenu() {
  return (
    <>
      <h2>Personal Menu</h2>
      <List>
        {[
          { text: 'Profile', icon: <AccountCircleIcon /> },
          { text: 'My Messages', icon: <MailIcon /> },
          { text: 'My Hangouts', icon: <EventAvailableIcon /> },
          { text: 'My Groups', icon: <GroupIcon /> },
          { text: 'My Projects', icon: <AccountTreeIcon /> },
          { text: 'My Resources', icon: <BookmarksIcon /> },
          { text: 'Email Settings', icon: <SettingsIcon /> },
          { text: 'Connect Matches', icon: <SettingsInputAntennaIcon /> },
        ].map(({ text, icon }, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Link to="/coworking">24/7 Coworking Space</Link>
        </ListItem>
        <ListItem>
          <Typography>25 people online right now</Typography>
        </ListItem>
      </List>
    </>
  );
}
