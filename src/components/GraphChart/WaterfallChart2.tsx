import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from "recharts";
import { useSelector } from "react-redux";
import { sortArray } from "../utils/util";

interface LocalObjectType {
  title: string;
  remainingBudget: number;
}

const WaterfallChart2: React.FC = () => {
  const reducerStateData = useSelector((state: any) => state.data);

  if (!reducerStateData) {
    console.error("Waterfall state is undefined");
    return null;
  }

  const categories = sortArray([
    "Budget",
    ...(reducerStateData?.local?.periods || ["dsa", "dsad"]),
    "Budget Left",
  ]);

  const data = [
    {
      name: "Budget",
      value: Number(reducerStateData?.apiFetched?.budgetData?.value) || 100000000,
      color: "#0000a0",
    },
    ...categories.slice(1, -1).map((period: string) => ({
      name: period,
      value: Number(
        reducerStateData?.apiFetched?.spendSummary?.find(
          (x: { title: string }) => x?.title === period
        )?.value
      ) || 0,
      color: "#ff8200",
    })),
    {
      name: "Budget Left",
      value:
        (Object.values(reducerStateData?.local).find(
          (x) => (x as LocalObjectType)?.title === "Total Budget"
        ) as LocalObjectType)?.remainingBudget || 11111110,
      color: "#00d7b9",
    },
  ];

  return (
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" scale="log" domain={["auto", "auto"]} />
      <Tooltip formatter={(value: number) => `$${value}`} />
      <Legend />
      <Bar dataKey="value" isAnimationActive={false}>
        <LabelList dataKey="value" position="top" formatter={(value: number) => `$${value}`} />
        {data.map((entry, index) => (
          <Bar key={`bar-${index}`} fill={entry.color} dataKey={""} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default WaterfallChart2;
