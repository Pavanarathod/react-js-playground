import { Formik, Field } from "formik";
import { useHistory } from "react-router-dom";

const CommonForm = ({ initialValues, fields }) => {
  const history = useHistory();

  const showValues = (data) => {
    console.log(data);
    history.push("/about");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(data) => showValues(data)}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              {field.type === "text" && (
                <input
                  type={field.type}
                  name={field.name}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              )}
              {field.type === "email" && (
                <input
                  type={field.type}
                  name={field.name}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              )}
              {field.type === "password" && (
                <input
                  type={field.type}
                  name={field.type}
                  value={values[field.name]}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              )}
              {field.type === "checkbox" && (
                <input
                  type={field.type}
                  name={field.type}
                  value={values[field.name]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default CommonForm;
