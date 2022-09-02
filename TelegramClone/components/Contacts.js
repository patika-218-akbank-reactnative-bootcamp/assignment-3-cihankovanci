import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Contacts = (props) => {

    const navigation = useNavigation();

    function selectMessageHandler() {
        navigation.navigate('MessagesScreen', {
            chat_name: props.contact_name,
            profile_image: props.image,
            last_seen: props.lastseen,
        });
    }

    return (
        <TouchableOpacity onPress={selectMessageHandler}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.profilePhoto} source={{ uri: props.image }} />
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.Name_TextStyle}>{props.contact_name}</Text>
                    <Text style={styles.lastseen}>Last Seen {props.lastseen}</Text>
                    <View style={styles.Line} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Contacts;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,


    },
    profilePhoto: {
        width: 40,
        height: 40,
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
        marginLeft: -30,

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
    },
    lastseen: {
        color: 'gray'
    }
});