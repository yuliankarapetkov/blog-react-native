import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addPost } = useContext(Context);

    return (
        <View>
            <Button
                title="Add post"
                onPress={addPost}
            />

            <FlatList
                data={state}
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
