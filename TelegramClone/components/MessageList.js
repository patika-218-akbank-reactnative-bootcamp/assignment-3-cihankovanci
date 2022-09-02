import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const MessageList = (props) => {

    const navigation = useNavigation();

    function selectMessageHandler() {
        navigation.navigate('MessagesScreen', {
            chat_name: props.contact_name,
            profile_image: props.image,
            message: props.message,
        });
    }


    return (

        <TouchableOpacity onPress={selectMessageHandler}>

            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.profilePhoto} source={{ uri: props.image }} />
                </View>
                <View style={styles.text_container}>
                    <View style={styles.inner_container}>
                        <Text style={styles.Name_TextStyle}>{props.contact_name}</Text>
                        <Text>11:12</Text>
                    </View>
                    <Text style={styles.lastseen}>{props.message}</Text>
                    <View style={styles.Line} />
                </View>
            </View>
        </TouchableOpacity>

    );
};

export default MessageList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,


    },
    profilePhoto: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        padding: 10,
        marginLeft: 2,

    },
    image_container: {
        flex: 1,
        marginTop: 5,
    },
    text_container: {
        flex: 4,
        marginLeft: -7,

    },
    Name_TextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
    },
    Line: {
        borderBottomColor: 'gray',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 15,
    },
    lastseen: {
        color: 'gray',

    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});