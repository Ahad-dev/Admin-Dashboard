import {motion } from 'framer-motion';
import { Eye, Search } from 'lucide-react'
import { useState } from 'react';


const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];


const OrdersTable = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(orderData);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        if(e.target.value === "") return setFilteredData(orderData);
        else{
            const filteredData = orderData.filter((order) => {
                return Object.keys(order).some((key)=>{
                    return order[key].toString().toLowerCase().includes(e.target.value.toLowerCase())
                })
            })
            setFilteredData(filteredData);
        }
        
    }


    const getColor=(status)=>{
        if(status==="Delivered"){
            return "bg-green-100 text-green-800"
        }
        else if(status==="Processing"){
            return "bg-yellow-100 text-yellow-800"
        }
        else if(status==="Shipped"){
            return "bg-blue-100 text-blue-800"
        }
        else if(status==="Pending"){
            return "bg-red-100 text-red-800"
        }
    }
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 ,delay:0.3}}
    className='dark:bg-gray-800 bg-gray-200
 bg-opacity-50 border dark:border-gray-700 border-gray-300 rounded-xl p-6 backdrop-blur-lg shadow-lg'>
        <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2'>
            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-900'>Order List</h2>
            <div className='relative'>
                <input value={searchTerm} onChange={handleSearch} type="text" className='pl-12 py-2 rounded-lg dark:bg-gray-700 bg-gray-300 max-w-44 outline-none text-gray-800 dark:text-gray-300 focus:outline-blue-500 ' placeholder='Search Orders..' />
                <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 dark:text-gray-400 text-gray-800'/>
            </div>


        </div>
        <div className='overflow-x-auto mt-8'>
                <table className='min-w-full divide-y divide-gray-700'>
                    <thead>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Order Id</th>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Customer</th>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Total</th>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Status</th>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Date</th>
                            <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredData.map((order) => (
                            <motion.tr
                                key={order.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className='dark:text-gray-100 text-gray-900 dark:hover:bg-gray-700 hover:bg-gray-200 text-sm '
                            >
                                <td className='px-6 py-4 font-bold'>{order.id}</td>
                                <td className='px-6 py-4 font-bold'>{order.customer}</td>
                                <td className='px-6 py-4 font-bold'>${order.total}</td>
                                <td className='px-6 py-4'>
                                    <span className={`${getColor(order.status)} px-2 rounded-full`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className='px-6 py-4'>{order.date}</td>
                                <td className='px-6 py-4'>
                                    <button className='text-blue-500'><Eye/></button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </motion.div>
  )
}

export default OrdersTable