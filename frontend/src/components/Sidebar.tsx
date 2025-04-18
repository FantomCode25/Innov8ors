import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Users,
  BarChart2,
  User,
  Gamepad
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard2' },
    { icon: BookOpen, label: 'Quiz', path: '/quiz' },
    { icon: BarChart2, label: 'Analysis', path: '/analysis' },
    { icon: Users, label: 'Parents', path: '/parents' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Gamepad,label:'Games',path :'/games'}
  ];

  return (
    <motion.div
      initial={{ width: isCollapsed ? 80 : 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      className="h-screen bg-black border-r border-green-500/10 flex flex-col relative z-10"
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-2xl font-bold text-green-400">
            <button onClick={() => navigate('/')}>DyslexAI</button>
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-green-500/10 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5 text-green-400" /> : <ChevronLeft className="w-5 h-5 text-green-400" />}
        </button>
      </div>

      <nav className="flex-1 mt-8">
        {menuItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <motion.button
              key={label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center p-4 space-x-4 text-left transition-colors ${isActive
                  ? 'bg-green-500/20 text-green-400 border-l-4 border-green-400'
                  : 'text-white/80 hover:bg-green-500/5'
                }`}
              onClick={() => navigate(path)}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-green-400' : 'text-white/80'}`} />
              {!isCollapsed && <span>{label}</span>}
            </motion.button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-green-500/10">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="flex items-center space-x-4 text-white/80 hover:text-green-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </motion.button>
      </div>
    </motion.div>
  );
}