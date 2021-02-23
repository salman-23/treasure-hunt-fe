import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Components

// Styling
import { ThingWrapper } from "../styles";

const ThingItem = (props) => {
  const thing = props.thing;

  return (
    <ThingWrapper>
      <Helmet>
        <title>Things</title>
      </Helmet>
      <Link to={`/things/${thing.slug}`}>
        <img alt={thing.name} src={thing.image} />
      </Link>
      <p>{thing.name}</p>
    </ThingWrapper>
  );
};

export default ThingItem;
