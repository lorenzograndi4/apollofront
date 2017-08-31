import React from 'react';
import { gql, graphql } from 'react-apollo';
import { postsListQuery } from './PostsListWithData';

const AddPost = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({
        variables: { title: evt.target.value },
        refetchQueries: [ { query: postsListQuery }],
      })
      .then( res => {
        evt.target.value = '';
      });
    }
  };
  return (
    <input
      type="text"
      placeholder="New post"
      onKeyUp={handleKeyUp} />
  );
};

const addPostMutation = gql`
  mutation addPost($title: String!) {
    addPost(title: $title) {
      id
      title
    }
  }
`;
const AddPostWithMutation = graphql(addPostMutation)(AddPost);

export default AddPostWithMutation;
