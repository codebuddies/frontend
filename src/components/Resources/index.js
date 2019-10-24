import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonalMenu from "../PersonalMenu";
import Search from "../Search";
import Grid from "@material-ui/core/Grid";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { ResourceCard } from "./ResourceCard";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  textArea: {
    fontFamily: 'inherit',
    outline: 0,
    boxShadow: "none",
    border: 'none',
    borderBottom: '1px solid #ced4da',
    borderRadius: 0,
    boxSizing: "content-box",
    backgroundColor: "transparent",
    overflowY: "hidden",
    margin: "5px"
  },
}));

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/resources")
      .then(function(response) {
        // handle success
        setResources(response.data);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      {console.log(resources)}

      <Grid container spacing={1}>
        <Grid item lg={3}>
          <PersonalMenu />
        </Grid>
        <Grid item lg={9}>
          <h2>Resources</h2>
          <Search label="Search resources" />
          <br />
          <Grid container spacing={1}>
            {resources.map(resource => {
              return (
                <Grid item lg={3} key={resource.id}>
                  <ResourceCard {...resource} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resources;
