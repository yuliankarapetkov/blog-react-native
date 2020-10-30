import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, addPost, deletePost } = useContext(Context);

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
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Post', { id: item.id })}>
                            <View style={styles.post}>
                                <Text style={styles.title}>{item.title}</Text>

                                <TouchableOpacity onPress={() => deletePost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    post: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;
