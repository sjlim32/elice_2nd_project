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
    전체신고건수: 19.33,
  },
];

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
