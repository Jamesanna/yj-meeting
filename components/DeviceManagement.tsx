
import React, { useState, useEffect } from 'react';
import { dbService } from '../services/mockDb';
import { Device } from '../types';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Save,
  X,
  Monitor,
  AlertCircle,
  CheckCircle2,
  Wrench,
  Ban,
  MoreVertical,
  Info
} from 'lucide-react';

const DeviceManagement: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingDevice, setEditingDevice] = useState<Device | null>(null);
  
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'available' | 'maintenance' | 'broken'>('available');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  const loadData = async () => {
    const devs = await dbService.getDevices();
    setDevices(devs);
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetForm = () => {
    setName('');
    setStatus('available');
    setNote('');
    setError('');
    setEditingDevice(null);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      setError('請輸入設備名稱');
      return;
    }

    if (editingDevice) {
      await dbService.updateDevice(editingDevice.id, { name, status, note });
    } else {
      const newDevice: Device = {
        id: `dev_${Date.now()}`,
        name,
        status,
        note
      };
      await dbService.saveDevice(newDevice);
    }
    
    await loadData();
    setShowModal(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('確定要刪除此設備嗎？')) {
      await dbService.deleteDevice(id);
      await loadData();
    }
  };

  const handleEdit = (dev: Device) => {
    setEditingDevice(dev); 
    setName(dev.name); 
    setStatus(dev.status); 
    setNote(dev.note || ''); 
    setShowModal(true);
  };

  const getStatusBadge = (status: Device['status']) => {
    switch(status) {
      case 'available':
        return <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-black text-[10px] flex items-center w-fit whitespace-nowrap"><CheckCircle2 className="w-3 h-3 mr-1 pointer-events-none" />正常使用</span>;
      case 'maintenance':
        return <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full font-black text-[10px] flex items-center w-fit whitespace-nowrap"><Wrench className="w-3 h-3 mr-1 pointer-events-none" />維修中</span>;
      case 'broken':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-black text-[10px] flex items-center w-fit whitespace-nowrap"><Ban className="w-3 h-3 mr-1 pointer-events-none" />故障</span>;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
      <div className="p-6 md:p-8 border-b flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50/30 gap-4">
        <div className="w-full md:w-auto">
          <h3 className="font-black text-xl text-gray-800">會議室設備維護</h3>
          <p className="text-sm text-gray-400 mt-1">管理會議室內硬體設備狀態</p>
        </div>
        <button 
          type="button"
          onClick={() => { resetForm(); setShowModal(true); }}
          className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-black shadow-lg shadow-blue-500/20 active:scale-95 w-full md:w-auto cursor-pointer"
        >
          <Plus className="w-5 h-5 pointer-events-none" />
          <span>新增設備</span>
        </button>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-50/50 text-xs font-black text-gray-400 uppercase tracking-widest border-b">
            <tr>
              <th className="px-8 py-5 min-w-[200px]">設備名稱</th>
              <th className="px-8 py-5 min-w-[140px]">目前狀態</th>
              <th className="px-8 py-5">備註說明</th>
              <th className="px-8 py-5 text-center w-32">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm font-medium">
            {devices.length > 0 ? devices.map(dev => (
              <tr key={dev.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-3 whitespace-nowrap">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <Monitor className="w-5 h-5 pointer-events-none" />
                    </div>
                    <span className="font-black text-gray-800 text-base">{dev.name}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex">
                    {getStatusBadge(dev.status)}
                  </div>
                </td>
                <td className="px-8 py-6 text-gray-400 font-medium leading-relaxed max-w-xs">{dev.note || '---'}</td>
                <td className="px-8 py-6 text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <button 
                      type="button"
                      onClick={() => handleEdit(dev)} 
                      className="text-gray-400 hover:text-blue-600 transition-all p-4 hover:bg-blue-50 rounded-lg cursor-pointer active:scale-90"
                    >
                      <Edit2 className="w-5 h-5 pointer-events-none" />
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleDelete(dev.id); }} 
                      className="text-gray-400 hover:text-red-600 transition-all p-4 hover:bg-red-50 rounded-lg cursor-pointer active:scale-90"
                    >
                      <Trash2 className="w-5 h-5 pointer-events-none" />
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center text-gray-300 font-bold">目前會議室尚無設備登記</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y">
        {devices.length > 0 ? devices.map(dev => (
          <div key={dev.id} className="p-5 space-y-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Monitor className="w-5 h-5 pointer-events-none" />
                </div>
                <div>
                  <h4 className="font-black text-gray-800 text-base">{dev.name}</h4>
                  <div className="mt-1">{getStatusBadge(dev.status)}</div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button type="button" onClick={() => handleEdit(dev)} className="p-5 text-gray-400 hover:text-blue-600 rounded-lg cursor-pointer active:scale-90">
                  <Edit2 className="w-5 h-5 pointer-events-none" />
                </button>
                <button type="button" onClick={(e) => { e.stopPropagation(); handleDelete(dev.id); }} className="p-5 text-gray-400 hover:text-red-600 rounded-lg cursor-pointer active:scale-90">
                  <Trash2 className="w-5 h-5 pointer-events-none" />
                </button>
              </div>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center text-gray-300 font-bold">目前會議室尚無設備登記</div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 border border-white/20">
            <div className="flex justify-between items-center px-6 py-5 border-b">
              <h3 className="text-lg font-black text-gray-800">{editingDevice ? '編輯設備' : '新增設備'}</h3>
              <button type="button" onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-all active:scale-90">
                <X className="w-5 h-5 text-gray-400 pointer-events-none" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              {error && (
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100 flex items-center animate-shake">
                  <AlertCircle className="w-4 h-4 mr-2 pointer-events-none" />{error}
                </div>
              )}
              
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">設備名稱</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="例如: EPSON 無線投影機" 
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all font-bold bg-gray-50 text-sm" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">設備狀態</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'available', label: '正常', color: 'green' },
                    { id: 'maintenance', label: '維修', color: 'orange' },
                    { id: 'broken', label: '故障', color: 'red' },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setStatus(opt.id as any)}
                      className={`py-2 rounded-lg font-bold text-[11px] border-2 transition-all cursor-pointer active:scale-95 ${
                        status === opt.id 
                          ? `bg-${opt.color}-50 border-${opt.color}-500 text-${opt.color}-700` 
                          : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">備註說明</label>
                <textarea 
                  value={note} 
                  onChange={(e) => setNote(e.target.value)} 
                  placeholder="說明設備位置過異常情況" 
                  className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all font-bold bg-gray-50 h-24 resize-none text-sm" 
                />
              </div>
            </div>

            <div className="px-6 py-5 bg-gray-50 flex justify-end gap-2 border-t">
              <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-400 font-black hover:bg-gray-200 rounded-xl transition-colors text-sm active:scale-90">取消</button>
              <button 
                type="button"
                onClick={() => handleSave()} 
                className="flex items-center justify-center space-x-2 px-6 py-2 bg-blue-600 text-white font-black hover:bg-blue-700 rounded-xl shadow-lg transition-all active:scale-95 text-sm cursor-pointer"
              >
                <Save className="w-4 h-4 pointer-events-none" />
                <span>儲存設備</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceManagement;
