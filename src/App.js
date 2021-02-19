import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Dashboard} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
