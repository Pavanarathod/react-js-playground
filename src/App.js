import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardAction,
  CardMedia,
  CssBaseline,
  Toolbar,
  Container,
  ButtonGroup,
  Button,
  Grid,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./styles/styles";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline>
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm" className={classes.container}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textPrimary"
                paragraph
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                beatae et ad fugiat nulla corporis optio rem deserunt iste
                tenetur.
              </Typography>
              <div>
                <Grid container spaceing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See My Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      See My Photos
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </CssBaseline>
    </>
  );
};

export default App;
