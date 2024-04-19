import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, Map } from "./Components";

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "1005" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
