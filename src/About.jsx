import styled from "styled-components";
import { H1, H3, Paragraph, Span } from "./components/Text/Texts";
// import Button from './components/Buttons/Button'
import CurvedPinkIcon from "./icons/CurvedPinkIcon";
import YellowBulb from "./icons/YellowBulb";
import PadlockIcon from "./icons/PadlockIcon";
import FireIcon from "./icons/FireIcon";

const StyledAbout = styled.div``;
export default function About() {
  return (
    <div>
      <H3>Igniting a Revolution in HR Innovation</H3>
      <CurvedPinkIcon />
      {/* <YellowBulb /> */}
      <H1>
        getlinked Tech <br /> Hackathon <Span> 1.0</Span>
      </H1>
      <PadlockIcon />
      <FireIcon />
      <Paragraph>
        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big
        prize
      </Paragraph>
      {/* <Button>Register</Button> */}

    </div>
  );
}
