import {motion} from 'framer-motion'
import {BarChart,Bar,CartesianGrid,XAxis,YAxis,Legend,Tooltip,ResponsiveContainer} from "recharts"


const userActivityData = [
	{ name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
	{ name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
	{ name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
	{ name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
	{ name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
	{ name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
	{ name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];

const UsersActivityHeatMapChart = () => {
  return (
    <motion.div
        initial={{ opacity: 0,y: 20 }}
        animate={{ opacity: 1 ,y: 0}}
        transition={{ duration: 0.3,delay:0.6 }}
        className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border dark:border-gray-700 border-gray-300'
    >
        <div className='h-80'>
            <h1 className='text-xl font-semibold dark:text-gray-100 text-gray-900 mb-2'>Users Activity Heat Map</h1>
            <ResponsiveContainer width={'100%'} height={"100%"}>
                <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray={'3 3'} strokeOpacity={'0.5'}/>
                    <XAxis dataKey='name' stroke='#9ca3af'/>
                    <YAxis stroke='#9ca3af'/>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#374151",
                            border: "none",
                            borderRadius: "8px",
                            color: "#D1D5DB",
                        }}
                        itemStyle={{ color: "#D1D5DB" }}
                    />
                    <Legend/>
                    <Bar dataKey='0-4' stackId="a" fill='#6366F1'/>
                    <Bar dataKey='4-8' stackId="a" fill='#22D3EE'/>
                    <Bar dataKey='8-12' stackId="a" fill='#34D399'/>
                    <Bar dataKey='12-16' stackId="a" fill='#F59E0B'/>
                    <Bar dataKey='16-20' stackId="a" fill='#F472B6'/>
                    <Bar dataKey='20-24' stackId="a" fill='#F87171'/>

                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UsersActivityHeatMapChart