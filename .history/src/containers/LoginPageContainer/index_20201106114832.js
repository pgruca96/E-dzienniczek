import React from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  Grid,
  Container,
  Paper,
  Box,
  Card,
  CardMedia,
} from "@material-ui/core";
import background from "../../assets/background.jpg";
import { loginPanel as backgroundPanelColor } from "../../styles/background";
import readingBook from "../../assets/reading-book.png";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: `url(${background}) fixed left `,
          backgroundSize: `100%`,
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const LoginPageContainer = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container justify="flex-end">
        <Grid container item sm={4}>
          <Box minHeight="100vh" width="100%" bgcolor={backgroundPanelColor}>
            <Grid item sm={12}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
              </Card>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default LoginPageContainer;
