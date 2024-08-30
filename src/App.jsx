import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/common/Sidebar";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingPage from "./pages/SettingPage";
import {ThemeProvider} from './context/ThemeToggler';
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if(theme === 'dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }


  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <ThemeProvider value={{theme,toggleTheme}}>
    <div className="flex h-screen  dark:bg-gray-950  text-gray-100 overflow-hidden">
        {/* BG */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 from-gray-100 via-gray-200 to-gray -100 opacity-80"/>
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
    <Sidebar />
    <Routes>
      <Route path="/" element={<OverviewPage/>}  />
      <Route path="/products" element={<ProductsPage/>}  />
      <Route path='/users' element={<UsersPage/>} />
      <Route path="/sales" element={<SalesPage/>} />
      <Route path="/orders" element={<OrdersPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>} />
      <Route path="/settings" element={<SettingPage/>} />
    </Routes>

    </div>
    </ThemeProvider>
  )
}