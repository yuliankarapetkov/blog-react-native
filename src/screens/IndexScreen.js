import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { posts, addPost } = useContext(BlogContext);

    return (
        <View>
            <Button
                title="Add post"
                onPress={addPost}
            />

            <FlatList
                data={posts}
                keyExtractor={({ title }) => title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default IndexScreen;
