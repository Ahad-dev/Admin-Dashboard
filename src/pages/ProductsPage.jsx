import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import {motion} from 'framer-motion'
import { DollarSign,AlertTriangle,Package,TrendingUp } from "lucide-react"
import ProductsTable from "../components/products/ProductsTable"
import SalesTrendChart from "../components/products/SalesTrendChart"
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'


const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="min-w-7xl mx-auto py-6 px-6 lg:px-8">
        {/* Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8"
        >
          <StatCard name="Total Product" value="1256" icon={Package} color="#6366F1" />
          <StatCard name="Top Selling" value="56" icon={TrendingUp} color="#8B5CF6" />
          <StatCard name="Low Stock" value="567" icon={AlertTriangle} color="#F59E0B" />
          <StatCard name="Total Revenue" value="$589,478" icon={DollarSign} color="#10B981" />

        </motion.div>

        {/* Product Table */}
        <ProductsTable/>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 my-8 ">
          <SalesTrendChart></SalesTrendChart>
          <CategoryDistributionChart></CategoryDistributionChart>
        </div>
          
      </main>

    </div>
  )
}

export default ProductsPage