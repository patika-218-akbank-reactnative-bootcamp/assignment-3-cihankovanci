import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Messages = (props) => {



    return (
        <TouchableOpacity>
            <View>
                <Text>UserName</Text>
                <Text>Message</Text>
                <Text>Image</Text>

            </View>

        </TouchableOpacity>
    );
};

export default Messages;

const styles = StyleSheet.create({

});