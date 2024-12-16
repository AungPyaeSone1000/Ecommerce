import { PlusCircle, ShoppingBasket, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import CreateProductForm from "../components/CreateProductForm.jsx";
import ProductsList from "../components/ProductsList.jsx";
import AnalyticsTab from "../components/AnalyticsTab.jsx";

const tabs = [
  { id: "create", label: "Create Product", icon: PlusCircle },
  { id: "products", label: "Products", icon: ShoppingBasket },
  { id: "analytics", label: "Analytics", icon: BarChart },
];

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="min-h-screen gb-gray-100 text-gray-900 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-6">
        <motion.h1
          className="text-center text-4xl  font-bold text-emerald-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admin Dashboard
        </motion.h1>
        <div className="flex justify-center space-mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 mx-2 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-200"
              } `}
            >
              {" "}
              <tab.icon className="mr-2 h-5 w-5" />
              {tab.label}
            </button>
          ))}
        </div>
        {activeTab === "create" && <CreateProductForm />}
        {activeTab === "products" && <ProductsList />}
        {activeTab === "analytics" && <AnalyticsTab />}
      </div>
    </div>
  );
};
export default AdminPage;
