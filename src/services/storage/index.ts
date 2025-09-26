// Storage service for local data persistence with React Native support
// Tries SecureStore -> AsyncStorage -> localStorage -> in-memory

let SecureStore: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  SecureStore = require('expo-secure-store');
} catch {}

let AsyncStorage: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} catch {}

export class StorageService {
  async setItem(key: string, value: any): Promise<void> {
    const serialized = JSON.stringify(value);
    if (SecureStore?.setItemAsync) return SecureStore.setItemAsync(key, serialized);
    if (AsyncStorage?.setItem) return AsyncStorage.setItem(key, serialized);
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage.setItem(key, serialized);
    (global as any).__MEM_STORE__ = (global as any).__MEM_STORE__ || {};
    (global as any).__MEM_STORE__[key] = serialized;
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      if (SecureStore?.getItemAsync) {
        const v = await SecureStore.getItemAsync(key); return v ? JSON.parse(v) : null;
      }
      if (AsyncStorage?.getItem) {
        const v = await AsyncStorage.getItem(key); return v ? JSON.parse(v) : null;
      }
      if (typeof window !== 'undefined' && window.localStorage) {
        const v = window.localStorage.getItem(key); return v ? JSON.parse(v) : null;
      }
      const v = (global as any).__MEM_STORE__?.[key];
      return v ? JSON.parse(v) : null;
    } catch (error) {
      console.error('Failed to read from storage:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    if (SecureStore?.deleteItemAsync) return SecureStore.deleteItemAsync(key);
    if (AsyncStorage?.removeItem) return AsyncStorage.removeItem(key);
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage.removeItem(key);
    if ((global as any).__MEM_STORE__) delete (global as any).__MEM_STORE__[key];
  }

  async clear(): Promise<void> {
    if (AsyncStorage?.clear) return AsyncStorage.clear();
    if (typeof window !== 'undefined' && window.localStorage) return window.localStorage.clear();
    (global as any).__MEM_STORE__ = {};
  }
}

export const storageService = new StorageService();
