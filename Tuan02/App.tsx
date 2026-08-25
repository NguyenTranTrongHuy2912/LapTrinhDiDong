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
  const url9 = 'https://jsonplaceholder.typicode.com/todos'
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    fetch(url9)
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

//Bai 10
type User = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: Adress,
  phone: string,
  website: string,
  company: Company
}

type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}

type Adress = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

type Geo = {
  lat: "-37.3159",
  lng: "81.1496",
}

const Bai10 = () => {
  const url10 = 'https://jsonplaceholder.typicode.com/users/1'
  const [user, setUser] = useState<(User | null)>(null)
  useEffect(() => {
    fetch(url10)
    .then((res)=> res.json())
    .then((user)=> setUser(user))
  }, [])

  return (
    <>
      <FlatList
        data={user}
        renderItem={({ item }) => {
          return <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
            
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

      {/* <Bai9></Bai9> */}
      {/* Bài 10 */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
