import { Cell, Legend, Pie, PieChart } from "recharts";

type OffsetPieParams = {
  totalUserOffsets: string;
};

const OffsetTypePie = ({ totalUserOffsets }: OffsetPieParams) => {
  const data = [
    { name: "ocean", value: 30 },
    { name: "nature", value: 50 },
    { name: "plastic", value: 20 },
  ];

  const COLORS = ["#00C853", "#2196F3", "#989898"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        opacity={0.8}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default OffsetTypePie;
