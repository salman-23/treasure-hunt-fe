import { Link } from "react-router-dom";
import Home from "./components/Home";

import { GlobalStyle, GoButtonStyled } from "./styles";
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Home /> */}
      <NavBar />

      <Routes />
    </>
  );
};

export default App;
