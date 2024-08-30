import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import {
  CircleCheck,
  CircleCheckBig,
  Clock,
  DollarSign,
  ShoppingBag,
  TicketCheck,
} from "lucide-react";
import DailyOrdersChart from "../components/orders/DailyOrdersChart";
import OrdersStatusDistribution from "../components/orders/OrdersStatusDistribution";
import OrdersTable from "../components/orders/OrdersTable";
// import {ShoppingBag} from 'lucide-react'

const orderStats = {
  totalOrders: "1,234",
  pendingOrders: "56",
  completedOrders: "1,178",
  totalRevenue: "$98,765",
};

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto z-10 relative">
      <Header title="Orders" />
      <main className="min-w-7xl mx-auto py-6 px-6 lg:px-8">
        {/* Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8"
        >
          <StatCard
            name="Total Orders"
            value={orderStats.totalOrders}
            icon={ShoppingBag}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            value={orderStats.pendingOrders}
            icon={Clock}
            color="#F59E0B"
          />
          <StatCard
            name="Completed Orders"
            value={orderStats.completedOrders}
            icon={CircleCheckBig}
            color="#10B981"
          />
          <StatCard
            name="Total Revenue "
            value={orderStats.totalRevenue}
            icon={DollarSign}
            color="#ef4444"
          />
        </motion.div>
          
          {/* Order Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DailyOrdersChart/>
              <OrdersStatusDistribution/>
          </div>
          {/* Order Table */}
          <OrdersTable/>
      </main>
    </div>
  );
};

export default OrdersPage;
