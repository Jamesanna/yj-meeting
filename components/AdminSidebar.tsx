import React from 'react';
import { 
  Calendar, 
  Settings, 
  LogOut,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';
import { SYSTEM_TITLE, VERSION } from '../constants';

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  onReturnToFrontend: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  onReturnToFrontend,
  isOpen,
  onClose
}) => {
  const menuItems = [
    { id: 'bookings', label: '會議室管理', icon: Calendar },
    { id: 'system', label: '系統管理', icon: Settings },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const handleReturn = () => {
    onReturnToFrontend();
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {SYSTEM_TITLE}
            </h1>
            <p className="text-xs text-slate-400 mt-1">後台管理系統</p>
          </div>
          <button onClick={onClose} className="md:hidden p-1 text-slate-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-1">
          <button 
            onClick={handleReturn}
            className="w-full flex items-center space-x-3 px-4 py-3 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">回前台首頁</span>
          </button>
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">登出系統</span>
          </button>
          {/* 版本號 */}
          <div className="pt-4 px-4 text-center">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest bg-slate-800/50 px-2 py-1 rounded">
              Version {VERSION}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;