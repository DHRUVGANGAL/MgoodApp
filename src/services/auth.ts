import { apiService } from './api';
import { storageService } from './storage';

const AUTH_TOKEN_KEY = 'auth.accessToken';
const AUTH_USER_KEY = 'auth.userPhone';

export async function sendOtp(phoneNumber: string) {
  return apiService.post<{ message: string }>(`/auth/send-otp`, { phoneNumber });
}

export async function verifyOtp(phoneNumber: string, otp: string) {
  return apiService.post<{ token: string }>(`/auth/verify-otp`, { phoneNumber, otp });
}

export async function setAuth(token: string, phoneNumber: string) {
  await storageService.setItem(AUTH_TOKEN_KEY, token);
  await storageService.setItem(AUTH_USER_KEY, phoneNumber);
}

export async function getToken(): Promise<string | null> {
  return (await storageService.getItem<string>(AUTH_TOKEN_KEY));
}

export async function clearAuth() {
  await storageService.removeItem(AUTH_TOKEN_KEY);
  await storageService.removeItem(AUTH_USER_KEY);
}

export const AuthKeys = { AUTH_TOKEN_KEY, AUTH_USER_KEY } as const;

