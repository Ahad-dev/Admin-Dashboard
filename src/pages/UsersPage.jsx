import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import {Users,UserPlus,UserCheck,UserX} from 'lucide-react'
import { motion } from "framer-motion"
import UsersTable from "../components/users/UsersTable";
import UsersGrowthChart from "../components/users/UsersGrowthChart";
import UsersActivityHeatMapChart from "../components/users/UsersActivityHeatMapChart";
import UsersDemoGraphics from "../components/users/UsersDemoGraphics";


const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};


const UsersPage = () => {
  return (
    <div className="flex-1 relative overflow-auto z-10">
        <Header title={"Users"} />
        <main className="min-w-7xl mx-auto py-6 px-6 lg:px-8">

        {/* Stat Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            <StatCard name={"Total Users"} icon={Users} color={"#6366F1"} value={userStats.totalUsers.toLocaleString()}/>
            <StatCard name={"New Users Today"} icon={UserPlus} color={"#20C997"} value={userStats.newUsersToday.toLocaleString()}/>
            <StatCard name={"Active Users"} icon={UserCheck} color={"#FF9F43"} value={userStats.activeUsers.toLocaleString()}/>
            <StatCard name={"Churn Rate"} icon={UserX} color={"#F87171"} value={userStats.churnRate}/>
        </motion.div>
        {/* Users Table */}
            <UsersTable/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UsersGrowthChart/>
          <UsersActivityHeatMapChart/>
        </div>
        <div className="grid grid-cols-1">
          <UsersDemoGraphics/>
        </div>
        </main>

    </div>
  )
}

export default UsersPage