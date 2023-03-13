import Chart1 from "../components/pages/aboutUS/charts/chart1";
import Chart2 from "../components/pages/aboutUS/charts/chart2";
import Chart3 from "../components/pages/aboutUS/charts/chart3";
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
