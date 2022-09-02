import React from 'react';
import { View, Button, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const MessageListScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>MessageListScreen</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('MessagesScreen')}
            />
        </SafeAreaView>
    );
};

export default MessageListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
});
