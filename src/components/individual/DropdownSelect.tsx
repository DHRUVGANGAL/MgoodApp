import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownSelectProps {
  options: DropdownOption[];
  value: string;
  placeholder: string;
  icon?: string;
  onValueChange: (value: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  value,
  placeholder,
  onValueChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (optionValue: string) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => setIsOpen(true)}
        activeOpacity={0.7}
      >
        <Text style={[styles.triggerText, !selectedOption && styles.placeholderText]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#94a3b8" />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.sheet}>
            {/* Sheet Header */}
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Select Option</Text>
              <TouchableOpacity
                onPress={() => setIsOpen(false)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="close" size={22} color="#6b7280" />
              </TouchableOpacity>
            </View>

            {/* Options */}
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
              {options.map((option, index) => {
                const isSelected = selectedOption?.value === option.value;
                return (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.optionRow,
                      index === options.length - 1 && styles.lastOptionRow,
                      isSelected && styles.selectedRow,
                    ]}
                    onPress={() => handleSelect(option.value)}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.optionLabel, isSelected && styles.selectedLabel]}>
                      {option.label}
                    </Text>
                    {isSelected && (
                      <View style={styles.checkWrap}>
                        <Ionicons name="checkmark" size={16} color="#0d9488" />
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  // ── Trigger Button ──
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 13,
    minHeight: 48,
  },
  triggerText: {
    fontSize: 15,
    color: '#1f2937',
    flex: 1,
  },
  placeholderText: {
    color: '#9ca3af',
  },

  // ── Modal ──
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sheet: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    width: '100%',
    maxHeight: '65%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
  },
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  sheetTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  // ── Options ──
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f8fafc',
  },
  lastOptionRow: {
    borderBottomWidth: 0,
  },
  selectedRow: {
    backgroundColor: '#f0fdfa',
  },
  optionLabel: {
    fontSize: 15,
    color: '#374151',
    flex: 1,
  },
  selectedLabel: {
    color: '#0d9488',
    fontWeight: '600',
  },
  checkWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ccfbf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DropdownSelect;
