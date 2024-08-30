import {motion} from 'framer-motion'
import { Line,LineChart,XAxis,YAxis,ResponsiveContainer,CartesianGrid,Tooltip } from 'recharts'

const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrdersChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl border dark:border-gray-700 border-gray-300 mb-8 p-6'>
        <h2 className='dark:text-gray-100 text-gray-900 text-xl font-semibold mb-3'>Daily Orders</h2>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={dailyOrdersData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'}/>
                    <XAxis dataKey='date' stroke='#374151' />
                    <YAxis stroke='#374151' />
                    <Tooltip 
                        cursor={{ stroke: '#374151', strokeWidth: 1 }}
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#F9FAFB' }}
                        itemStyle={{ color: '#F9FAFB' }}
                    />
                    <Line type='monotone' dataKey='orders' stroke='#6366F1' strokeWidth={4} dot={{ fill: '#6366F1',r:6 }} activeDot={{r:8,strokeWidth:2}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailyOrdersChart