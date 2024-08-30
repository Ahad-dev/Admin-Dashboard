import {motion} from 'framer-motion'
import { Bar,BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend, ResponsiveContainer } from 'recharts'

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];


const ProductPerformanceChar = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border dark:border-gray-700 border-gray-300 p-6"
    >
        <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900 mb-4">Product Performance</h3>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'} />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip 
                        cursor={{ stroke: 'gray', strokeWidth: 0.5 }}
                        contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}
                        labelStyle={{ color: 'white' }}
                        itemStyle={{ color: 'white' }}
                    />
                    <Legend />
                    <Bar dataKey='sales' fill='#8B5CF6' />
						<Bar dataKey='revenue' fill='#10B981' />
						<Bar dataKey='profit' fill='#F59E0B' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default ProductPerformanceChar