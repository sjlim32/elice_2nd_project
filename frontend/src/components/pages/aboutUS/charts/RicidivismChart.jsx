import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "19년 1월",
    전체신고건수: 19660,
    "가정폭력 재발 신고건": 6311,
  },
  {
    name: "19년 2월",
    전체신고건수: 19205,
    "가정폭력 재발 신고건": 6228,
  },
  {
    name: "19년 3월",
    전체신고건수: 20175,
    "가정폭력 재발 신고건": 6561,
  },
  {
    name: "19년 4월",
    전체신고건수: 18819,
    "가정폭력 재발 신고건": 5934,
  },
  {
    name: "19년 5월",
    전체신고건수: 19845,
    "가정폭력 재발 신고건": 6350,
  },
  {
    name: "19년 6월",
    전체신고건수: 21080,
    "가정폭력 재발 신고건": 6699,
  },
  {
    name: "19년 7월",
    전체신고건수: 21755,
    "가정폭력 재발 신고건": 7009,
  },
  {
    name: "19년 8월",
    전체신고건수: 21793,
    "가정폭력 재발 신고건": 6969,
  },
  {
    name: "19년 9월",
    전체신고건수: 21980,
    "가정폭력 재발 신고건": 7185,
  },
  {
    name: "19년 10월",
    전체신고건수: 19421,
    "가정폭력 재발 신고건": 6507,
  },
  {
    name: "19년 11월",
    전체신고건수: 17881,
    "가정폭력 재발 신고건": 6098,
  },
  {
    name: "19년 12월",
    전체신고건수: 18970,
    "가정폭력 재발 신고건": 6347,
  },
  {
    name: "20년 1월",
    전체신고건수: 19574,
    "가정폭력 재발 신고건": 6608,
  },
  {
    name: "20년 2월",
    전체신고건수: 17595,
    "가정폭력 재발 신고건": 5790,
  },
  {
    name: "20년 3월",
    전체신고건수: 18784,
    "가정폭력 재발 신고건": 6276,
  },
  {
    name: "20년 4월",
    전체신고건수: 18334,
    "가정폭력 재발 신고건": 6250,
  },
  {
    name: "20년 5월",
    전체신고건수: 19451,
    "가정폭력 재발 신고건": 6425,
  },
  {
    name: "20년 6월",
    전체신고건수: 18487,
    "가정폭력 재발 신고건": 5967,
  },
  {
    name: "20년 7월",
    전체신고건수: 19409,
    "가정폭력 재발 신고건": 6459,
  },
  {
    name: "20년 8월",
    전체신고건수: 20499,
    "가정폭력 재발 신고건": 6752,
  },
  {
    name: "20년 9월",
    전체신고건수: 18749,
    "가정폭력 재발 신고건": 6180,
  },
  {
    name: "20년 10월",
    전체신고건수: 18728,
    "가정폭력 재발 신고건": 6226,
  },
];

export default function RicidivismChart() {
  return (
    <>
      <Title>월별 전국 가정폭력 출동 신고 및 재범 여부</Title>
      <BarChart
        width={700}
        height={550}
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 0,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} tickMargin={30} interval={0} />
        <YAxis />
        <Tooltip />
        <Legend
          iconType={"square"}
          iconSize={10}
          verticalAlign="top"
          align="right"
          height={30}
        />
        <Bar
          dataKey="가정폭력 재발 신고건"
          stackId="a"
          fill="#3e4e34"
          animationBegin={0}
          animationDuration={500}
        />
        <Bar
          dataKey="전체신고건수"
          stackId="a"
          fill="#a7c097"
          animationBegin={0}
          animationDuration={500}
        />
      </BarChart>
    </>
  );
}

const Title = styled.h2`
  margin-bottom: auto;
`;
