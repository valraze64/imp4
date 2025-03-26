import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
 
// TypeScript interface for data
interface ExpenseData {
  name: string;
  current: number;
  referencePeriod: number; // Renamed from 'ref' to avoid conflicts
  runRate: number;
}
 
// Sample data
const data: ExpenseData[] = [
  { name: "P01", current: 15000, referencePeriod: 20000, runRate: 14000 },
  { name: "P02", current: 10000, referencePeriod: 12000, runRate: 13000 },
  { name: "P03", current: 14000, referencePeriod: 15000, runRate: 16000 },
  { name: "P04", current: 7000, referencePeriod: 10000, runRate: 11000 },
  { name: "P05", current: 13000, referencePeriod: 18000, runRate: 15000 },
  { name: "P06", current: 5000, referencePeriod: 7000, runRate: 9000 },
  { name: "P07", current: 14000, referencePeriod: 17000, runRate: 16000 },
  { name: "P08", current: 16000, referencePeriod: 20000, runRate: 18000 },
  { name: "P09", current: 4000, referencePeriod: 6000, runRate: 8000 },
  { name: "P10", current: 5000, referencePeriod: 9000, runRate: 10000 },
  { name: "P11", current: 15000, referencePeriod: 17000, runRate: 14000 },
  { name: "P12", current: 12000, referencePeriod: 14000, runRate: 13000 },
  { name: "P13", current: 13000, referencePeriod: 16000, runRate: 14000 },
];
 
const ExpenseChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
 
        {/* Orange bars for current period */}
        <Bar dataKey="current" fill="#ff8200" name="Current Period" />
 
        {/* Blue bars for reference period */}
        <Bar dataKey="referencePeriod" fill="#0000a0" barSize={6} name="Reference Period" />
 
        {/* Green line for run rate */}
        <Line type="monotone" dataKey="runRate" stroke="green" strokeWidth={2} name="Run Rate" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
 
export default ExpenseChart;