import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { useCallback, useState } from "react";
import styled from "styled-components";

const data = [
  {
    name: "가정폭력 상담소",
    인지율: 74.9,
  },
  {
    name: "가정폭력 피해자 보호시설",
    인지율: 58.2,
  },
  {
    name: "1366",
    인지율: 43.3,
  },
  {
    name: "긴급신고 112",
    인지율: 65.1,
  },
  {
    name: "아동보호전문기관",
    인지율: 59.7,
  },
  {
    name: "노인보호전문기관",
    인지율: 48.6,
  },
];

export default function SupportServicesChart() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeItem = data[activeIndex];
  const handleClick = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <>
      <Title>가정폭력 관련 지원기관 인지 여부</Title>
      <BarChart
        width={600}
        height={550}
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 10,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" dy={25} interval={0} angle={-15} />
        <YAxis
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          label={{
            value: "단위(%)",
            position: "insideLeft",
            angle: -90,
            dx: -5,
          }}
          dx={-7}
        />
        <Tooltip />
        <Legend
          verticalAlign="top"
          height={30}
          align="right"
          iconType={"square"}
          iconSize={15}
        />
        <Bar dataKey="인지율" label={{ position: "top" }} onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#3e4e34" : "#a7c097"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      <p>{`"${activeItem.name}"의 인지율 ${activeItem.인지율}%`}</p>
    </>
  );
}

const Title = styled.h2`
  margin-bottom: auto;
`;
