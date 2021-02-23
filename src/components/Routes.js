import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import TreasureList from "./TreasureList";
import ThingList from "./ThingList";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

const Routes = () => {
  const things = useSelector((state) => state.thingsReducer.things);
  return (
    <Switch>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/signin">
        <SigninForm />
      </Route>
      <Route path="/treasures">
       <TreasureList things={things} /> 
      </Route>
      <Route path="/things">
        <ThingList things={things} />
        
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
