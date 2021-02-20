import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { SnackbarProvider } from "notistack";
import DateFnsUtils from '@date-io/date-fns';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <App />
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
