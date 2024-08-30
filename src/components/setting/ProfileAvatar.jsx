import React from 'react'

const ProfileAvatar = ({user}) => {
  return (
    <div className='min-w-20 min-h-20 dark:bg-gray-700 bg-gray-100 rounded-full dark:border-gray-700 border-gray-400 flex justify-center items-center '>
        <span className='dark:text-gray-100 text-gray-900 font-semibold text-3xl'>
            {user.split(' ').map((name) => name[0].toUpperCase()).join('')}
        </span>
    </div>
  )
}

export default ProfileAvatar