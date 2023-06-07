import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const MonthlyOffsetChart = () => {
  const data = [
    { month: "Jan", offset: 20 },
    { month: "Feb", offset: 35 },
    { month: "Mar", offset: 50 },
    { month: "Apr", offset: 40 },
    { month: "May", offset: 65 },
    { month: "Jun", offset: 80 },
    { month: "Jul", offset: 60 },
    { month: "Aug", offset: 75 },
    { month: "Sep", offset: 55 },
    { month: "Oct", offset: 70 },
    { month: "Nov", offset: 90 },
    { month: "Dec", offset: 85 },
  ];

  return (
    <div style={{ width: "70%" }}>
      <LineChart width={1400} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="offset"
          stroke="#00C853"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};


export default MonthlyOffsetChart;