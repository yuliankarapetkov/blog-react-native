import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import PostScreen from './src/screens/PostScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Post: PostScreen,
  CreatePost: CreatePostScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
