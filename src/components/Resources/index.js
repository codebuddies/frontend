import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonalMenu from "../PersonalMenu";
import Search from "../Search";
import Grid from "@material-ui/core/Grid";
import { ResourceCard } from "./ResourceCard";

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
