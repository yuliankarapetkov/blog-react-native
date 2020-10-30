import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/BlogContext';

const PostScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const post = state.find(p => p.id === id);

    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default PostScreen;
