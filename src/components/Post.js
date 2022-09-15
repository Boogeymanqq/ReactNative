import React from 'react';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({imageUrl, title, createdAt}) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostDetails>
        <PostTitle>
          {title.length >= 50 ? title.substring(0, 50) + '...' : title}
        </PostTitle>
        <PostData>{new Date(createdAt).toLocaleDateString()}</PostData>
      </PostDetails>
    </PostView>
  );
};
