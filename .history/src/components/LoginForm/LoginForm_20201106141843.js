import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="on">
      <FormControl>
        <InputLabel htmlFor="login">Login</InputLabel>
        <Input
          id="login"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          startAdornment={
            <InputAdornment position="start">
              <LockRoundedIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default LoginForm;
