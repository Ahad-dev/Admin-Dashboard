import {motion} from 'framer-motion'
import { Area,AreaChart,ResponsiveContainer,CartesianGrid,XAxis,YAxis,Tooltip,Legend } from 'recharts'

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];


const RevenueVSTargetChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border dark:border-gray-700 border-gray-300 p-6 mb-8'>
        <h3 className='text-lg font-semibold dark:text-gray-100 text-gray-900 mb-4'>Revenue vs Target</h3>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'} />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip 
                        cursor={{ stroke: 'gray', strokeWidth: 0.5 }}
                        contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}
                        labelStyle={{ color: 'white' }}
                        itemStyle={{ color: 'white' }}
                    />
                    <Legend />
                    <Area type='monotone' dataKey='revenue' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					<Area type='monotone' dataKey='target' stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
			</AreaChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default RevenueVSTargetChart