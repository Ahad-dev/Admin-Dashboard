import {motion} from 'framer-motion'
import { Radar,RadarChart,ResponsiveContainer,PolarAngleAxis,PolarRadiusAxis ,PolarGrid,Legend,Tooltip} from 'recharts'

const customerSegmentationData = [
	{ subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentationChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border dark:border-gray-700 border-gray-300 p-6"
    >
        <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900 mb-4">Customer Segmentation</h3>
        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <RadarChart cx='50%' cy='50%' outerRadius="80%" data={customerSegmentationData}>
                <PolarGrid stroke='#374151' opacity={'0.5'} />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip 
                        contentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.7)', border: 'none'}}
                        labelStyle={{color: '#9CA3AF'}}
                        itemStyle={{color: '#D1D5DB'}}
                    />
                </RadarChart>

            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default CustomerSegmentationChart