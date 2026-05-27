import { socialLinks } from '@/config';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from './Carousel';
import { ProductsSection } from './ProductsSection';

const HomePage = () => {
  const router = useRouter();


  const handleIndividualPress = () => {
    router.push('/individual');
  };

  const handleCorporatePress = () => {
    router.push('/corporate');
  };

  const handleGalleryPress = () => {
    router.push('/gallery');
  };

  const handleSocialPress = async (url: string, platform: string) => {
    try {
      console.log(`Attempting to open ${platform}: ${url}`);

      // Use Linking directly since openBrowserAsync is being canceled
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
        console.log('Successfully opened with Linking');
      } else {
        Alert.alert('Error', `Cannot open ${platform} link`);
      }
    } catch (error) {
      console.error(`Error opening ${platform}:`, error);
      Alert.alert('Error', `Failed to open ${platform} link`);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
        <Carousel height={220} />
        {/* Header Row (spacer) */}
        <View style={styles.headerRow}>
          <View />
          <View />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>New Request</Text>
          <Text style={styles.subtitle}>Choose an option below to get started.</Text>

          <View style={styles.optionsContainer}>
            {/* Individual Request Card */}
            <TouchableOpacity style={[styles.card, styles.individualCard]} onPress={handleIndividualPress}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="person-outline" size={30} color="#ffffff" />
              </View>
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardTitle}>Individual Request</Text>
                <Text style={styles.cardSubtitle}>For personal health inquiries</Text>
              </View>
            </TouchableOpacity>

            {/* Corporate Request Card */}
            <TouchableOpacity style={[styles.card, styles.corporateCard]} onPress={handleCorporatePress}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="briefcase-outline" size={30} color="#ffffff" />
              </View>
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardTitle}>Corporate Request</Text>
                <Text style={styles.cardSubtitle}>For company health plans</Text>
              </View>
            </TouchableOpacity>

            {/* Gallery Card */}
            <TouchableOpacity style={[styles.card, styles.galleryCard]} onPress={handleGalleryPress}>
              <View style={styles.cardIconWrapper}>
                <Ionicons name="images-outline" size={30} color="#ffffff" />
              </View>
              <View style={styles.cardTextWrapper}>
                <Text style={styles.cardTitle}>Gallery</Text>
                <Text style={styles.cardSubtitle}>M-Good Wellness Day photos</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ProductsSection />
          <View style={styles.socialBar}>
            <TouchableOpacity
              style={[styles.socialIcon, styles.socialIconSpacing, { backgroundColor: '#E1306C' }]}
              onPress={() => handleSocialPress(socialLinks.instagram, 'Instagram')}
              accessibilityLabel="Instagram"
            >
              <Ionicons name="logo-instagram" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialIcon, styles.socialIconSpacing, { backgroundColor: '#0A66C2' }]}
              onPress={() => handleSocialPress(socialLinks.linkedin, 'LinkedIn')}
              accessibilityLabel="LinkedIn"
            >
              <Ionicons name="logo-linkedin" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialIcon, styles.socialIconSpacing, { backgroundColor: '#34A853' }]}
              onPress={() => handleSocialPress(socialLinks.googleReviews, 'Google Reviews')}
              accessibilityLabel="Google Reviews"
            >
              <Ionicons name="logo-google" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialIcon, styles.socialIconSpacing, { backgroundColor: '#25D366' }]}
              onPress={() => handleSocialPress(socialLinks.whatsapp, 'WhatsApp')}
              accessibilityLabel="WhatsApp"
            >
              <Ionicons name="logo-whatsapp" size={24} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.socialIcon, styles.socialIconSpacing, { backgroundColor: '#3B82F6' }]}
              onPress={() => router.push('/about')}
              accessibilityLabel="About MGood"
            >
              <Ionicons name="information-circle-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerRow: {
    paddingHorizontal: 24,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 16,
  },
  socialBar: {
    marginTop: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  socialIconSpacing: {
    marginHorizontal: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: '#3B82F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  individualCard: {
    backgroundColor: '#3B82F6', // blue
  },
  corporateCard: {
    backgroundColor: '#14B8A6', // teal
  },
  galleryCard: {
    backgroundColor: '#8B5CF6', // purple
  },
  cardIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTextWrapper: {
    flex: 1,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginTop: 4,
  },
});

export default HomePage;
