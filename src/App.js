import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, GoogleMapMap } from "./Components";
import './index.css'

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <GoogleMapMap />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
