import React from 'react';
import { Announcement } from '../types';

interface MarqueeProps {
  announcements: Announcement[];
}

const Marquee: React.FC<MarqueeProps> = ({ announcements }) => {
  const activeAnnouncements = announcements.filter(a => a.isActive);
  const text = activeAnnouncements.length > 0 
    ? activeAnnouncements.map(a => a.content).join(' | ') 
    : '目前尚無公告';

  return (
    <div className="bg-blue-600 text-white py-2 px-4 shadow-sm marquee-container relative z-10">
      <div className="marquee-content font-medium">
        {text}
      </div>
    </div>
  );
};

export default Marquee;