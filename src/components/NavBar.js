// Styling
import { ThemeButton, Logo, NavProduct, AuthButtonStyled } from "../styles";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { singout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSingout = () => {
    dispatch(singout());
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand">
      {/* <Logo exact to="/">
        <img
          className="navbar-brand"
          src="https://media.discordapp.net/attachments/797449550616068106/804257167925706762/light-logo.png?width=959&height=382"
        ></img>
      </Logo> */}
      <div className="navbar-nav ml-auto">
        {user ? (
          <p>Welcome {user.username}</p>
        ) : (
          <>
            <AuthButtonStyled>
              <NavProduct to="/signup" className="nav-item">
                Signup
              </NavProduct>
            </AuthButtonStyled>
            <AuthButtonStyled>
              <NavProduct to="/signin" className="nav-item">
                Signin
              </NavProduct>
            </AuthButtonStyled>
          </>
        )}

        {user && (
          <AuthButtonStyled onClick={handleSingout}>Singout</AuthButtonStyled>
        )}

        <NavProduct to="/things" className="nav-item">
          things
        </NavProduct>
        <NavProduct to="/treasures" className="nav-item">
          treasure
        </NavProduct>
   
      </div>
    </nav>
  );
};

export default NavBar;
