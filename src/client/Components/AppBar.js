import { Tooltip } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness7";
import React from "react";
import Logo from '../Svgs/Logo';
import InstallPWA from "./InstallPWA";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  logoimg: {
    // backgroundColor: theme.palette.background.default,
    // borderRadius:'1'
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
  },
  AppBar: {
    background: theme.palette.background.paper,
    boxShadow: `0 0 8px rgb(0 0 0 / 17%)`
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  // console.log(theme)
  const [openInfo, setOpenInfo] = React.useState(false);

  const handleClickOpen = () => {
    setOpenInfo(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.AppBar} elevation='0' boxShadow='1'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Logo primaryColor={theme.palette.primary.main} secondaryColor={theme.palette.secondary.main}></Logo>
          </Typography>
          <Tooltip title="Change Theme">
            <IconButton color="inherit" onClick={props.changeTheme} className={classes.icon}>
              {!props.isDark ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
            </IconButton>
          </Tooltip>
          <InstallPWA></InstallPWA>
        </Toolbar>
      </AppBar>
    </div>
  );
}
