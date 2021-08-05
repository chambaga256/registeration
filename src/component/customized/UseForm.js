import { useState } from "react";
import useStyles from "./styles";
export function UseForm(state, validationOnChange = false) {
  const [values, setValues] = useState(state);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [next, setNext] = useState(true);
  const [showTime,setShowTime] = useState(false);
  // function to show password
  const handleShowPassword = () => {
    setShowPassword((prevshowPassword) => !prevshowPassword);
  };
  
  // Validating the forms
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "This email is invalid";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length >= 8
          ? ""
          : "Password must be aleast 8 characters, with aleast one capital letter, a special character and number *#@A!1";
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  // function for all input changes of a form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // function on the login page but allow switch back and forth
  const nextpage = () => {
    setNext((prevnext) => !prevnext);
    
  };
  const handleSubmit = (e) => {
    e.preventDefault()
};
  return {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
    showPassword,
    handleShowPassword,
    next,
    nextpage,
    validate,
    handleSubmit,
  };
}

export function Form({ children,onSubmit, ...other }) {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
}
