import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const PostForm = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={value => setTitle(value)} 
            />

            <Text style={styles.label}>Content:</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={value => setContent(value)} 
            />

            <Button
                title="Save"
                onPress={() => onSubmit({ title, content })}
            />
        </View>
    )
};

PostForm.defaultProps = {
    post: {
        title: '',
        content: ''
    },
}

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

export default PostForm;
