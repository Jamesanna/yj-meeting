
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { TIME_SLOTS } from '../constants';
import { User, Booking } from '../types';
import { X, Clock, Mail, AlertCircle, Wifi, CheckCircle2, Sun, CloudSun, Calendar, ShieldCheck, UserCircle, LogOut } from 'lucide-react';

interface BookingModalProps {
  date: Date;
  googleUser: User | null;
  isInternalNetwork?: boolean;
  onGoogleLogin: () => void;
  onGoogleLogout: () => void;
  editingBooking?: Booking | null;
  onClose: () => void;
  onSave: (userId: string, userName: string, startTime: string, endTime: string, purpose: string, bookingId?: string) => void;
  existingBookings: Booking[];
  requireGoogleLogin?: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  date, googleUser, isInternalNetwork, onGoogleLogin, onGoogleLogout, editingBooking, onClose, onSave, existingBookings, requireGoogleLogin = true
}) => {
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('08:30');
  const [purpose, setPurpose] = useState('');
  const [manualName, setManualName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingBooking) {
      setStartTime(editingBooking.startTime);
      setEndTime(editingBooking.endTime);
      setPurpose(editingBooking.purpose);
      if (!requireGoogleLogin) setManualName(editingBooking.userName);
    }
  }, [editingBooking]);

  const handleSave = () => {
    let finalUserId = '';
    let finalUserName = '';

    if (requireGoogleLogin) {
      if (!googleUser) { setError('請先點擊上方按鈕完成 Google 帳號驗證'); return; }
      finalUserId = googleUser.id;
      finalUserName = googleUser.name;
    } else {
      if (googleUser) {
        finalUserId = googleUser.id;
        finalUserName = googleUser.name;
      } else {
        if (!manualName.trim()) { setError('請填寫預約人姓名'); return; }
        finalUserId = `guest_${Date.now()}`;
        finalUserName = manualName.trim();
      }
    }

    if (!purpose.trim()) { setError('請填寫預約用途說明'); return; }
    if (startTime >= endTime) { setError('預約結束時間需晚於開始時間'); return; }
    
    const hasOverlap = existingBookings.some(b => {
       if (editingBooking && b.id === editingBooking.id) return false;
       return (startTime < b.endTime && endTime > b.startTime);
    });
    if (hasOverlap) { setError('此時段已被其他同仁預約，請調整時間'); return; }

    onSave(finalUserId, finalUserName, startTime, endTime, purpose, editingBooking?.id);
  };

  const getButtonClass = (isActive: boolean) => {
    const base = "flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-300 border-2 ";
    const active = "bg-slate-900 text-white border-transparent shadow-lg scale-[1.03]";
    const inactive = "bg-white text-slate-400 border-slate-100 hover:bg-slate-50";
    return base + (isActive ? active : inactive);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-hidden">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 max-h-[92vh] flex flex-col">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center shrink-0">
          <h3 className="text-lg font-bold text-slate-800">
            {format(date, 'yyyy/MM/dd')} 預約登記
          </h3>
          <button type="button" onClick={onClose} className="p-2 text-slate-300 hover:text-slate-800 transition-colors"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto no-scrollbar flex-1">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold border border-red-100 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 shrink-0" />{error}
            </div>
          )}

          {googleUser ? (
            <div className="bg-slate-900 rounded-[1.5rem] p-5 border border-slate-800 flex flex-col space-y-3.5 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-16 h-16 text-white" />
               </div>
               <div className="flex items-center space-x-4 z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30 shrink-0">{googleUser.name.charAt(0)}</div>
                  <div className="flex-1 overflow-hidden">
                     <h4 className="font-bold text-white text-base">{googleUser.name}</h4>
                     <p className="text-[11px] text-blue-400 font-medium truncate">{googleUser.email}</p>
                     <div className="mt-0.5 flex items-center text-[9px] text-green-400 font-bold uppercase tracking-widest">
                        <CheckCircle2 className="w-2.5 h-2.5 mr-1" /> 身分驗證通過
                     </div>
                  </div>
               </div>
               <button 
                 type="button"
                 onClick={() => onGoogleLogout()}
                 className="w-full flex items-center justify-center space-x-2 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/10 z-20 text-[10px] active:scale-95 cursor-pointer relative"
               >
                  <LogOut className="w-3.5 h-3.5 mr-1" />
                  <span>切換帳號或登出</span>
               </button>
            </div>
          ) : requireGoogleLogin ? (
             <div className="p-6 bg-blue-50 rounded-[2rem] text-center border-2 border-dashed border-blue-200">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Mail className="w-6 h-6 text-blue-600" />
               </div>
               <p className="text-sm font-bold text-blue-900 mb-5 leading-relaxed">為了確保預約安全性<br/>請先完成公司帳號身分驗證</p>
               <button type="button" onClick={onGoogleLogin} className="w-full flex items-center justify-center space-x-2.5 bg-blue-600 py-3.5 rounded-xl border-2 border-transparent font-bold text-sm text-white hover:bg-black transition-all shadow-xl shadow-blue-200 active:scale-95">
                 登入 Google 帳號
               </button>
             </div>
          ) : (
             <div className="space-y-1.5">
                <label className="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center px-1">
                  <UserCircle className="w-3.5 h-3.5 mr-1.5" /> 預約人姓名
                </label>
                <input 
                  type="text" 
                  value={manualName} 
                  onChange={(e) => setManualName(e.target.value)} 
                  placeholder="請輸入您的真實姓名..." 
                  className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 font-bold bg-slate-50 text-slate-800 outline-none focus:border-blue-500 transition-all text-sm shadow-inner" 
                />
                <p className="text-[9px] text-slate-400 px-1 font-medium italic">此模式無需登入即可預約，請確保姓名正確以利識別。</p>
             </div>
          )}

          <div className="space-y-3">
             <label className="block text-[10px] font-semibold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center px-1">
                <Clock className="w-3.5 h-3.5 mr-1.5" /> 快速設定時段
             </label>
             <div className="grid grid-cols-3 gap-2.5 text-xs">
                <button type="button" onClick={() => { setStartTime('08:00'); setEndTime('18:00'); }} className={getButtonClass(startTime === '08:00' && endTime === '18:00')}>
                  <Calendar className="w-4 h-4 mb-1" />全日
                </button>
                <button type="button" onClick={() => { setStartTime('08:00'); setEndTime('12:00'); }} className={getButtonClass(startTime === '08:00' && endTime === '12:00')}>
                  <Sun className="w-4 h-4 mb-1" />上午
                </button>
                <button type="button" onClick={() => { setStartTime('13:00'); setEndTime('18:00'); }} className={getButtonClass(startTime === '13:00' && endTime === '18:00')}>
                  <CloudSun className="w-4 h-4 mb-1" />下午
                </button>
             </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-500 px-1">開始時間</label>
              <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className="custom-select w-full border-2 border-slate-100 rounded-xl px-4 py-3 font-bold bg-slate-50 text-slate-800 text-sm">
                {TIME_SLOTS.slice(0,-1).map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-500 px-1">結束時間</label>
              <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="custom-select w-full border-2 border-slate-100 rounded-xl px-4 py-3 font-bold bg-slate-50 text-slate-800 text-sm">
                {TIME_SLOTS.filter(t => t > startTime).map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-500 px-1">預約用途說明</label>
            <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} placeholder="例：專案進度同步會議" className="w-full border-2 border-slate-100 rounded-xl px-4 py-3 font-bold bg-slate-50 text-slate-800 outline-none focus:border-blue-500 transition-all text-sm shadow-inner" />
          </div>
        </div>

        <div className="px-6 py-5 bg-slate-50/80 flex justify-end space-x-2.5 border-t border-slate-100 shrink-0">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-slate-400 font-bold hover:bg-slate-200 rounded-xl transition-colors text-sm">取消</button>
          <button type="button" onClick={handleSave} className="px-8 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-200 hover:bg-black transition-all active:scale-95 flex-1">確認送出預約</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
