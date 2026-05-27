import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export function HapticTab(props: BottomTabBarButtonProps) {
  const handlePressIn = async (ev: any) => {
    if (Platform.OS === 'ios') {
      // Add a soft haptic feedback when pressing down on the tabs.
      try {
        console.log('Triggering haptic feedback...');
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        console.log('Haptic feedback triggered successfully');
      } catch (error) {
        console.log('Haptic feedback error:', error);
      }
    }
    props.onPressIn?.(ev);
  };

  const handlePress = (ev: any) => {
    // Ensure the press event is properly handled
    props.onPress?.(ev);
  };

  return (
    <PlatformPressable
      {...props}
      onPressIn={handlePressIn}
      onPress={handlePress}
    />
  );
}
