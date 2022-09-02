import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Contacts from '../../components/Contacts';

const ContactListScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Contacts
          contact_name="Cihan Kovancı"
          lastseen="just now"
          image="https://picsum.photos/200/300"
        />
        <Contacts
          contact_name="Uğur Özuğur"
          lastseen="just now"
          image="https://picsum.photos/300/300"
        />
        <Contacts
          contact_name="Burak Tiryaki"
          lastseen="just now"
          image="https://picsum.photos/300/200"
        />
        <Contacts
          contact_name="Sercan Tetik Tor"
          lastseen="just now"
          image="https://picsum.photos/200/200"
        />
        <Contacts
          contact_name="Berker Bilgen"
          lastseen="just now"
          image="https://picsum.photos/204/304"
        />
        <Contacts
          contact_name="Gökhan Samurcu"
          lastseen="just now"
          image="https://picsum.photos/200/300"
        />
        <Contacts
          contact_name="Yunus Emre"
          lastseen="just now"
          image="https://picsum.photos/300/300"
        />
        <Contacts
          contact_name="Donald Trump"
          lastseen="just now"
          image="https://picsum.photos/300/200"
        />
        <Contacts
          contact_name="Zuck"
          lastseen="just now"
          image="https://picsum.photos/200/200"
        />
        <Contacts
          contact_name="Bill"
          lastseen="just now"
          image="https://picsum.photos/204/304"
        />
        <Contacts
          contact_name="Arif Kepenek (Ev Sahibi)"
          lastseen="just now"
          image="https://picsum.photos/204/304"
        />
        <Contacts
          contact_name="Eleana"
          lastseen="just now"
          image="https://picsum.photos/204/304"
        />
        <Contacts
          contact_name="Mutlu"
          lastseen="just now"
          image="https://picsum.photos/204/304"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292f43',
  },
});
