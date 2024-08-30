import {motion} from 'framer-motion'
import {LineChart,Line,ResponsiveContainer,XAxis,YAxis,Legend,Tooltip,CartesianGrid} from "recharts"


const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];


const UsersGrowthChart = () => {
  return (
    <div className='dark:bg-gray-800 bg-gray-200 p-4 bg-opacity-50 backdrop-blur-lg shadow-xl rounded-lg border dark:border-gray-700 border-gray-300'>
        <div className='h-80'>
            <h1 className='font-semibold text-xl text-gray-100 '>Users Growth Chart</h1>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray={"3 3"} strokeOpacity={"0.5"}/>
                    <XAxis dataKey='month' stroke='#9ca3af'/>
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
                    <Line type='monotone' dataKey='users' stroke='#6366F1' dot={{fill:"#6366F1",strokeWidth:2,r:6}} activeDot={{ r: 8 }} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default UsersGrowthChart