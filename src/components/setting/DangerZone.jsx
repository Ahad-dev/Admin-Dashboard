import { Trash } from 'lucide-react'
import React from 'react'

const DangerZone = () => {
  return (
    <div className='bg-red-600 bg-opacity-30 rounded-xl border space-y-6 border-red-700 min-w-32 p-6 w-2/3 mx-auto my-8'>
      <div className='flex gap-4 items-end'>
        <Trash className=' text-red-500' />
        <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-900'>Danger Zone</h2>
      </div>
            <p className='dark:text-gray-100/50 text-gray-900/50 '>Permanently delete your account and all of your content.</p>
          <button className='py-2 px-4 rounded-md text-md bg-red-700 font-semibold'>Delete Account</button>
    </div>
  )
}

export default DangerZone