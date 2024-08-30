import {motion} from "framer-motion"
import { Bar,BarChart,XAxis,YAxis,ResponsiveContainer,Legend,Tooltip,CartesianGrid } from "recharts"

const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];


const DailyTrendChart = () => {
  return (
    <div className="dark:bg-gray-800 bg-gray-200
dark:border-gray-700 border-gray-300 bg-opacity-50 backdrop-blur-lg p-6 shadow-lg rounded-xl border ">
        <h1 className="font-semibold text-xl dark:text-gray-100 text-gray-900">Daily Trend</h1>
        <div className="h-80">
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={"0.5"} />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                        cursor={{ stroke: "#6366F1", strokeWidth: 1 }}
                        contentStyle={{ backgroundColor: "#1E293B", border: "none" }}
                        labelStyle={{ color: "#ffffff" }}
                        itemStyle={{ color: "#ffffff" }}
                        formatter={(value) => new Intl.NumberFormat("en").format(value)}
                    />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="sales" fill="#20C997" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default DailyTrendChart