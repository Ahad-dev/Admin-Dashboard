import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { DollarSign,TrendingUp,ShoppingCart,CreditCard } from "lucide-react" 
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import DailyTrendChart from "../components/sales/DailyTrendChart";

const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title={"Sales"} />
        <main className="p-8 min-w-7xl">
            {/* Stat Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <StatCard name={"Total Revenue"} icon={DollarSign} color={"#6366F1"} value={salesStats.totalRevenue}></StatCard>
                <StatCard name={"Avg. Order Value"} icon={ShoppingCart} color={"#20C997"} value={salesStats.averageOrderValue}></StatCard>
                <StatCard name={"Sales Growth"} icon={TrendingUp} color={"#F87171"} value={salesStats.salesGrowth}></StatCard>
                <StatCard name={"Conversion Rate"} icon={CreditCard} color={"#FF9F43"} value={salesStats.conversionRate}></StatCard>
            </div>
            {/* Sales Chart */}
            <SalesOverviewChart/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                <CategoryDistributionChart/>
                <DailyTrendChart/>
            </div>
        </main>

    </div>
  )
}

export default SalesPage