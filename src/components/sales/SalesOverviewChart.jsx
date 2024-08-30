import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="dark:bg-gray-800 bg-gray-200
dark:border-gray-700 border-gray-300 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border p-6 mt-8"
    >
      <div className="flex items-center justify-between mb-3">
        <h1 className="dark:text-gray-100 text-gray-900 text-xl font-semibold ">
          Sales Overview
        </h1>
        <select className="dark:bg-gray-700 bg-gray-300 dark:text-gray-100 text-gray-900 px-4 py-1 border-lg outline-none focus:outline-blue-500">
            <option value="yearly">This Week</option>
            <option value="monthly">This Month</option>
            <option value="yearly">This Quarter</option>
            <option value="yearly">This Year</option>
        </select>
      </div>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart data={monthlySalesData}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={"0.5"} />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              cursor={{ stroke: "#6366F1", strokeWidth: 1 }}
              contentStyle={{ backgroundColor: "#1E293B", border: "none" }}
              labelStyle={{ color: "#ffffff" }}
              itemStyle={{ color: "#ffffff" }}
              formatter={(value) => new Intl.NumberFormat("en").format(value)}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              fill="#6366F1"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
