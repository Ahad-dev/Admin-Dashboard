import {
  BarChart2,
  DollarSign,
  Lightbulb,
  Menu,
  Moon,
  Settings,
  ShoppingBag,
  ShoppingCart,
  SunMoon,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeToggler";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const { toggleTheme, theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  return (
    <motion.div
      clasName={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-300 dark:border-gray-700 ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors max-w-fit"
        >
          <Menu size={25} className="dark:text-gray-100 text-gray-800" />
        </motion.button>
        <nav className="mt-8 flex-grow overflow-hidden">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link to={item.href} key={index}>
              <motion.div className="flex items-center justify-start text-sm py-6 px-4 font-medium rounded-lg dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                <item.icon
                  size={20}
                  color={item.color}
                  style={{ minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="ml-4 dark:text-gray-100 text-gray-800 whitespace-nowrap"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-start text-lg py-6 px-4 font-medium rounded-lg dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors gap-3"
          >
            {theme === "light" ? (
              <SunMoon className="dark:text-gray-100 text-gray-800 " />
            ) : (
              <Moon className="dark:text-gray-100 text-gray-800" />
            )}{" "}
            {isSidebarOpen && (<motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.2, delay: 0.3 }}
              exit={{ opacity: 0, width: 0 }}
              className="ml-4 dark:text-gray-100 text-gray-800 whitespace-nowrap"
            >
              {theme} Mode
            </motion.span>)}
          </button>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
