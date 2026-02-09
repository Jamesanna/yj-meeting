export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password?: string; // 用於登入驗證
  department?: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  purpose: string;
  createdAt: number;
}

export interface Announcement {
  id: string;
  content: string;
  isActive: boolean;
  createdAt: number;
}

export interface Device {
  id: string;
  name: string;
  status: 'available' | 'maintenance' | 'broken';
  note?: string;
}

export interface SystemConfig {
  officeHoursStart: string;
  officeHoursEnd: string;
  slotInterval: number; // minutes
}