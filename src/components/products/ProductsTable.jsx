import React from 'react'
import {motion} from 'framer-motion'
import { Delete, DeleteIcon, Edit, Search, Trash2 } from 'lucide-react'


const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];


const ProductsList = () => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredProducts, setFilteredProducts] = React.useState(PRODUCT_DATA)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    if (e.target.value === '') {
      setFilteredProducts(PRODUCT_DATA)
    } else {
      setFilteredProducts(PRODUCT_DATA.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3,delay:0.3 }}
      className="dark:bg-gray-800 bg-gray-200 bg-opacity-50 backdrop-blur-lg rounded-xl p-4 border dark:border-gray-700 border-gray-300"
    >
      <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2'>
        <h2 className='dark:dark:text-gray-100 text-gray-900 font-semibold text-xl '>Product List</h2>
        <div className='relative'>
          <Search size={20} className='absolute top-1/2 left-3 transform -translate-y-1/2 dark:text-gray-400 text-gray-800'/>
          <input value={searchTerm} onChange={handleSearch} type="text" placeholder='Search' className='pl-10 py-2 max-w-44 outline-none text-gray-800 dark:text-gray-300 dark:bg-gray-700 bg-gray-300 border dark:border-gray-700 border-gray-300 rounded-xl' />
        </div>
        
      </div>
      <div className='overflow-x-auto mt-8'>
          <table className='min-w-full divide-y dark:divide-gray-700 divide-gray-300 '>
            <thead>
              <tr>
              <th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium dark:text-gray-400 text-gray-800 uppercase tracking-wider'>
								Actions
							</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHw' alt={product.name} className='h-10 w-10 rounded-full' />
                      </div>
                      <div className='ml-4'>
                        <div className='text-sm font-medium dark:text-gray-100 text-gray-900'>{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm dark:text-gray-100 text-gray-900'>{product.category}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm dark:text-gray-100 text-gray-900'>${product.price}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm dark:text-gray-100 text-gray-900'>{product.stock}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm dark:text-gray-100 text-gray-900'>{product.sales}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <motion.button
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                    className='dark:bg-gray-700 bg-gray-300 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg dark:hover:bg-gray-500 hover:bg-gray-100 '><Edit/></motion.button>
                    <motion.button
                      whileHover={{scale: 1.1}}
                      whileTap={{scale: 0.9}}
                    className='dark:bg-red-600 bg-red-300 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg ml-2 dark:hover:bg-red-500 hover:bg-red-200'><Trash2/></motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
    </motion.div>
  )
}

export default ProductsList