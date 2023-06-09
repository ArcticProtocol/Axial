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
    { month: "Jan", offset: 20, goal: 20 },
    { month: "Feb", offset: 35, goal: 30 },
    { month: "Mar", offset: 50, goal: 25 },
    { month: "Apr", offset: 40, goal: 35 },
    { month: "May", offset: 65, goal: 55 },
    { month: "Jun", offset: 80, goal: 55 },
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
        <Line
          type="monotone"
          dataKey="goal"
          stroke="#2b72ee"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default MonthlyOffsetChart;
