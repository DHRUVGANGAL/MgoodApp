import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BlurTabBarBackground() {
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={[
        StyleSheet.absoluteFill, 
        { 
          backgroundColor: '#ffffff',
          paddingBottom: insets.bottom,
        }
      ]}
    />
  );
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
