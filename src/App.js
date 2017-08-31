import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsListWithData from './components/PostsListWithData'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  networkInterface,
});

 class App extends Component {

    render() {
      if (!this.props) return null
      console.log(this)
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Apollo</h2>
            </div>
            <PostsListWithData />
          </div>
        </ApolloProvider>
      );
    }
  }
export default App;
