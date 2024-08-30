import { FileQuestion, InfoIcon, Plus } from 'lucide-react';
import React, { useState } from 'react'

const ConnectedAccount = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Facebook",
			connected: true,
			icon: "/Facebook.png",
		},
		{
			id: 2,
			name: "Google",
			connected: false,
			icon: "/Google.png",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/Twitter.png",
		},
        {
            id: 4,
            name: "Github",
            connected: false,
            icon: "/Github.png",
        },
        {
            id: 5,
            name: "Linkedin",
            connected: true,
            icon: "/LinkedIN.png",
        },

	]);

    const handleClick = (id) => {
        setConnectedAccounts(
            connectedAccounts.map((account) =>
                account.id === id ? { ...account, connected: !account.connected } : account
            )
        );
    }

  return (
    <div className='dark:bg-gray-800 bg-gray-200 bg-opacity-50 shadow-lg backdrop-blur-lg space-y-6 border dark:border-gray-700 border-gray-300 rounded-xl mx-auto w-2/3 min-w-96 p-6 mt-8'>
        <div className='flex gap-4 items-end'>
            <InfoIcon className='w-8 h-8 text-indigo-500' />
            <h2 className='dark:text-gray-100 text-gray-900 text-xl font-semibold'>Connected Accounts</h2>
        </div>
        <div className='space-y-6'>
            {connectedAccounts.map((account) => (
                <div key={account.id} className='flex justify-between items-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img src={account.icon} alt={account.name} className='w-8 h-8' />
                        <span className='dark:text-gray-100 text-gray-900 font-semibold'>{account.name}</span>
                    </div>
                    <button className={`dark:text-gray-100 text-gray-900 py-2 px-4 rounded-md text-md ${account.connected ? 'bg-green-500' : 'dark:bg-gray-700 bg-gray-300'}`} onClick={()=>handleClick(account.id)} >{account.connected ? 'Connected' : 'Connect'}</button>
                </div>
            ))}
        </div>
        <button className='flex gap-3 bg-indigo-900/10 px-4 py-2 rounded-md border border-indigo-700/50  text-indigo-500 hover:text-indigo-300'><Plus/> <span>Add Account</span></button>
    </div>
  )
}

export default ConnectedAccount