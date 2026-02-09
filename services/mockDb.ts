
import { Booking, Announcement, User, Device } from '../types';

const STORAGE_KEYS = {
  BOOKINGS: 'meeting_room_bookings',
  ANNOUNCEMENTS: 'meeting_room_announcements',
  USERS: 'meeting_room_users',
  CONFIG: 'meeting_room_config',
  DEVICES: 'meeting_room_devices',
  SYSTEM_SETTINGS: 'meeting_room_system_settings',
  DEPARTMENTS: 'meeting_room_departments'
};

const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const setToStorage = <T,>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const dbService = {
  // System Settings - 讀取環境變數
  getSystemSettings: async () => {
    // 優先讀取環境變數，若無則使用原本的預設值
    const defaultSettings = {
      allowedDomain: (process.env as any).ALLOWED_DOMAIN || 'yi-jun.com',
      corpSsid: (process.env as any).CORP_SSID || '.YIJUN',
      guestSsid: (process.env as any).GUEST_SSID || '.YJ_VIP',
      guestPwd: (process.env as any).GUEST_PWD || '@1681688',
      showQuickBookQr: true,
      showWifiInfo: true,
      requireGoogleLogin: true,
      // 預留 Firebase 連線所需之 API KEY 環境變數
      apiKey: process.env.API_KEY || ''
    };
    
    let settings = getFromStorage(STORAGE_KEYS.SYSTEM_SETTINGS, null);
    if (!settings) {
      settings = defaultSettings;
      setToStorage(STORAGE_KEYS.SYSTEM_SETTINGS, settings);
    } else {
      // 確保即使已有快取，新的環境變數也能被考慮（視需求而定，目前保持儲存後的權限）
      settings = { ...defaultSettings, ...settings };
    }
    return settings;
  },
  
  updateSystemSettings: async (updates: any) => {
    const current = await dbService.getSystemSettings();
    setToStorage(STORAGE_KEYS.SYSTEM_SETTINGS, { ...current, ...updates });
  },

  // Departments
  getDepartments: async (): Promise<string[]> => {
    let depts = getFromStorage<string[]>(STORAGE_KEYS.DEPARTMENTS, []);
    if (depts.length === 0) {
      depts = ["財務", "行政", "工程", "資訊", "專案"];
      setToStorage(STORAGE_KEYS.DEPARTMENTS, depts);
    }
    return depts;
  },
  updateDepartments: async (newDepts: string[]) => {
    setToStorage(STORAGE_KEYS.DEPARTMENTS, newDepts);
  },

  // Config
  getConfig: async () => getFromStorage(STORAGE_KEYS.CONFIG, {
    allowedDomain: (process.env as any).ALLOWED_DOMAIN || 'yi-jun.com'
  }),
  updateConfig: async (updates: any) => {
    const current = await dbService.getConfig();
    setToStorage(STORAGE_KEYS.CONFIG, { ...current, ...updates });
  },

  // Bookings
  getBookings: async (): Promise<Booking[]> => getFromStorage(STORAGE_KEYS.BOOKINGS, []),
  saveBooking: async (booking: Booking) => {
    const bookings = await dbService.getBookings();
    bookings.push(booking);
    setToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  },
  deleteBooking: async (id: string) => {
    const bookings = (await dbService.getBookings()).filter(b => b.id !== id);
    setToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  },

  // Announcements
  getAnnouncements: async (): Promise<Announcement[]> => getFromStorage(STORAGE_KEYS.ANNOUNCEMENTS, [
    { id: '1', content: '歡迎使用羿鈞科技會議室預約系統！本系統採 Google Workspace 帳號認證預約。', isActive: true, createdAt: Date.now() }
  ]),
  saveAnnouncement: async (ann: Announcement) => {
    const anns = await dbService.getAnnouncements();
    anns.push(ann);
    setToStorage(STORAGE_KEYS.ANNOUNCEMENTS, anns);
  },
  updateAnnouncement: async (id: string, updates: Partial<Announcement>) => {
    const anns = (await dbService.getAnnouncements()).map(a => a.id === id ? { ...a, ...updates } : a);
    setToStorage(STORAGE_KEYS.ANNOUNCEMENTS, anns);
  },
  deleteAnnouncement: async (id: string) => {
    const anns = (await dbService.getAnnouncements()).filter(a => a.id !== id);
    setToStorage(STORAGE_KEYS.ANNOUNCEMENTS, anns);
  },

  // Devices
  getDevices: async (): Promise<Device[]> => getFromStorage(STORAGE_KEYS.DEVICES, [
    { id: 'dev_1', name: '4K 無線投影機', status: 'available', note: '放置於會議桌下方' },
    { id: 'dev_2', name: '高功率雷筆', status: 'available', note: '行政部領取' }
  ]),
  saveDevice: async (device: Device) => {
    const devices = await dbService.getDevices();
    devices.push(device);
    setToStorage(STORAGE_KEYS.DEVICES, devices);
  },
  updateDevice: async (id: string, updates: Partial<Device>) => {
    const devices = (await dbService.getDevices()).map(d => d.id === id ? { ...d, ...updates } : d);
    setToStorage(STORAGE_KEYS.DEVICES, devices);
  },
  deleteDevice: async (id: string) => {
    const devices = (await dbService.getDevices()).filter(d => d.id !== id);
    setToStorage(STORAGE_KEYS.DEVICES, devices);
  },

  // Users
  getUsers: async (): Promise<User[]> => {
    let users = getFromStorage<User[]>(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      users = [
        { id: 'admin_sysop', email: 'sysop', name: '系統管理員', role: 'admin', password: 'Aa123456' },
        { id: 'user_1', email: 'demo@yi-jun.com', name: '測試同仁', role: 'user', department: '工程' }
      ];
      setToStorage(STORAGE_KEYS.USERS, users);
    }
    return users;
  },
  addUser: async (user: User) => {
    const users = await dbService.getUsers();
    if (!users.find(u => u.id === user.id)) {
      users.push(user);
      setToStorage(STORAGE_KEYS.USERS, users);
    }
  },
  updateUser: async (id: string, updates: Partial<User>) => {
    const users = (await dbService.getUsers()).map(u => u.id === id ? { ...u, ...updates } : u);
    setToStorage(STORAGE_KEYS.USERS, users);
  },
  deleteUser: async (id: string) => {
    const users = (await dbService.getUsers()).filter(u => u.id !== id);
    setToStorage(STORAGE_KEYS.USERS, users);
  },
  changePassword: async (userId: string, newPassword: string) => {
    const users = (await dbService.getUsers()).map(u => u.id === userId ? { ...u, password: newPassword } : u);
    setToStorage(STORAGE_KEYS.USERS, users);
  }
};
