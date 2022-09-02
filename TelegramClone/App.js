import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MessagesScreen from './screen/stack/MessagesScreen';

import ContactListScreen from './screen/tab/ContactListScreen';
import MessageListScreen from './screen/tab/MessageListScreen';
import ProfileScreen from './screen/tab/ProfileScreen';
import ThemeScreen from './screen/tab/ThemeScreen';
import EditProfileScreen from './screen/tab/EditProfileScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('MessagesScreen')}
      />
    </View>
  );
}

function TabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContactListScreen" component={ContactListScreen} />
      <Tab.Screen name="MessageListScreen" component={MessageListScreen} />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
