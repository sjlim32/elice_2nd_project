import { PieChart, Pie, Cell, Legend } from "recharts";
import styled from "styled-components";

const data = [
  { name: "폭력 허용적 사회문화의 개선", value: 24.9 },
  { name: "가정폭력 관련 법 및 지원서비스 홍보", value: 15.5 },
  { name: "그 외", value: 59.6 },
];
const COLORS = ["#ff7473", "#47b8e0", "#5e5e5f"];

export default function SurveyResultsChart() {
  return (
    <>
      <Title>가정폭력 감소를 위한 정책 설문 결과</Title>
      <PieChart width={600} height={300}>
        <Pie
          data={data}
          cx={"50%"}
          cy={"70%"}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={5}
          dataKey="value"
          label={{ value: { data }, position: "insideStart" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
