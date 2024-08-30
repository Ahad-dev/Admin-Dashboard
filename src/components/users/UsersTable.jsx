import {motion} from 'framer-motion'
import { Search } from 'lucide-react'
import { useState } from 'react';

const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

const UsersTable = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === '') {
            setFilteredUsers(userData);
        } else {
            setFilteredUsers(userData.filter(
                //check for every key in general for any key
                (user) => Object.keys(user).some(
                    (key) => user[key].toString().toLowerCase().includes(e.target.value.toLowerCase())
                )
            ));
        }
    }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='p-6 dark:bg-gray-800 bg-gray-200 bg-opacity-50 rounded-xl backdrop-blur-lg mt-8 shadow-lg border dark:border-gray-700 border-gray-300'
    >
        <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-3xl dark:text-gray-100 text-gray-900'>Users</h1>
            <div className='relative'>
                <input value={searchTerm} onChange={handleSearch} type="text" className='pl-10 py-2 outline-none dark:bg-gray-700 bg-gray-200 border dark:border-gray-700 border-gray-300 rounded-xl' placeholder='Search' />
                <Search className='absolute top-1/2 left-3  transform -translate-y-1/2 dark:text-gray-400 text-gray-800'/>
            </div>
        </div>
        <div className='overflow-x-auto mt-8'>
            <table className='min-w-full divide-y dark:divide-gray-700 divide-gray-300'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Name</th>
                        <th className='px-6 py-3 text-left font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Email</th>
                        <th className='px-6 py-3 text-left font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Role</th>
                        <th className='px-6 py-3 text-left font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Status</th>
                        <th className='px-6 py-3 text-left font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Actions</th>
                    </tr>
                </thead>
                <tbody className='divide-y dark:divide-gray-700 divide-gray-300'>
                    {filteredUsers.map(user=>(

                        
                        <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        >
                            <td className='px-6 py-3 whitespace-nowrap dark:text-gray-100 text-gray-900 font-semibold'>
                                <div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium dark:text-gray-100 text-gray-900'>{user.name}</div>
										</div>
									</div>
                            </td>
                            <td className='px-6 py-3 whitespace-nowrap dark:text-gray-300 text-gray-700'>{user.email}</td>
                            <td className='px-6 py-3 whitespace-nowrap dark:text-gray-100 text-gray-900'>
                                <span className='dark:bg-blue-600 bg-blue-300 dark:text-gray-100 text-gray-900 font-semibold rounded-full text-center inline-flex px-2'>

                                    {user.role}
                                </span>
                    
                                </td>
                            <td className='px-6 py-3 whitespace-nowrap dark:text-gray-100 text-gray-900'>
                                <span className={`${user.status==='Active'?"dark:bg-green-600 bg-green-300":"dark:bg-red-600 bg-red-300"} dark:text-gray-100 text-gray-900 px-2 text-center rounded-full`}>
                                    {user.status}
                                </span>
                            </td>
                            <td className='px-6 py-3 whitespace-nowrap dark:text-gray-100 text-gray-900'><span className='text-green-500 hover:text-green-500 transition-colors cursor-pointer '>Edit</span> <span className='dark:text-red-600 text-red-400 hover:text-red-500 transition-colors cursor-pointer '>Delete</span></td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
  )
}

export default UsersTable