import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2019",
    "가정폭력 신고 비율": 19.33,
  },
  {
    name: "2020",
    "가정폭력 신고 비율": 19.63,
  },
  {
    name: "2021",
    "가정폭력 신고 비율": 22.77,
  },
];

//! Annotation 구현 안됨
// const Annotation = (props) => {
//   return (
//     <text
//       x={props.x}
//       y={props.y}
//       fill="#ff0000"
//       fontSize="10"
//       textAnchor="middle"
//       transform={`rotate(${props.rotation}, ${props.x}, ${props.y})`}
//     >
//       {props.text}
//     </text>
//   );
// };

export default function RicidivismChart() {
  return (
    <BarChart
      width={600}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" 년 />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="top" height={36} align="center" />
      <Bar
        dataKey="가정폭력 신고 비율"
        fill="#ff8c00"
        barSize={50}
        label={{ position: "top" }}
      />
      {/* <Annotation rotation={12} x={150} y={150} text="2년간 2.2% 증가" /> */}
    </BarChart>
  );
}
