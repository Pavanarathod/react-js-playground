import {
  Button,
  Container,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

const userStyles = makeStyles({
  btn: {
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  fields: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const classes = userStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [controls, setcontrols] = useState("Python");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log({
      title,
      details,
      controls,
    });
  };

  return (
    <Container>
      <Typography variant="h1" color="secondary">
        Create New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={classes.fields}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        />{" "}
        <TextField
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={classes.fields}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
        />{" "}
        <RadioGroup
          value={controls}
          onChange={(e) => setcontrols(e.target.value)}
        >
          <FormControlLabel control={<Radio />} value="ptyhon" label="Python" />
          <FormControlLabel control={<Radio />} value="java" label="Java" />
          <FormControlLabel control={<Radio />} value="js" label="Ruby" />
        </RadioGroup>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Create;
