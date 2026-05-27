import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

const { width: screenWidth } = Dimensions.get('window');

export default function ProductsScreen() {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'backgroundOffset');
  const cardBg = useThemeColor({}, 'card');
  const borderBg = useThemeColor({}, 'border');

  const productsList = [
    {
      id: 'cyber',
      title: 'Cyber Security Insurance',
      subtitle: 'Premium Digital Risk Protection',
      description: 'Comprehensive risk mitigation and liability coverage designed to shield modern healthcare systems, patient files, and networks from cyber threats.',
      accent: '#4f46e5',
      icon: 'shield-checkmark-outline' as const,
      features: [
        'Electronic Health Record (EHR) leak coverage',
        'Ransomware extortion & system lock support',
        'Business downtime & recovery compensation',
        'HIPAA regulatory compliance cover',
      ],
      actionLabel: 'Explore Benefits',
      route: '/cyber-security' as const,
    },
    {
      id: 'lab',
      title: 'Path Lab Diagnostics',
      subtitle: ' door-step sample collection',
      description: 'NABL-accredited diagnostic blood and health screenings brought straight to your doorstep, accompanied by certified rapid digital reporting.',
      accent: '#e11d48',
      icon: 'flask-outline' as const,
      features: [
        'Free doorstep sample collection by specialists',
        'NABL certified digital reports within 24 hours',
        'Accurate multi-parameter metabolic profiles',
        'Sterile single-use cold chain transit',
      ],
      actionLabel: 'Schedule Lab Test',
      route: '/path-lab' as const,
    },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'} />
      <ThemedView style={[styles.container, { backgroundColor }]}>
        
        {/* Sophisticated Header */}
        <View style={[styles.header, { backgroundColor: useThemeColor({}, 'background'), borderBottomColor: borderBg }]}>
          <View style={styles.headerTitleContainer}>
            <ThemedText style={styles.headerTitle}>Our Portfolio</ThemedText>
            <ThemedText style={styles.headerSubtitle}>Sophisticated Services & Diagnostics</ThemedText>
          </View>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Section Introduction */}
          <View style={styles.introBox}>
            <ThemedText style={styles.introTitle}>
              Designed for{' '}
              <ThemedText style={[styles.introTitle, styles.greenHighlight]}>
                Wellness & Protection
              </ThemedText>
            </ThemedText>
            <ThemedText 
              style={styles.introDesc}
              lightColor={Colors.light.secondaryText}
              darkColor={Colors.dark.secondaryText}
            >
              Explore premium products crafted to ensure administrative reliability, security compliance, and certified diagnostic precision.
            </ThemedText>
          </View>

          {/* Service Cards */}
          <View style={styles.cardsContainer}>
            {productsList.map((product) => (
              <TouchableOpacity
                key={product.id}
                activeOpacity={0.95}
                onPress={() => router.push(product.route)}
              >
                <ThemedView 
                  style={[styles.productCard, { backgroundColor: cardBg, borderColor: borderBg }]}
                >
                  {/* Decorative corner accent */}
                  <View style={[styles.cornerAccent, { backgroundColor: product.accent }]} />

                  {/* Header Row */}
                  <View style={styles.cardHeaderRow}>
                    <View style={[styles.iconWrapper, { backgroundColor: `${product.accent}12` }]}>
                      <Ionicons name={product.icon} size={26} color={product.accent} />
                    </View>
                    <View style={styles.cardTitleCol}>
                      <ThemedText style={styles.productTitle}>{product.title}</ThemedText>
                      <ThemedText style={[styles.productSubtitle, { color: product.accent }]}>
                        {product.subtitle.toUpperCase()}
                      </ThemedText>
                    </View>
                  </View>

                  {/* Description */}
                  <ThemedText 
                    style={styles.productDesc}
                    lightColor={Colors.light.secondaryText}
                    darkColor={Colors.dark.secondaryText}
                  >
                    {product.description}
                  </ThemedText>

                  {/* Features Bullet List */}
                  <View style={styles.bulletList}>
                    {product.features.map((feature, i) => (
                      <View key={i} style={styles.bulletRow}>
                        <Ionicons name="checkmark-circle-outline" size={16} color="#10b981" style={styles.bulletIcon} />
                        <ThemedText 
                          style={styles.bulletText}
                          lightColor={Colors.light.secondaryText}
                          darkColor={Colors.dark.secondaryText}
                        >
                          {feature}
                        </ThemedText>
                      </View>
                    ))}
                  </View>

                  {/* Sophisticated Action Button */}
                  <View style={[styles.actionBtn, { borderColor: `${product.accent}30` }]}>
                    <ThemedText style={[styles.actionBtnText, { color: product.accent }]}>
                      {product.actionLabel}
                    </ThemedText>
                    <Ionicons name="arrow-forward" size={16} color={product.accent} />
                  </View>
                </ThemedView>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      },
      android: {
        elevation: 2,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.03,
        shadowRadius: 6,
      }
    }),
  },
  headerTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 25 : 21,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    textAlign: 'center',
    fontSize: screenWidth > 800 ? 13 : 11,
    color: '#64748b',
    marginTop: 3,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 110,
  },
  introBox: {
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  introTitle: {
    fontSize: screenWidth > 800 ? 26 : 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  greenHighlight: {
    color: '#10b981',
  },
  introDesc: {
    fontSize: screenWidth > 800 ? 15 : 13.5,
    lineHeight: 19,
    textAlign: 'center',
    fontWeight: '400',
  },
  cardsContainer: {
    gap: 20,
  },
  productCard: {
    borderWidth: 1.5,
    borderRadius: 24,
    padding: 22,
    position: 'relative',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.04,
        shadowRadius: 16,
      },
      android: {
        elevation: 3,
      },
      web: {
        shadowColor: '#0f172a',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.04,
        shadowRadius: 16,
      }
    }),
  },
  cornerAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardTitleCol: {
    flex: 1,
  },
  productTitle: {
    fontSize: screenWidth > 800 ? 20 : 17.5,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 2,
  },
  productSubtitle: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  productDesc: {
    fontSize: screenWidth > 800 ? 14.5 : 13,
    lineHeight: 18.5,
    marginBottom: 18,
    fontWeight: '400',
  },
  bulletList: {
    gap: 10,
    marginBottom: 20,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bulletIcon: {
    marginRight: 10,
  },
  bulletText: {
    fontSize: 12.5,
    fontWeight: '500',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderRadius: 14,
    paddingVertical: 11,
    gap: 8,
    backgroundColor: 'transparent',
  },
  actionBtnText: {
    fontSize: 13.5,
    fontWeight: '700',
  },
});
