import { useState } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import { FiTruck, FiDollarSign, FiTool, FiUser } from 'react-icons/fi';

export default function Layout({ children, activeTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Fleet Overview', icon: <FiTruck />, path: '/dashboard/fleet-overview', key: 'fleet-overview' },
    { name: 'Cost & Revenue', icon: <FiDollarSign />, path: '/dashboard/cost-revenue', key: 'cost-revenue' },
    { name: 'Asset Health', icon: <FiTool />, path: '/dashboard/asset-health', key: 'asset-health' },
    { name: 'Driver Performance', icon: <FiUser />, path: '/dashboard/driver-performance', key: 'driver-performance' },
  ];

  return (
    <>
      <Head>
        <title>PrimeTower Control</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <Sidebar 
          items={navItems} 
          activeTab={activeTab} 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
        />
        <div className="flex-1 overflow-auto">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
