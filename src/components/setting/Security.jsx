import { Lock } from 'lucide-react'
import {motion} from 'framer-motion'
import ToggleSwitch from './ToggleSwitch'
import { useState } from 'react'

const Security = () => {
    const [security, setSecurity] = useState({
        twoFactor: true
    })
  return (
    <motion.div
    initial={{scale:0.6, opacity:0}}
    animate={{scale:1, opacity:1}}
    transition={{duration:0.5, delay:0.4}}
    className='dark:bg-gray-800 bg-gray-200
dark:border-gray-700 border-gray-300
 bg-opacity-50 backdrop-blur-lg rounded-xl shadow-lg border space-y-5 p-6 mx-auto min-w-48 w-2/3 mt-8'>
        <div className='flex gap-4 items-end'>
            <Lock size={25} color="#6366F1" />
            <h2 className='text-xl 
dark:text-gray-100 text-gray-900 font-semibold'>Security</h2>
        </div>  
            <ToggleSwitch label='Two Factor Authentication' onToggle={()=>setSecurity({...security,twoFactor:!security.twoFactor})} isOn={security.twoFactor} />
            <button className=' bg-[#474ad4]  hover:bg-[#2f31ac] px-4 py-2 text-gray-100 font-semibold rounded-md'>Change Password</button>
    </motion.div>
  )
}

export default Security