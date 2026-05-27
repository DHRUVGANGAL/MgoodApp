import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { sendOtp, setAuth, verifyOtp } from '@/services/auth';

export default function PhoneAuthScreen() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [loading, setLoading] = useState(false);
  const [retryDisabled, setRetryDisabled] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const params = useLocalSearchParams();
  const returnUrl = (params.returnUrl as string) || undefined;

  useEffect(() => {
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const validatePhoneNumber = (input: string) => {
    const cleaned = String(input).trim().replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const handleChange = (index: number, text: string) => {
    const value = text.replace(/\D/, '');
    if (!value) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (index < 5 && inputRefs.current[index + 1]) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === 'Backspace') {
      const next = [...otp];
      if (!next[index] && index > 0) inputRefs.current[index - 1]?.focus();
      next[index] = '';
      setOtp(next);
    }
  };

  const handlePhoneSubmit = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    setLoading(true);
    try {
      await sendOtp(phoneNumber);
      setStep('otp');
      setRetryCount(0);
    } catch (e: any) {
      alert(e.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (otp.join('').length !== 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }
    setLoading(true);
    try {
      const result = await verifyOtp(phoneNumber, otp.join(''));
      await setAuth(result.token, phoneNumber);
      // Redirect
      if (returnUrl) router.replace(returnUrl as any); else router.replace('/');
    } catch (e: any) {
      alert(e.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = async () => {
    if (retryCount >= 3) {
      setRetryDisabled(true);
      alert('Maximum retry attempts reached. Please wait 60 seconds.');
      timerRef.current = setTimeout(() => { setRetryDisabled(false); setRetryCount(0); }, 60000);
      return;
    }
    setLoading(true);
    try {
      await sendOtp(phoneNumber);
      setRetryCount(v => v + 1);
    } finally { setLoading(false); }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoid}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.iconWrap}>
            <Ionicons name={step === 'phone' ? 'call-outline' : 'shield-checkmark-outline'} size={32} color="#2563EB" />
          </View>
          <Text style={styles.title}>{step === 'phone' ? 'Welcome Back' : 'Verify Your Identity'}</Text>
          <Text style={styles.subtitle}>
            {step === 'phone' ? 'Enter your phone number to sign in or sign up.' : `Enter the 6-digit code sent to ${phoneNumber}`}
          </Text>

          {step === 'phone' ? (
            <View style={styles.form}>
              <View style={styles.inputWrap}>
                <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                <TextInput
                  keyboardType="phone-pad"
                  placeholder="Enter 10-digit number"
                  placeholderTextColor="#6B7280"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  style={styles.textInput}
                />
              </View>
              <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handlePhoneSubmit} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : (
                  <View style={styles.buttonRow}><Text style={styles.buttonText}>Continue</Text><Ionicons name="arrow-forward" size={18} color="#fff" style={{ marginLeft: 8 }} /></View>
                )}
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.form}>
              <View style={styles.otpRow}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={ref => { inputRefs.current[index] = ref; }}
                    keyboardType="number-pad"
                    value={digit}
                    maxLength={1}
                    onChangeText={(t) => handleChange(index, t)}
                    onKeyPress={({ nativeEvent }) => handleKeyDown(index, nativeEvent.key)}
                    style={styles.otpInput}
                  />
                ))}
              </View>
              <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handleVerify} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Verify & Continue</Text>}
              </TouchableOpacity>
              <View style={{ alignItems: 'center', marginTop: 12 }}>
                <Text style={{ color: '#4B5563' }}>Didn't receive the code?</Text>
                <TouchableOpacity onPress={handleRetry} disabled={loading || retryDisabled}>
                  <Text style={{ color: retryDisabled ? '#9CA3AF' : '#2563EB', marginTop: 6 }}>Resend</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStep('phone')} disabled={loading}>
                  <Text style={{ color: '#6B7280', marginTop: 12 }}>Change Phone Number</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
    backgroundColor: '#EFF6FF',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#EFF6FF', padding: 16 },
  card: { width: '100%', maxWidth: 380, backgroundColor: '#fff', borderRadius: 16, padding: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, elevation: 6 },
  iconWrap: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(37, 99, 235, 0.1)', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '700', color: '#111827', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginTop: 6 },
  form: { marginTop: 18 },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12 },
  inputIcon: { marginRight: 10 },
  textInput: { flex: 1, fontSize: 16, color: '#111827' },
  button: { marginTop: 16, backgroundColor: '#2563EB', paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  buttonDisabled: { opacity: 0.6 },
  buttonRow: { flexDirection: 'row', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  otpRow: { flexDirection: 'row', justifyContent: 'space-between' },
  otpInput: { width: 48, height: 48, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 10, textAlign: 'center', fontSize: 20, color: '#111827' },
});

