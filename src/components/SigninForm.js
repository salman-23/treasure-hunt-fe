import { useState } from "react";
import { UpdateButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin } from "../store/actions/authActions";

const SigninForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChnage = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const restForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
    restForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>

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

        <UpdateButtonStyled onSubmit={handleSubmit}>Sign In</UpdateButtonStyled>
      </form>
    </div>
  );
};

export default SigninForm;
