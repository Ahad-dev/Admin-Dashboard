import {motion} from 'framer-motion'
import { LineChart,Line,Legend,CartesianGrid,ResponsiveContainer,Tooltip,XAxis,YAxis } from 'recharts'


const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];


const SalesTrendChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 ,delay:0.5}}
        className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border dark:border-gray-700 border-gray-300"
    >
        <h2 className='dark:text-gray-100 text-gray-900 font-semibold text-xl mb-5 '>Sales Trend</h2>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={"100%"}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'} />
                    <XAxis dataKey='month' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip 
                        cursor={{ stroke: '#6366F1', strokeWidth: 1 }}
                        contentStyle={{ backgroundColor: '#1E293B', border: 'none' }}
                        labelStyle={{ color: '#ffffff' }}
                        itemStyle={{ color: '#ffffff' }}
                        formatter={(value) => new Intl.NumberFormat('en').format(value)}
                    />
                    <Legend />
                    <Line type='monotone' dataKey='sales' stroke='#6366F1' activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesTrendChart