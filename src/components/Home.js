import { Link } from "react-router-dom";
import { GoButtonStyled } from "../styles";
const Home = () => {
  return (
    <div>
      <h1>Treasuer Hunt</h1>
      <Link to="/things">
        <GoButtonStyled>
          <h3>Go to Things</h3>
        </GoButtonStyled>
      </Link>
      <Link to="/treasers">
        <GoButtonStyled>
          <h3>Go to Treasers</h3>
        </GoButtonStyled>
      </Link>
    </div>
  );
};

export default Home;
