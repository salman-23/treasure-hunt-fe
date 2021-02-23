import { Link } from "react-router-dom";
import { GoButtonStyled } from "../styles";
import {  useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      {user ? (
      <>
          <h1>Treasuer Hunt</h1>
          
          <Link to="/treasures">
            <GoButtonStyled>
              <h3>Go to Treasers</h3>
            </GoButtonStyled>
          </Link>
      </>
        ):
        <>
          <Link to="/things">
              <GoButtonStyled>
                <h3>Go to Things</h3>
              </GoButtonStyled>
          </Link>
          </>
      }
    
     
    </>
  );
};

export default Home;
