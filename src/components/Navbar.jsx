import styled from "styled-components";
import { H2, Span } from "./Text/Texts";
import HamburgerIcon from "../icons/HamburgerIcon";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5em;
  margin-top: 10px;

  /* height: 50px; */
`;

export default function Navbar() {
  return (
    <>
      <Nav>
        <H2>
          get<Span>linked</Span>
        </H2>
        <HamburgerIcon />
      </Nav>
      <hr />
    </>
  );
}
