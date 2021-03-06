import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';

import { Context } from '../context/BlogContext';
import PostForm from '../components/PostForm';

const CreatePostScreen = ({ navigation }) => {
    const { addPost } = useContext(Context);

    const savePost = post => {
        addPost(post);
        navigation.navigate('Index');
    };

    return (
        <PostForm
            onSubmit={post => savePost(post)}
        />
    )
};

const styles = StyleSheet.create({});

export default CreatePostScreen;
