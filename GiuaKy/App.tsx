import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <Text style={styles.title}>Tour Việt</Text>
          <Text style={styles.studentInfo}>23671451 – Nguyễn Trần Trọng Huy</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm tour theo tên..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  studentInfo: {
    fontSize: 16,
    marginBottom: 16,
  },
  searchInput: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
