import React from 'react'

const ToggleSwitch = ({label,isOn,onToggle}) => {
  return (
    <div className='flex justify-between items-center py-3'>
        <span className='dark:text-gray-300 text-gray-700 '>{label}</span>
        <button className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isOn?'bg-indigo-600':"bg-gray-600"}`}
        onClick={onToggle}
        >
            <span className={`inline-block size-4 transform transition-transform bg-white rounded-full 
            ${isOn ? "translate-x-6" : "translate-x-1"}`}></span>
        </button>
    </div>
  )
}

export default ToggleSwitch