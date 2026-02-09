import React, { useState } from 'react';
import { 
  format, 
  endOfMonth, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  addMonths, 
  getDay,
  isToday
} from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { Booking } from '../types';
import { WEEKDAYS, HOLIDAYS_2026 } from '../constants';
import { ChevronLeft, ChevronRight, Clock, Coffee, Ban, Sparkles } from 'lucide-react';

interface CalendarProps {
  bookings: Booking[];
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ bookings, selectedDate, onDateSelect }) => {
  const [viewMonth, setViewMonth] = useState(new Date(selectedDate));
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const monthStart = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const monthEnd = endOfMonth(monthStart);
  
  const dayOfmonthStart = getDay(monthStart);
  const diffToMonday = dayOfmonthStart === 0 ? -6 : 1 - dayOfmonthStart;
  const calendarStart = new Date(monthStart);
  calendarStart.setDate(monthStart.getDate() + diffToMonday);

  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  const nextMonth = () => setViewMonth(addMonths(viewMonth, 1));
  const prevMonth = () => setViewMonth(addMonths(viewMonth, -1));

  const handleDayClick = (day: Date) => {
    const dateStr = format(day, 'yyyy-MM-dd');
    // 在手機上，點擊日期時切換 Hover 狀態以顯示 Tooltip
    if (hoveredDate === dateStr) {
      setHoveredDate(null);
    } else {
      setHoveredDate(dateStr);
    }
    onDateSelect(day);
  };

  return (
    <div className="bg-white p-2 md:p-4 select-none max-w-full overflow-visible">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6 px-2">
        <button onClick={prevMonth} className="p-2.5 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-slate-400" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
          {format(viewMonth, 'MMMM yyyy', { locale: zhTW })}
        </h2>
        <button onClick={nextMonth} className="p-2.5 hover:bg-slate-100 rounded-full transition-colors">
          <ChevronRight className="w-6 h-6 text-slate-400" />
        </button>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 mb-4 border-b border-slate-50">
        {WEEKDAYS.map((day) => (
          <div key={day} className="text-center text-xs md:text-sm text-slate-400 font-semibold py-3 uppercase tracking-widest">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-y-1 relative">
        {days.map((day, idx) => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const dayBookings = bookings.filter(b => b.date === dateStr).sort((a,b) => a.startTime.localeCompare(b.startTime));
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isSelected = isSameDay(day, selectedDate);
          const isDayToday = isToday(day);
          const isWeekend = getDay(day) === 0 || getDay(day) === 6;
          const isPast = dateStr < format(new Date(), 'yyyy-MM-dd');
          
          // 偵測是否為國定假日
          const holidayName = HOLIDAYS_2026[dateStr];
          const isHoliday = !!holidayName;

          // 計算所在的列 (0-6)
          const colIndex = idx % 7;

          // 決定 Tooltip 位置避免裁切
          let tooltipClasses = "absolute bottom-full mb-4 w-64 bg-slate-900 text-white p-5 rounded-[2rem] shadow-2xl z-50 pointer-events-none border border-white/5 animate-in fade-in zoom-in-95 ";
          let arrowClasses = "absolute top-full border-[10px] border-transparent border-t-slate-900 ";

          if (colIndex < 2) {
             tooltipClasses += "left-0 translate-x-0";
             arrowClasses += "left-6 translate-x-0";
          } else if (colIndex > 4) {
             tooltipClasses += "right-0 left-auto translate-x-0";
             arrowClasses += "right-6 left-auto";
          } else {
             tooltipClasses += "left-1/2 -translate-x-1/2";
             arrowClasses += "left-1/2 -translate-x-1/2";
          }

          return (
            <div
              key={day.toString()}
              onClick={() => isCurrentMonth && handleDayClick(day)}
              onMouseEnter={() => setHoveredDate(dateStr)}
              onMouseLeave={() => setHoveredDate(null)}
              className={`relative flex flex-col items-center justify-center h-14 md:h-20 cursor-pointer group transition-all ${
                !isCurrentMonth ? 'opacity-10 pointer-events-none' : 'text-slate-800'
              }`}
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center font-bold text-base md:text-xl transition-all duration-300 ${
                isSelected ? 'calendar-day-selected scale-110' : isDayToday ? 'calendar-day-today' : 'group-hover:bg-slate-100 rounded-2xl'
              } ${isCurrentMonth && (isPast || isHoliday) && !isSelected ? 'text-slate-300' : ''} ${isWeekend && isCurrentMonth && !isSelected ? 'text-slate-200' : ''}`}>
                {format(day, 'd')}
                {isHoliday && isCurrentMonth && <div className="absolute top-1 right-1 md:top-2 md:right-2 w-1.5 h-1.5 bg-orange-500 rounded-full"></div>}
              </div>
              
              {/* Markers */}
              <div className="h-1 mt-1.5 flex space-x-1">
                {isCurrentMonth && !isWeekend && !isHoliday && dayBookings.length > 0 && (
                   <div className={`w-5 h-1 rounded-full ${isSelected ? 'bg-white/80' : isPast ? 'bg-slate-200' : 'bg-[#e54304]'}`}></div>
                )}
              </div>

              {/* Hover Tooltip - 支援行動端 */}
              {hoveredDate === dateStr && isCurrentMonth && (
                <div className={`block ${tooltipClasses}`}>
                   <p className="text-xs font-semibold uppercase text-blue-400 mb-4 border-b border-white/10 pb-2 flex items-center tracking-widest">
                     <Clock className="w-4 h-4 mr-2" />
                     本日預約狀況
                   </p>
                   <div className="space-y-3">
                      {isHoliday || isWeekend || isPast ? (
                        <div className="flex flex-col items-center py-3">
                           <Ban className="w-8 h-8 mb-2 text-slate-500 opacity-60" />
                           <p className="text-base font-bold text-slate-100">{holidayName || "不開放預約"}</p>
                           <p className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-widest">
                             {isHoliday ? "國定假日" : isWeekend ? "假日休息" : "日期已過"}
                           </p>
                        </div>
                      ) : dayBookings.length > 0 ? (
                        <>
                          {dayBookings.slice(0, 4).map(b => (
                            <div key={b.id} className="text-sm flex flex-col">
                              <div className="flex justify-between items-center">
                                 <span className="font-semibold text-slate-100 truncate flex-1 mr-2">{b.userName}</span>
                                 <span className="font-medium text-blue-300 text-xs whitespace-nowrap">{b.startTime} - {b.endTime}</span>
                              </div>
                            </div>
                          ))}
                          {dayBookings.length > 4 && (
                            <p className="text-xs text-center opacity-40 pt-2 border-t border-white/5 mt-2 italic">還有 {dayBookings.length - 4} 筆...</p>
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center py-3 opacity-60">
                           <Coffee className="w-8 h-8 mb-2 text-slate-500" />
                           <p className="text-base font-semibold text-slate-300">開放預約</p>
                        </div>
                      )}
                   </div>
                   <div className={arrowClasses}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;