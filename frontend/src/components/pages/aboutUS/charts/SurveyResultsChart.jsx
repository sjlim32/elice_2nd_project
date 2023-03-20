import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";
import {
  dataOfSurveyResults,
  colorsOfSurveyResults,
} from "../../../../utils/consts";

const percentFormat = (value) => `${value}%`;

export default function SurveyResultsChart() {
  return (
    <>
      <Title>가정폭력 감소를 위한 정책 설문 결과</Title>
      <PieChart width={600} height={300}>
        <Pie
          data={dataOfSurveyResults}
          cx={"50%"}
          cy={"70%"}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
          label={({ value }) => `${percentFormat(value)}`}
        >
          {dataOfSurveyResults.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colorsOfSurveyResults[index % colorsOfSurveyResults.length]}
            />
          ))}
        </Pie>
        <Legend layout="vertical" align="center" iconType="rect" />
      </PieChart>
    </>
  );
}

const Title = styled.h2`
  margin-bottom: auto;
`;
