import { Bell } from 'lucide-react'
import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import {motion} from 'framer-motion'

const Notifications = () => {
    const [notifications, setNotifications] = React.useState({
        push: true,
        email: false,
        sms: true
    })

  return (
    <motion.div
    initial={{scale:0.6, opacity:0}}
    animate={{scale:1, opacity:1}}
    transition={{duration:0.5, delay:0.2}}
     className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl border dark:border-gray-700 border-gray-300
 p-6 min-w-96 w-2/3 mt-8 mx-auto'>
        <div className='flex gap-4 items-end'>
            <Bell size={25} color="#6366F1" />
            <h2 className='text-xl dark:text-gray-100 text-gray-900 font-semibold'>Notifications</h2>
        </div>
        <div className='mt-6'>
            <ToggleSwitch label='Push Notification' onToggle={()=>setNotifications({...notifications,push:!notifications.push})} isOn={notifications.push} />
            <ToggleSwitch label='Email Notifications' onToggle={()=>setNotifications({...notifications,email:!notifications.email})} isOn={notifications.email} />
            <ToggleSwitch label='SMS Notifications' onToggle={()=>setNotifications({...notifications,sms:!notifications.sms})} isOn={notifications.sms} />
        </div>
    </motion.div>
  )
}

export default Notifications