import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ items, activeTab, isOpen, onToggle }) {
  const { logout } = useAuth();

  return (
    <div className={`bg-[#2e2b55] text-white ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        {isOpen ? (
          <h1 className="font-bold">PrimeTower</h1>
        ) : (
          <span className="text-xl">🚛</span>
        )}
        <button onClick={onToggle} className="text-white">
          {isOpen ? '◀' : '▶'}
        </button>
      </div>
      <nav className="p-4">
        {items.map((item) => (
          <Link href={item.path} key={item.key}>
            <div
              className={`flex items-center p-3 my-1 rounded-lg hover:bg-[#5c58ff] ${
                activeTab === item.key ? 'bg-[#5c58ff]' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {isOpen && <span>{item.name}</span>}
            </div>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={logout}
          className="w-full p-2 bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
