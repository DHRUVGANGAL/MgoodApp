import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const plansData = [
  {
    id: '1',
    name: "Plan 1",
    sumInsured: "₹1,00,000",
    premium: 2970,
    description: "Essential cyber protection for individuals",
    features: [
      "Theft of Funds",
      "Identity Theft",
      "Cyber Bullying / Cyber Stalking",
      "Social Media & Media Liability",
      "Privacy Breach & Data Breach Liability",
      "Online Shopping"
    ],
    highlight: false
  },
  {
    id: '2',
    name: "Plan 2",
    sumInsured: "₹5,00,000",
    premium: 3460,
    description: "Enhanced protection with higher coverage",
    features: [
      "Theft of Funds",
      "Identity Theft",
      "Cyber Bullying / Cyber Stalking",
      "Social Media & Media Liability",
      "Privacy Breach & Data Breach Liability",
      "Online Shopping"
    ],
    highlight: false
  },
  {
    id: '3',
    name: "Plan 3",
    sumInsured: "₹10,00,000",
    premium: 3995,
    description: "Comprehensive coverage for complete peace of mind",
    features: [
      "Theft of Funds",
      "Identity Theft",
      "Cyber Bullying / Cyber Stalking",
      "Social Media & Media Liability",
      "Privacy Breach & Data Breach Liability",
      "Online Shopping"
    ],
    highlight: true
  },
  {
    id: '4',
    name: "Plan 4",
    sumInsured: "₹15,00,000",
    premium: 5245,
    description: "Maximum protection with the highest sum insured",
    features: [
      "Theft of Funds",
      "Identity Theft",
      "Cyber Bullying / Cyber Stalking",
      "Social Media & Media Liability",
      "Privacy Breach & Data Breach Liability",
      "Online Shopping"
    ],
    highlight: false
  }
];

export default function CyberSecurityScreen() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const formRefY = useRef<number>(0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSumInsured, setSelectedSumInsured] = useState('');

  const handleSelectPlan = (sumInsured: string) => {
    setSelectedSumInsured(sumInsured);
    // Scroll to form
    if (scrollViewRef.current && formRefY.current > 0) {
      scrollViewRef.current.scrollTo({ y: formRefY.current, animated: true });
    }
  };

  const handleRegister = () => {
    console.log("Registration Attempt:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Selected Sum Insured:", selectedSumInsured);
    // Here we just log for now as requested
    alert(`Registered with Sum Insured: ${selectedSumInsured || 'None Selected'}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'} />
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton} 
          >
            <Ionicons name="arrow-back" size={24} color="#1f2937" />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Cyber Security</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
        >
          <ScrollView 
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollContent} 
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <View style={styles.heroIconWrapper}>
                <Ionicons name="shield-checkmark" size={32} color="#4f46e5" />
              </View>
              <Text style={styles.heroTitle}>Choose Your Cyber Protection Plan</Text>
              <Text style={styles.heroDesc}>
                Select the plan that best suits your cybersecurity needs. All plans include comprehensive coverage across all categories.
              </Text>
            </View>

            {/* Plans List */}
            <View style={styles.plansContainer}>
              {plansData.map((plan, index) => {
                const isSelected = selectedSumInsured === plan.sumInsured;
                if (plan.highlight) {
                  return (
                    <TouchableOpacity 
                      key={plan.id}
                      activeOpacity={0.9}
                      onPress={() => handleSelectPlan(plan.sumInsured)}
                      style={{ marginTop: 15 }}
                    >
                      <LinearGradient
                        colors={['#0f172a', '#1e3a8a', '#0f172a']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={[styles.planCardHighlighted, isSelected && styles.selectedRing]}
                      >
                        <View style={styles.planCardInnerHighlight}>
                          <Text style={[styles.planName, { color: '#ffffff' }]}>{plan.name}</Text>
                          
                          <View style={styles.sumInsuredBoxHighlight}>
                            <Text style={styles.sumInsuredLabelHighlight}>Sum Insured</Text>
                            <Text style={styles.sumInsuredValueHighlight}>{plan.sumInsured}</Text>
                          </View>
                          
                          <Text style={[styles.planDesc, { color: 'rgba(255,255,255,0.8)' }]}>{plan.description}</Text>
                          
                          <View style={[styles.divider, { backgroundColor: 'rgba(255,255,255,0.1)' }]} />
                          
                          <View style={styles.premiumBox}>
                            <Text style={[styles.premiumValue, { color: '#ffffff' }]}>₹{plan.premium.toLocaleString('en-IN')}</Text>
                            <Text style={[styles.premiumSuffix, { color: '#93c5fd' }]}>/year</Text>
                          </View>
                          
                          <View style={styles.featuresList}>
                            {plan.features.map((feature, i) => (
                              <View key={i} style={styles.featureRow}>
                                <View style={styles.checkWrapHighlight}>
                                  <Ionicons name="checkmark" size={12} color="#93c5fd" />
                                </View>
                                <Text style={[styles.featureText, { color: '#e0f2fe' }]}>{feature}</Text>
                              </View>
                            ))}
                          </View>

                          <View style={[styles.selectBtnHighlight, isSelected && styles.selectBtnActive]}>
                            <Text style={[styles.selectBtnTextHighlight, isSelected && styles.selectBtnTextActive]}>
                              {isSelected ? 'Selected Plan' : 'Select this plan'}
                            </Text>
                            {!isSelected && <Ionicons name="arrow-forward" size={16} color="#93c5fd" style={{ marginLeft: 4 }} />}
                          </View>
                        </View>
                      </LinearGradient>

                      <View style={styles.mostPopularBadge}>
                        <LinearGradient
                          colors={['#fbbf24', '#f97316']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
                          style={styles.mostPopularGradient}
                        >
                          <Text style={styles.mostPopularText}>Most Popular</Text>
                        </LinearGradient>
                      </View>
                    </TouchableOpacity>
                  );
                }

                return (
                  <TouchableOpacity 
                    key={plan.id}
                    activeOpacity={0.9}
                    onPress={() => handleSelectPlan(plan.sumInsured)}
                    style={[styles.planCard, isSelected && styles.selectedRing]}
                  >
                    <Text style={styles.planName}>{plan.name}</Text>
                    
                    <View style={styles.sumInsuredBox}>
                      <Text style={styles.sumInsuredLabel}>Sum Insured</Text>
                      <Text style={styles.sumInsuredValue}>{plan.sumInsured}</Text>
                    </View>
                    
                    <Text style={styles.planDesc}>{plan.description}</Text>
                    
                    <View style={styles.divider} />
                    
                    <View style={styles.premiumBox}>
                      <Text style={styles.premiumValue}>₹{plan.premium.toLocaleString('en-IN')}</Text>
                      <Text style={styles.premiumSuffix}>/year</Text>
                    </View>
                    
                    <View style={styles.featuresList}>
                      {plan.features.map((feature, i) => (
                        <View key={i} style={styles.featureRow}>
                          <View style={styles.checkWrap}>
                            <Ionicons name="checkmark" size={12} color="#2563eb" />
                          </View>
                          <Text style={styles.featureText}>{feature}</Text>
                        </View>
                      ))}
                    </View>

                    <View style={[styles.selectBtn, isSelected && styles.selectBtnActive]}>
                      <Text style={[styles.selectBtnText, isSelected && styles.selectBtnTextActive]}>
                        {isSelected ? 'Selected Plan' : 'Select this plan'}
                      </Text>
                      {!isSelected && <Ionicons name="arrow-forward" size={16} color="#3b82f6" style={{ marginLeft: 4 }} />}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Registration Form */}
            <View 
              style={styles.formContainer}
              onLayout={(e) => {
                formRefY.current = e.nativeEvent.layout.y;
              }}
            >
              <View style={styles.formHeader}>
                <Ionicons name="lock-closed" size={24} color="#4f46e5" />
                <Text style={styles.formTitle}>Secure Your Plan</Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Selected Sum Insured</Text>
                <View style={[styles.inputRow, styles.inputDisabled]}>
                  <Ionicons name="shield-checkmark-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    value={selectedSumInsured}
                    placeholder="Select a plan above"
                    placeholderTextColor="#9ca3af"
                    editable={false}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Full Name</Text>
                <View style={styles.inputRow}>
                  <Ionicons name="person-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor="#9ca3af"
                    value={name}
                    onChangeText={setName}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputRow}>
                  <Ionicons name="mail-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="you@example.com"
                    placeholderTextColor="#9ca3af"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.inputRow}>
                  <Ionicons name="call-outline" size={18} color="#94a3b8" style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="+91 9876543210"
                    placeholderTextColor="#9ca3af"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={styles.submitBtn} 
                onPress={handleRegister}
                activeOpacity={0.8}
              >
                <Text style={styles.submitBtnText}>Register Now</Text>
                <Ionicons name="arrow-forward" size={18} color="#ffffff" style={{ marginLeft: 8 }} />
              </TouchableOpacity>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Very light blue/gray background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  backButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  placeholder: {
    width: 40,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },

  // ── Hero Section ──
  heroSection: {
    alignItems: 'center',
    marginBottom: 30,
    paddingTop: 10,
  },
  heroIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.5,
  },
  heroDesc: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  // ── Plans ──
  plansContainer: {
    gap: 20,
    marginBottom: 40,
  },
  planCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  planCardHighlighted: {
    borderRadius: 20,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
    position: 'relative',
  },
  planCardInnerHighlight: {
    padding: 24,
    paddingTop: 36, // Extra space for the badge
  },
  selectedRing: {
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  mostPopularBadge: {
    position: 'absolute',
    top: -12,
    alignSelf: 'center',
    zIndex: 10,
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  mostPopularGradient: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  mostPopularText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  planName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 16,
  },
  sumInsuredBox: {
    backgroundColor: '#eff6ff',
    borderWidth: 1,
    borderColor: '#dbeafe',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  sumInsuredBoxHighlight: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  sumInsuredLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  sumInsuredLabelHighlight: {
    fontSize: 10,
    fontWeight: '800',
    color: '#93c5fd',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  sumInsuredValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2563eb',
  },
  sumInsuredValueHighlight: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
  },
  planDesc: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#f1f5f9',
    marginHorizontal: -24,
    marginBottom: 20,
  },
  premiumBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  premiumValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: -1,
  },
  premiumSuffix: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginLeft: 4,
  },
  featuresList: {
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkWrapHighlight: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#475569',
    flex: 1,
  },
  selectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dbeafe',
    backgroundColor: '#eff6ff',
    marginTop: 24,
  },
  selectBtnHighlight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.3)',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    marginTop: 24,
  },
  selectBtnActive: {
    backgroundColor: '#10b981',
    borderColor: '#059669',
  },
  selectBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3b82f6',
  },
  selectBtnTextHighlight: {
    fontSize: 14,
    fontWeight: '700',
    color: '#93c5fd',
  },
  selectBtnTextActive: {
    color: '#ffffff',
  },

  // ── Form ──
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  formHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 8,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputDisabled: {
    backgroundColor: '#f1f5f9',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#0f172a',
  },
  submitBtn: {
    flexDirection: 'row',
    backgroundColor: '#4f46e5',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  submitBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});
