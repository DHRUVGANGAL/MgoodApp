import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/useThemeColor';

export default function ProductsScreen() {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Page Header */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>Our Products</Text>
          <Text style={styles.pageSubtitle}>
            Trusted solutions for health protection and diagnostics
          </Text>
        </View>

        {/* ─── Cyber Security Insurance ─── */}
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={() => router.push('/cyber-security')}
          style={styles.cardOuter}
        >
          <LinearGradient
            colors={['#4338ca', '#6366f1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroCard}
          >
            <View style={styles.heroContent}>
              <View style={styles.heroBadge}>
                <Ionicons name="shield-checkmark" size={14} color="#ffffff" />
                <Text style={styles.heroBadgeText}>INSURANCE</Text>
              </View>
              <Text style={styles.heroTitle}>Cyber Security{'\n'}Insurance</Text>
              <Text style={styles.heroDesc}>
                Protect your clinic, hospital, or practice from digital threats — data breaches, ransomware, and compliance violations.
              </Text>
              <View style={styles.heroCta}>
                <Text style={styles.heroCtaText}>Learn More</Text>
                <Ionicons name="arrow-forward" size={14} color="#ffffff" />
              </View>
            </View>
            {/* Large decorative icon */}
            <View style={styles.heroIconBg}>
              <Ionicons name="shield-checkmark-outline" size={110} color="rgba(255,255,255,0.08)" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Cyber Security — Key highlights */}
        <View style={styles.highlightsRow}>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#4f46e5' }]} />
            <Text style={styles.chipText}>Data Breach Cover</Text>
          </View>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#4f46e5' }]} />
            <Text style={styles.chipText}>Ransomware Support</Text>
          </View>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#4f46e5' }]} />
            <Text style={styles.chipText}>HIPAA Compliance</Text>
          </View>
        </View>

        {/* ─── Path Lab ─── */}
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={() => router.push('/path-lab')}
          style={styles.cardOuter}
        >
          <LinearGradient
            colors={['#be123c', '#f43f5e']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroCard}
          >
            <View style={styles.heroContent}>
              <View style={styles.heroBadge}>
                <Ionicons name="flask" size={14} color="#ffffff" />
                <Text style={styles.heroBadgeText}>DIAGNOSTICS</Text>
              </View>
              <Text style={styles.heroTitle}>Path Lab{'\n'}Diagnostics</Text>
              <Text style={styles.heroDesc}>
                Book certified blood tests from home. NABL-accredited labs, sterile collection, and rapid digital reports.
              </Text>
              <View style={styles.heroCta}>
                <Text style={styles.heroCtaText}>Book a Test</Text>
                <Ionicons name="arrow-forward" size={14} color="#ffffff" />
              </View>
            </View>
            {/* Large decorative icon */}
            <View style={styles.heroIconBg}>
              <Ionicons name="flask-outline" size={110} color="rgba(255,255,255,0.08)" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Path Lab — Key highlights */}
        <View style={styles.highlightsRow}>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#e11d48' }]} />
            <Text style={styles.chipText}>Doorstep Collection</Text>
          </View>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#e11d48' }]} />
            <Text style={styles.chipText}>NABL Certified</Text>
          </View>
          <View style={styles.highlightChip}>
            <View style={[styles.chipDot, { backgroundColor: '#e11d48' }]} />
            <Text style={styles.chipText}>24hr Reports</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
  },

  // ── Page Header ──
  pageHeader: {
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.3,
  },
  pageSubtitle: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 4,
    fontWeight: '400',
  },

  // ── Hero Gradient Cards ──
  cardOuter: {
    marginBottom: 12,
  },
  heroCard: {
    borderRadius: 20,
    padding: 24,
    minHeight: 200,
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
  },
  heroIconBg: {
    position: 'absolute',
    right: -15,
    bottom: -15,
    zIndex: 1,
    opacity: 1,
  },
  heroBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 5,
    marginBottom: 14,
  },
  heroBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 32,
    marginBottom: 10,
  },
  heroDesc: {
    fontSize: 13.5,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 19,
    maxWidth: '85%',
    marginBottom: 16,
  },
  heroCta: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  heroCtaText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },

  // ── Highlight Chips ──
  highlightsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 28,
    paddingHorizontal: 2,
  },
  highlightChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  chipText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },

  // ── Trust Strip ──
  trustStrip: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    gap: 20,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  trustText: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '600',
  },
  trustDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#e2e8f0',
  },
});
