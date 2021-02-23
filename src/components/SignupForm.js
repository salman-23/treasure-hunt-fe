import { useState } from "react";
import { SubmitButtonStyled, UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions/authActions";

const SignupForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChnage = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    restForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChnage}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChnage}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChnage}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChnage}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChnage}
          />
        </label>

        <UpdateButtonStyled onSubmit={handleSubmit}>Sign Up</UpdateButtonStyled>
      </form>
    </div>
  );
};

export default SignupForm;
