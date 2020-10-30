import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const PostScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');

    const post = state.find(p => p.id === id);

    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

PostScreen.navigationOptions = ({ navigation }) => {
    const id = navigation.getParam('id');

    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('EditPost', { id })}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        ),
    };
}

export default PostScreen;
