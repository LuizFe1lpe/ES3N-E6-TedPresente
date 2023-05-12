import { colors } from "@shared/themes/colors";
import styled, { keyframes } from "styled-components";
import Label from "../label";

interface LoaderProps {
  message?: string;
}

export const Loader = ({ message }: LoaderProps) => {
  return (
    <Container>
      <Spinner className="corpo">
        <div className="loader"></div>
      </Spinner>
      <Label size={18} color={colors.primary} marg={"20px"}>
        {message}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    height: auto;
    margin-top: 100px;
  }
`;

const spin = keyframes`
0% {
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
 }

 100% {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
 }
`;

const Spinner = styled.div`
  .corpo {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
  }

  .loader {
    --clr: ${colors.primary};
    width: 50px;
    height: 50px;
    position: relative;
  }

  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 5px solid transparent;
    border-top-color: var(--clr);
  }

  .loader:before {
    z-index: 100;
    animation: ${spin} 1s infinite;
  }

  .loader:after {
    border: 5px solid #ccc;
  }
`;
