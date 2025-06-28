import { useState } from 'react';
import Layout from '../../components/Layout';
import KPICard from '../../components/KPICard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useApi from '../../hooks/useApi';
import AuthGuard from '../../components/AuthGuard';

export default function FleetOverview() {
  const { data: kpis, loading: kpisLoading } = useApi('/api/kpis/fleet-overview');
  const { data: charts, loading: chartsLoading } = useApi('/api/charts/fleet-overview');

  return (
    <AuthGuard>
      <Layout activeTab="fleet-overview">
        <h1 className="text-2xl font-bold mb-6">🚛 Fleet Overview</h1>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {kpisLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg p-4 h-24 animate-pulse"></div>
            ))
          ) : (
            kpis?.map((kpi, i) => (
              <KPICard 
                key={i} 
                title={kpi.title} 
                value={kpi.value} 
                icon={kpi.icon} 
              />
            ))
          )}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Tons by Truck</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={charts?.tons_by_truck}>
                <XAxis dataKey="TruckID" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Ton Reg" fill="#5c58ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Distance by Truck</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={charts?.distance_by_truck}>
                <XAxis dataKey="TruckID" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Distance " fill="#5c58ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Layout>
    </AuthGuard>
  );
}
