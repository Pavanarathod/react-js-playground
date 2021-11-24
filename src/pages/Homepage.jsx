import CommonForm from "../components/CommonForm";

const Homepage = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    job: false,
  };

  const registerFields = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      placeholder: "First Name",
    },
    {
      id: 2,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      id: 3,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      id: 5,
      type: "checkbox",
      name: "job",
    },
  ];

  return (
    <div>
      <CommonForm initialValues={initialValues} fields={registerFields} />
    </div>
  );
};

export default Homepage;
