import { Link, useLocation } from "react-router-dom";
import { LoadingContainer } from "./styled/styled";

const Empty = () => {
  const location = useLocation();

  return (
    <LoadingContainer>
      <div style={{ color: "#dddddd", textAlign: "center" }}>
        <p>
          Ah! So empty ...
          {location.pathname.substr(0, 7) === "/search" && (
            <span>Please search again ...</span>
          )}
        </p>
        <p>
          Click&nbsp;
          <Link to="/" style={{ color: "#dddddd" }}>
            here&nbsp;
          </Link>
          to see list of all movies.
        </p>
      </div>
    </LoadingContainer>
  );
};

export default Empty;
