import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getToken } from '@/services/auth';

export default function AppGate() {
  const [ready, setReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      setIsAuthed(!!token);
      setReady(true);
    })();
  }, []);

  if (!ready || isAuthed === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!isAuthed) return <Redirect href="/login" />;
  return <Redirect href="/home" />;
}

