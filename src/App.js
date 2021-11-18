import { Formik, Field, Form, useField } from "formik";
import {
  Button,
  TextField,
  Checkbox,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

import * as yup from "yup";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validateSchema = yup.object({
  firstName: yup.string().required().max(10),
});

const App = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    isTall: false,
    cookies: [],
    yogurt: "",
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => onSubmit(data)}
        validationSchema={validateSchema}

        // validate={(values) => {
        //   const errors = {};

        //   if (values.firstName.includes("bob")) {
        //     errors.firstName = "No bob";
        //   }
        //   return errors;
        // }}
      >
        {({ values, errors }) => (
          <Form>
            <MyTextField
              placeholder="firstName"
              name="firstName"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                placeholder="lastName"
                name="lastName"
                type="input"
                as={TextField}
              />
            </div>
            <Field type="checkbox" as={Checkbox} name="isTall" />
            <div>Cookies:</div>
            <Field
              type="checkbox"
              as={Checkbox}
              value="suger bites"
              name="cookies"
            />
            <Field
              type="checkbox"
              as={Checkbox}
              value="Chacko punch"
              name="cookies"
            />
            <Field
              type="checkbox"
              as={Checkbox}
              value="Parle g"
              name="cookies"
            />
            <div>Yogurt:</div>
            <MyRadio type="radio" name="yogurt" value="peach" label="peach" />
            <MyRadio
              type="radio"
              name="yogurt"
              value="blueberry"
              label="blueberry"
            />
            <MyRadio type="radio" name="yogurt" value="candy" label="candy" />
            <div>
              <Button type="submit">submit</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
