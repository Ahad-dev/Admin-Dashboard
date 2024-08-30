import {motion} from 'framer-motion'
import { ArrowDownRight,ArrowUpRight, DollarSign, Users, ShoppingBag, Eye } from 'lucide-react'

const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign, },
	{ name: "Users", value: "45,678", change: 8.3, icon: Users, },
	{ name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag, },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye, },
];

const OverviewCards = () => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
        {overviewData.map((data, index) => (

    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    key={index} className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border dark:border-gray-700 border-gray-300 p-6 min-w-32'>
        <div className='flex justify-between'>
            <div>
                <h3 className='text-sm font-semibold dark:text-gray-400 text-gray-800'>{data.name}</h3>
                <p className='dark:text-gray-100 text-gray-900 text-xl font-semibold'>{data.value}</p>
                <div className='text-sm flex gap-3 mt-5'>
                    <span className={`${data.change>0?"text-green-500":"text-red-500"} flex font-semibold  text-sm`}>
                        {data.change>0?<ArrowUpRight size={20}/>:<ArrowDownRight size={20}/>}
                        <span>{data.change}%</span>
                    </span>
                    <p className='dark:text-gray-400 text-gray-800'>vs last Period</p>
                </div>
            </div>
            <div className={`rounded-full h-12 min-w-12 ${data.change>0?"bg-green-500/30 text-green-500":"bg-red-500/30 text-red-500"} flex justify-center items-center`} >
               <data.icon></data.icon>
            </div>
        </div>
    </motion.div>
        ))}
    </div>
  )
}

export default OverviewCards