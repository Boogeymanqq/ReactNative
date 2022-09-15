import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  FlatList,
  Text,
  Alert,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Post} from '../components/Post';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';
import {ScrollView} from 'react-native-gesture-handler';

export const Home = ({navigation}) => {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title,
    // };

    // setTodos([...todos, newTodo]);
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  async function getPost() {
    setIsLoading(true);
    try {
      const responce = await fetch(
        'https://62f8404eab9f1f8e890942aa.mockapi.io/api/test/PostArticle',
      );
      const data = await responce.json();
      setItems(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Ошибка', 'при получении статей');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle={`dark-content`} />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPost} />
        }
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FullPost', {
                id: item.id,
                title: item.title,
              })
            }>
            <Post
              imageUrl={item.imageUrl}
              title={item.title}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
      <View style={{padding: 15}}>
        <AddTodo onSubmit={addTodo} />
        {todos.map(elem => (
          <Todo todo={elem} key={elem.id} onRemove={removeTodo} />
        ))}
      </View>
    </View>
  );
};
