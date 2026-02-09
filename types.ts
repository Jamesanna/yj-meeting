export type UserRole = 'admin_l1' | 'admin_l2' | 'user';

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

export interface OperationLog {
  id: string;
  userId: string;
  userName: string;
  action: 'login' | 'logout' | 'create' | 'update' | 'delete';
  module: string; // e.g., '員工管理', '公告管理', '預約系統'
  details: string; // 具體描述
  createdAt: number;
}