export default function KPICard({ title, value, icon, trend }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
      <h5 className="text-gray-500 text-sm font-medium mb-2 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h5>
      <p className="text-green-500 text-2xl font-bold">
        {value}
        {trend === 'up' && <span className="text-green-500 ml-1">↑</span>}
        {trend === 'down' && <span className="text-red-500 ml-1">↓</span>}
      </p>
    </div>
  );
}
