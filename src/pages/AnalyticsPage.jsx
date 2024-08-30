import {motion} from 'framer-motion'
import Header from '../components/common/Header'
import OverviewCards from '../components/analytics/OverviewCards'
import RevenueVSTargetChart from '../components/analytics/RevenueVSTargetChart'
import ChannelPerformanceChart from '../components/analytics/ChannelPerformanceChart'
import ProductPerformanceChar from '../components/analytics/ProductPerformanceChar'
import UserRetentionChart from '../components/analytics/UserRetentionChart'
import CustomerSegmentationChart from '../components/analytics/CustomerSegmentationChart'
import AIPoweredInsights from '../components/analytics/AIPoweredInsight'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
        <Header title={"Analytics"}></Header>
        <main className='min-w-7xl mx-auto py-6 px-6 lg:px-8'>
            <OverviewCards/>
            <RevenueVSTargetChart/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                <ChannelPerformanceChart/>
                <ProductPerformanceChar/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
                <UserRetentionChart/>
                <CustomerSegmentationChart/>
            </div>
            <AIPoweredInsights/>
        </main>
    </div>
  )
}

export default AnalyticsPage