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

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        padding: 5,
        marginBottom: 5,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        margin: 5,
        marginBottom: 10,
    }
});

export default CreatePostScreen;
