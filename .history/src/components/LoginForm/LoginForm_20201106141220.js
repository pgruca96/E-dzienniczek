import React from "react";

const LoginForm = () => {
  return (
    <form>
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