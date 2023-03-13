import Chart1 from "../components/charts/Chart1";
import Chart2 from "../components/charts/Chart2";
import Chart3 from "../components/charts/Chart3";
import styled from "styled-components";

function AboutUsPage() {
  return (
    <Container>
      <h1> AboutUs 24/7</h1>
      <Chart1 />
      <Chart2 />
      <Chart3 />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AboutUsPage;
