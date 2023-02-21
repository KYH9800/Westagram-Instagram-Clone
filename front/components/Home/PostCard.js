import React from 'react';
// components
import PostCardEntry from '../Home/PostCardEntry';
// styled-components
import { PostsBox } from '../../styles/components/PostCardSt';

const PostCard = () => {
  return (
    <PostsBox>
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
      <PostCardEntry />
    </PostsBox>
  );
};

export default PostCard;
