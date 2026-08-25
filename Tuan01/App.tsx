import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import UserCard from './components/Bai1';


// Bài 2
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Text style={styles.boldText}>Bài 2</Text>
      <Text style={styles.boldText}>Số hiện tại: {count}</Text>
      <Pressable style={styles.button}
        onPress={() => setCount(count + 1)}><Text>Tăng</Text></Pressable>
      <Pressable style={styles.button}
        onPress={() => {
          if (count > 0)
            setCount(count - 1)
        }}><Text>Giảm</Text></Pressable>
    </>
  )
}

// Bài 3
type Task = {
  id: string,
  title: string
}

const ToDoList = ({ todos }: { todos: Task[] }) => {
  return (
    <>
      <Text style={styles.boldText}>Bài 3</Text>
      {todos.map((item) => {
        return (
          <View style={styles.task} key={item.id}>
            <Text style={styles.taskId}>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )
      })}
    </>
  )
}

// Bài 4

type ButtonType = {
  label: string,
  onPress: () => void,
  color?: string
}

const MyButton = ({ label, onPress, color = 'blue' }: ButtonType) => {
  return (
    <>
      <Text style={styles.boldText}>Bài 4</Text>
      <Pressable onPress={onPress} style={[styles.button, { backgroundColor: color }]} ><Text>{label}</Text></Pressable>
    </>
  )
}

// Bài 5

const Bai5 = () => {
  const [text, setText] = useState<string>('');
  return (
    <>
      <Text style={styles.boldText}>Bài 5</Text>
      <TextInput style={styles.tInput}
        placeholder='Nhập vào đây...'
        value={text} onChangeText={setText}></TextInput>
      <Text>Số kí tự: {text.length}</Text>
    </>
  )
}

// Bài 6
type LoadingType = {
  isLoading: boolean,
  children?: React.ReactNode
}

const LoadingContainer = ({ isLoading, children }: LoadingType) => {
  return (
    <>
      {isLoading ? <ActivityIndicator /> : children}
    </>
  )
}

// Bài 7
type Gender = ('male' | 'female' | 'other')

const ChooseGender = () => {
  const [selectedGender, setSelectedGender] = useState<Gender>('male');
  return (
    <>
      <Text style={styles.boldText}>Bài 7</Text>
      <Text>Tôi là: {selectedGender}</Text>

      <View>
        <Pressable
          style={[styles.button, selectedGender === 'male' && styles.activeButton]}
          onPress={() => setSelectedGender('male')}>
          <Text style={[selectedGender === 'male' && styles.activeButtonText]}>
            Male
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, selectedGender === 'female' && styles.activeButton]}
          onPress={() => setSelectedGender('female')}>
          <Text style={[selectedGender === 'female' && styles.activeButtonText]}>
            Female
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, selectedGender === 'other' && styles.activeButton]}
          onPress={() => setSelectedGender('other')}>
          <Text style={[selectedGender === 'other' && styles.activeButtonText]}>
            Female
          </Text>
        </Pressable>
      </View>
    </>
  )
}
// Bài 8
type AppButtonType = {
  title: string,
  variant?: ('primary' | 'secondary' | 'outline' | 'danger'),
  size?: ('small' | 'medium' | 'large'),
  onPress: () => void,
  disabled?: boolean,
  loading?: boolean,
  icon?: React.ReactNode,
}

export const AppButton = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon,
}: AppButtonType) => {

  return (
    <>
      <Text style={styles.boldText}>Bài 8</Text>
      <Pressable></Pressable>
    </>

  );
};



const mockTasks: Task[] = [
  { id: '1', title: 'Task 1' },
  { id: '2', title: 'Task 2' },
  { id: '3', title: 'Task 3' },
  { id: '4', title: 'Task 4' },
];


export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Bài 1 */}
      <Text style={styles.boldText}>Bài 1</Text>
      <UserCard name='Huy' age={20} isAdmin={false}></UserCard>
      <UserCard name='Như' age={23} isAdmin={true}></UserCard>

      {/* Bài 2 */}
      <Counter></Counter>

      {/* Bài 3 */}
      <ToDoList todos={mockTasks}></ToDoList>

      {/* Bài 4 */}
      <MyButton label='Click me!'
        onPress={() => { alert('Đã click!') }}
        color='yellow'>
      </MyButton>

      {/* Bài 5 */}
      <Bai5></Bai5>

      {/* Bài 6 */}
      <Text style={styles.boldText}>Bài 6</Text>

      <LoadingContainer isLoading={true}>
        <Text>This is Children 1!</Text>
      </LoadingContainer>
      <LoadingContainer isLoading={false}>
        <Text>This is Children 1!</Text>
      </LoadingContainer>

      {/* Bài 7 */}
      <ChooseGender></ChooseGender>

      {/* Bài 8 */}
      <Text style={styles.boldText}>Bài 8</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbd1ff',
    marginTop: 2,
    padding: 2,
    borderRadius: 8,
  },
  task: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  taskId: {
    marginRight: 20
  },
  tInput: {
    borderColor: 'black',
    borderWidth: 0.5,
  },
  activeButton: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  activeButtonText: {
    color: '#ffffff',
  },
});
