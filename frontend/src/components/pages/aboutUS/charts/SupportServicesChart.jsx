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
    name: "가정폭력 상담소",
    value: 74.9,
  },
  {
    name: "가정폭력 피해자 보호시설",
    value: 58.2,
  },
  {
    name: "1366",
    value: 43.3,
  },
  {
    name: "긴급신고 112",
    value: 65.1,
  },
  {
    name: "아동보호전문기관",
    value: 59.7,
  },
  {
    name: "노인보호전문기관",
    value: 48.6,
  },
];

export default function SupportServicesChart() {
  return (
    <>
      <BarChart
        width={600}
        height={550}
        data={data}
        margin={{
          top: 0,
          right: 50,
          left: 0,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
      </BarChart>
    </>
  );
}
