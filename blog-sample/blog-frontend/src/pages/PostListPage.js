import React from 'react';
import HeaderContainer from '../container/common/HeaderContainer';
import PaginationContanier from '../container/posts/PaginationContanier';
import PostListContainer from '../container/posts/PostListContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContanier />
    </>
  );
};

export default PostListPage;
