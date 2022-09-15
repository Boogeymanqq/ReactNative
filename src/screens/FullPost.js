import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';
import {Loading} from '../components/Loading';
import {FlatList} from 'react-native';
import {RefreshControl} from 'react-native-gesture-handler';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPost = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState({});

  const {id, title} = route.params;

  async function getPost() {
    setIsLoading(true);
    try {
      const responce = await fetch(
        'https://62f8404eab9f1f8e890942aa.mockapi.io/api/test/PostArticle/' +
          id,
      );
      const data = await responce.json();
      setData(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Ошибка', 'не удалось получить статью');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      title,
    });

    getPost();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // console.log(data);

  return (
    <View style={{padding: 20}}>
      <RefreshControl refreshing={isLoading} onRefresh={getPost}>
        <PostImage source={{uri: data.imageUrl}} />
        <PostText>{data.text}</PostText>
      </RefreshControl>
    </View>
  );
};
