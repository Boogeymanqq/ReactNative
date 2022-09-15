import React, {useState} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

const MainBlock = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  //   aling-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  border-color: rgba(0, 0, 0, 0.5);
  border-width: 3px;
  border-style: solid;
`;

const TodoBtn = styled.Button`
  //   width: 100%;
`;

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  function onPressHandler() {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  }

  return (
    <MainBlock>
      <Input
        value={value}
        onChangeText={text => setValue(text)}
        placeholder="Введите название дела..."
        autoCorrect={false}
        autoCapitalize="none"
        // keyboardType="number-pad"
      />
      <TodoBtn onPress={onPressHandler} title="Add" />
    </MainBlock>
  );
};
