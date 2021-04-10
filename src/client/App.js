import { Button, Container, CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect, useState } from "react";
import AppBar from "./Components/AppBar";
import * as serviceWorker from "./serviceWorker";
import GreenYellow from "./Themes/GreenYellow";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          ...GreenYellow,
          background: {
            paper: darkMode ? "#222b45" : "white",
            default: darkMode ? "#1a2138" : "#f7f9fc"
          }
        },

      }),
    [darkMode]
  );

  const onServiceWorkerUpdate = (registration) => {
    console.log("onServiceWorkerUpdate");
    setNewVersionAvailable(true);
    setWaitingWorker(registration && registration.waiting);
    if (newVersionAvailable)
      //show snackbar with refresh button
      enqueueSnackbar("A new version is avaible", {
        persist: true,
        variant: "success",
        action: refreshAction(),
      });
  };

  const updateServiceWorker = () => {
    console.log("updateServiceWorker");
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    setNewVersionAvailable(false);
    window.location.reload();
  };

  const refreshAction = (key) => {
    return (
      <Fragment>
        <Button
          className="snackbar-button"
          size="small"
          onClick={updateServiceWorker}
        >
          {"refresh"}
        </Button>
      </Fragment>
    );
  };
  useEffect(() => {
    console.log("Regstering..");
    serviceWorker.register({ onUpdate: onServiceWorkerUpdate });
  }, []);

  useEffect(() => {
    let dmode = localStorage.getItem("darkMode");
    dmode === "false" ? setDarkMode(false) : setDarkMode(true);
  }, []);


  const changeTheme = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar title={"Faver"} changeTheme={changeTheme} isDark={darkMode}></AppBar>
      <Container>

      </Container>
    </ThemeProvider>
  );
}

export default App;
