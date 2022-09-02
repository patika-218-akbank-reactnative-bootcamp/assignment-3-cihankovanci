import React from 'react';
import {
  View,
  Button,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MessageList from '../../components/MessageList';

const MessageListScreen = ({props, navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text>Text Input</Text>
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
          <MessageList
            contact_name="Cihan Kovancı"
            message="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt"
            image="https://picsum.photos/200/300"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default MessageListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f43',
  },
});
