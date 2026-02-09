
import { Booking, Announcement, User, Device } from '../types';
import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  limit
} from 'firebase/firestore';

const COLLECTIONS = {
  BOOKINGS: 'bookings',
  ANNOUNCEMENTS: 'announcements',
  USERS: 'users',
  CONFIG: 'config',
  DEVICES: 'devices',
  SYSTEM_SETTINGS: 'system_settings',
  DEPARTMENTS: 'departments'
};

// 輔助函式：從 Firestore 獲取單一文件或預設值
const getDocData = async <T,>(collectionName: string, id: string, defaultValue: T): Promise<T> => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as T : defaultValue;
  } catch (error) {
    console.error(`Error getting doc ${id} from ${collectionName}:`, error);
    return defaultValue;
  }
};

export const dbService = {
  // System Settings
  getSystemSettings: async () => {
    const defaultSettings = {
      allowedDomain: 'yi-jun.com',
      corpSsid: '.YIJUN',
      guestSsid: '.YJ_VIP',
      guestPwd: '@1681688',
      showQuickBookQr: true,
      showWifiInfo: true,
      requireGoogleLogin: true,
      apiKey: ''
    };

    return await getDocData(COLLECTIONS.SYSTEM_SETTINGS, 'main', defaultSettings);
  },

  updateSystemSettings: async (updates: any) => {
    const docRef = doc(db, COLLECTIONS.SYSTEM_SETTINGS, 'main');
    await setDoc(docRef, updates, { merge: true });
  },

  // Departments
  getDepartments: async (): Promise<string[]> => {
    const data = await getDocData<{ list: string[] }>(COLLECTIONS.DEPARTMENTS, 'main', { list: ["財務", "行政", "工程", "資訊", "專案"] });
    return data.list;
  },
  updateDepartments: async (newDepts: string[]) => {
    const docRef = doc(db, COLLECTIONS.DEPARTMENTS, 'main');
    await setDoc(docRef, { list: newDepts });
  },

  // Config
  getConfig: async () => {
    return await getDocData(COLLECTIONS.CONFIG, 'main', { allowedDomain: 'yi-jun.com' });
  },
  updateConfig: async (updates: any) => {
    const docRef = doc(db, COLLECTIONS.CONFIG, 'main');
    await setDoc(docRef, updates, { merge: true });
  },

  // Bookings
  getBookings: async (): Promise<Booking[]> => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.BOOKINGS));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Booking));
  },
  saveBooking: async (booking: Booking) => {
    const { id, ...data } = booking;
    if (id && !id.startsWith('book_')) {
      // 如果有指定 ID 且不是自動生成的格式，使用 setDoc
      await setDoc(doc(db, COLLECTIONS.BOOKINGS, id), data);
    } else {
      // 否則自動生成
      await addDoc(collection(db, COLLECTIONS.BOOKINGS), data);
    }
  },
  deleteBooking: async (id: string) => {
    await deleteDoc(doc(db, COLLECTIONS.BOOKINGS, id));
  },

  // Announcements
  getAnnouncements: async (): Promise<Announcement[]> => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.ANNOUNCEMENTS));
    const anns = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Announcement));
    if (anns.length === 0) {
      return [{ id: '1', content: '歡迎使用羿鈞科技會議室預約系統！目前已啟動 Firebase 雲端同步。', isActive: true, createdAt: Date.now() }];
    }
    return anns;
  },
  saveAnnouncement: async (ann: Announcement) => {
    const { id, ...data } = ann;
    await addDoc(collection(db, COLLECTIONS.ANNOUNCEMENTS), data);
  },
  updateAnnouncement: async (id: string, updates: Partial<Announcement>) => {
    const docRef = doc(db, COLLECTIONS.ANNOUNCEMENTS, id);
    await setDoc(docRef, updates, { merge: true });
  },
  deleteAnnouncement: async (id: string) => {
    await deleteDoc(doc(db, COLLECTIONS.ANNOUNCEMENTS, id));
  },

  // Devices
  getDevices: async (): Promise<Device[]> => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.DEVICES));
    const devices = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as Device));
    if (devices.length === 0) {
      return [
        { id: 'dev_1', name: '4K 無線投影機', status: 'available', note: '放置於會議桌下方' },
        { id: 'dev_2', name: '高功率雷筆', status: 'available', note: '行政部領取' }
      ];
    }
    return devices;
  },
  saveDevice: async (device: Device) => {
    const { id, ...data } = device;
    await addDoc(collection(db, COLLECTIONS.DEVICES), data);
  },
  updateDevice: async (id: string, updates: Partial<Device>) => {
    const docRef = doc(db, COLLECTIONS.DEVICES, id);
    await updateDoc(docRef, updates);
  },
  deleteDevice: async (id: string) => {
    await deleteDoc(doc(db, COLLECTIONS.DEVICES, id));
  },

  // Users
  getUsers: async (): Promise<User[]> => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.USERS));
    const users = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as User));
    if (users.length === 0) {
      // 初始化預設管理員
      const defaultAdmin = { email: 'sysop', name: '系統管理員', role: 'admin_l1' as const, password: 'Aa123456' };
      const docRef = await addDoc(collection(db, COLLECTIONS.USERS), defaultAdmin);
      return [{ ...defaultAdmin, id: docRef.id }];
    }
    return users;
  },
  addUser: async (user: User) => {
    const { id, ...data } = user;
    await addDoc(collection(db, COLLECTIONS.USERS), data);
  },
  updateUser: async (id: string, updates: Partial<User>) => {
    const docRef = doc(db, COLLECTIONS.USERS, id);
    await updateDoc(docRef, updates);
  },
  deleteUser: async (id: string) => {
    await deleteDoc(doc(db, COLLECTIONS.USERS, id));
  },
  changePassword: async (userId: string, newPassword: string) => {
    const docRef = doc(db, COLLECTIONS.USERS, userId);
    await updateDoc(docRef, { password: newPassword });
  }
};
