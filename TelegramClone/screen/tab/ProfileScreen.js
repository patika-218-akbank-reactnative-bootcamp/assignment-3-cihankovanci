import React from 'react';
import { View, Button, SafeAreaView, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>ProfileScreen</Text>
            <Button
                title="Go to ThemeScreen"
                onPress={() => navigation.navigate('ThemeScreen')}
            />
            <Button
                title="Go to EditProfileScreen"
                onPress={() => navigation.navigate('EditProfileScreen')}
            />
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 40,
    },
});
