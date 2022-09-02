import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Messages from '../../components/Messages';


const MessagesScreen = ({ route, props }) => {

    const {
        chat_name,
        profile_image,
        last_seen,
    } = route.params;

    return (
        <SafeAreaView>
            <Text>MessagesScreenaa{chat_name}</Text>
            <Messages />
        </SafeAreaView>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
});
