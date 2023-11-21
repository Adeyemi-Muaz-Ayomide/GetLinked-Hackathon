import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
  background: rgba(255, 255, 255, 1);
  font-family: monospace; //Montserrat
  font-weight: 400;
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '100px')};
  `;



