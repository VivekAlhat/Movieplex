import Spinner from "react-spinkit";
import { LoadingContainer } from "./styled/styled";

const Loading = () => (
  <LoadingContainer>
    <Spinner name="ball-scale-multiple" color="white" />
  </LoadingContainer>
);

export default Loading;
