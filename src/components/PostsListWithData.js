import React from 'react';
import {
    gql,
    graphql,
} from 'react-apollo';
import AddPost from './AddPost';

export const postsListQuery = gql`
   query {
     posts {
       id
       title
     }
   }
`;

const PostsList = ({ data: { loading, error, posts }}) => {
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div className="postsList">
      <AddPost />
      { posts.map( post =>
        (<div key={post.id} className="post">{post.title}</div>)
      )}
    </div>
  );
};

export default graphql(postsListQuery, {
  options: { pollInterval: 60000 },
})(PostsList);
