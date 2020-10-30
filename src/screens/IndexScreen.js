import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const posts = useContext(BlogContext);

    return (
        <View>
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
