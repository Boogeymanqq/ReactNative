import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const ViewTodo = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #eee;
  border-radius: 5px;
  margin: 10px;
  height: 40px;
  padding-left: 10px;
`;

const TextTodo = styled.Text``;

export const Todo = ({todo, onRemove}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      //   onLongPress={() => onRemove(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)}>
      <ViewTodo>
        <TextTodo>{todo.title}</TextTodo>
      </ViewTodo>
    </TouchableOpacity>
  );
};
