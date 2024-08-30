import {User } from 'lucide-react'
import {motion} from 'framer-motion'
import ProfileAvatar from './ProfileAvatar'

const Profile = () => {
  return (
    <motion.div
    initial={{scale:0.6, opacity:0}}
    animate={{scale:1, opacity:1}}
    transition={{duration:0.5}}

    className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg space-y-6 border dark:border-gray-700 border-gray-300 p-6 shadow-lg rounded-xl min-w-32 w-2/3 m-auto mt-8'>
        <div className='flex gap-4 items-end'>
            <User size={25} color="#6366F1" />
            <h2 className='text-xl 
dark:text-gray-100 text-gray-900 font-semibold'>Profile</h2>
        </div>
        <div className='flex gap-3'>
            <ProfileAvatar user='john Deo'/>
            <div className='flex flex-col justify-center'>
                <span className='font-semibold text-lg dark:text-gray-100 text-gray-900'>John Doe</span>
                <span className='font-medium dark:text-gray-500 text-gray-400'>johndoe@gmail.com</span>
            </div>
        </div>
        <button className='py-2 px-4 text-gray-100 font-semibold bg-[#474ad4] rounded-md hover:bg-[#2f31ac]' >Edit Profile</button>
    </motion.div>
  )
}

export default Profile