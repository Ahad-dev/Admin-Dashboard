import {motion} from 'framer-motion'
import {PieChart,Pie,ResponsiveContainer,Cell,Legend,Tooltip} from 'recharts'


const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

const UsersDemoGraphics = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6,delay:0.8 }}

    className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 mt-8 backdrop-blur-lg shadow-xl rounded-xl border dark:border-gray-700 border-gray-300 p-6'>
        <div className="h-80">
            <h1 className='text-xl font-semibold dark:text-gray-100 text-gray-900'>Users Demographics</h1>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <PieChart data={userDemographicsData}>
                    <Pie
                        data={userDemographicsData}
                        cx={"50%"}
                        cy={"50%"}
                        labelLine={true}
                        outerRadius={80}
                        fill='#8884d8'
                        dataKey='value'
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {userDemographicsData.map((entry,index)=>{
                            return <Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        })}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Legend />

                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UsersDemoGraphics