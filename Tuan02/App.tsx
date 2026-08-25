import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

//Bai 9
type Post = {
  userId: string,
  id: string,
  title: string,
  completed: boolean,
}

const Bai9 = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
  }, [])

  return (
    <>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
            <Text>Title: {item.title}</Text>
            <Text>Completed: {item.completed ? 'true' : 'false'}</Text>
          </View>
        }}
        keyExtractor={item => item.id}
      />
    </>
  )
}

export default function App() {


  return (
    <ScrollView style={styles.container}>
      
      <Bai9></Bai9>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
