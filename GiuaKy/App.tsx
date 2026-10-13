import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.title}>Tour Việt</Text>
          <Text style={styles.studentInfo}>23671451 – Nguyễn Trần Trọng Huy</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm tour theo tên..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <View>
          Helo
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#030303',
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
