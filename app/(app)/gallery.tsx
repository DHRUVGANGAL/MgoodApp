import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { galleryImages } from '@/config';

// Hide the default header for this screen
import { Stack } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');
const imageSize = (screenWidth - 60) / 2; // 2 columns with padding

export default function Gallery() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Debug: Log gallery images
  console.log('🖼️ Gallery images:', galleryImages);

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderImageItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => openImageModal(item)}
      activeOpacity={0.8}
    >
      <Image 
        source={{ uri: item.url }} 
        style={styles.image} 
        resizeMode="cover"
        onLoad={() => console.log('✅ Image loaded:', item.title)}
        onError={(error) => console.log('❌ Image error:', item.title, error.nativeEvent.error)}
      />
      <View style={styles.imageOverlay}>
        <Ionicons name="eye-outline" size={24} color="#ffffff" />
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        
        {/* Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>M-Good Wellness Day</Text>
          <View style={styles.placeholder} />
        </View>

      {/* Gallery Grid */}
      <FlatList
        data={galleryImages}
        renderItem={renderImageItem}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.galleryContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Full Screen Image Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeImageModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={closeImageModal}
          >
            <Ionicons name="close" size={30} color="#ffffff" />
          </TouchableOpacity>
          
          {selectedImage && (
            <View style={styles.modalContent}>
              <Image 
                source={{ uri: selectedImage.url }} 
                style={styles.fullScreenImage} 
                resizeMode="contain"
              />
              <View style={styles.imageInfo}>
                <Text style={styles.imageTitle}>{selectedImage.title}</Text>
                <Text style={styles.imageDescription}>{selectedImage.description}</Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  placeholder: {
    width: 40,
  },
  galleryContainer: {
    padding: 20,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    marginBottom: 20,
    marginHorizontal: 5,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  fullScreenImage: {
    width: screenWidth - 40,
    height: screenWidth - 40,
    borderRadius: 12,
  },
  imageInfo: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 16,
    borderRadius: 12,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  imageDescription: {
    fontSize: 14,
    color: '#E5E7EB',
  },
});
