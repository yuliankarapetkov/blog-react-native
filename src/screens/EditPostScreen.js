import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';

import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const EditPostScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, updatePost } = useContext(Context);

    const post = state.find(p => p.id === id);

    const savePost = post => {
        updatePost(id, post);
        navigation.pop();
    };

    return (
        <PostForm
            post={post}
            onSubmit={post => savePost(post)}
        />
    )
};

const styles = StyleSheet.create({});

export default EditPostScreen;
