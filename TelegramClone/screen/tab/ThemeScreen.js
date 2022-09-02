import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ThemeScreen = props => {
  return (
    <SafeAreaView>
      <Text>ThemeScreen</Text>
    </SafeAreaView>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 40,
  },
});
