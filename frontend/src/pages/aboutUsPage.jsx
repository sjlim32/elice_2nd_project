import ReportRateChart from "../components/pages/aboutUS/charts/ReportRateChart";
import RicidivismChart from "../components/pages/aboutUS/charts/RicidivismChart";
import ArrestedChart from "../components/pages/aboutUS/charts/ArrestedChart";
import styled from "styled-components";
import bgImg from "../images/aboutus_back_image.png";

function AboutUsPage() {
  return (
    <div>
      <BackgroundImgLayout>
        <Title>24/7은 언제 어디서나</Title>
        <Title>당신과 함께하겠습니다.</Title>
      </BackgroundImgLayout>
      <ChartLayout>
        <ReportRateChart />
        <ArrestedChart />
      </ChartLayout>
    </div>
  );
}

const BackgroundImgLayout = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: 1000;
  text-align: center;
  margin-bottom: 30px;
`;

const ChartLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AboutUsPage;
