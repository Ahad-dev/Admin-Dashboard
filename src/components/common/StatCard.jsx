import React from 'react'
import {motion} from 'framer-motion';

const StatCard = ({name,icon:Icon,value,color}) => {
  return (

    <motion.div className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 rounded-xl backdrop-blur-md overflow-hidden shadow-lg border dark:border-gray-700 border-gray-300'
        whileHover={{y:-5,boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.5)'}}
    >
        <div className='px-4 py-5 sm:p-6'>
            <span className='flex item-center gap-2 text-sm font-medium dark:text-gray-400 text-gray-800'>
                <Icon size={24} color={color} />
                {name}
            </span>
            <p className='mt-1 text-3xl font-semibold dark:text-gray-100 text-gray-900'>{value}</p>
        </div>
            <div className='p-2 flex justify-around dark:bg-gray-700 bg-gray-300'>
                <span className={`text-sm font-semibold`} style={{color}}>{Math.floor(Math.random()*1000)/10}%</span>
                <span className='text-sm font-semibold dark:text-gray-400 text-gray-800'>From last month</span>
            </div>

    </motion.div>
  )
}

export default StatCard