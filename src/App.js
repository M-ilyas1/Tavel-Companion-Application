import React from "react";
// import { CssBaseline, Grid } from "@material-ui/core";
import { Header, List, GoogleMapMap } from "./Components";
import "./index.css";

function App() {
  return (
    <div> 
      {/* <CssBaseline /> */}
      <div className="flex justify-center items-center">
        <div className="max-w-[1920px]">
          <Header />
          <div className=" grid grid-cols-1 md:grid-cols-3 items-start">
            <div className="col-span-1 flex justify-center items-center">
              <div className="w-[100%] md:w-[90%]">
                <List />
              </div>
            </div>
            <div className="col-span-2  overflow-hidden h-[80vh] md:h-[117vh]">
              <GoogleMapMap />
            </div>
          </div>
        </div>
      </div>
      {/* <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
         <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <GoogleMapMap />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
