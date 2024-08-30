import { motion } from "framer-motion";
import {
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const orderStatusData = [
  { name: "Pending", value: 30 },
  { name: "Processing", value: 45 },
  { name: "Shipped", value: 60 },
  { name: "Delivered", value: 120 },
];

const COLORS = ["#6366F1", "#F59E0B", "#10B981", "#8B5CF6"];

const OrdersStatusDistribution = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 ,delay:0.3}}
    className="dark:bg-gray-800 bg-gray-200
 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl border dark:border-gray-700 border-gray-300 mb-8 p-6">
      <h2 className="dark:text-gray-100 text-gray-900 text-xl font-semibold mb-3">
        Orders Status Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
            data={orderStatusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#6366F1"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
                {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
              <Legend
                verticalAlign="bottom"
                align="center"
                iconSize={10}
                iconType="diamond"
                wrapperStyle={{
                  paddingTop: "20px",
                }}
              />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default OrdersStatusDistribution;
