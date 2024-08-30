import {motion} from 'framer-motion'
import { Line,LineChart,ResponsiveContainer,XAxis,YAxis,Tooltip,CartesianGrid } from 'recharts'

const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

const UserRetentionChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border dark:border-gray-700 border-gray-300 p-6"
    >
        <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900 mb-4">User Retention</h3>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={userRetentionData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'} />
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip 
                        cursor={{ stroke: 'gray', strokeWidth: 0.5 }}
                        contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}
                        labelStyle={{ color: 'white' }}
                        itemStyle={{ color: 'white' }}
                    />
                    <Line type='monotone' dataKey='retention' stroke='#8B5CF6'  strokeWidth={3} dot={{fill:"#6366F1",strokeWidth:2,r:6}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UserRetentionChart