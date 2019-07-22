import React from 'react';
import { Grid, Hidden } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container style={{ height: '100vh' }} justify="space-around">
        <Grid item style={{ backgroundColor: 'pink' }} md={4} sm={6}>
          Hello
        </Grid>
        <Grid item style={{ backgroundColor: 'green' }} md={4} sm={6}>
          World
        </Grid>
        <Hidden smDown>
          <Grid item style={{ backgroundColor: 'blue' }} md={4}>
            Really
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default App;
