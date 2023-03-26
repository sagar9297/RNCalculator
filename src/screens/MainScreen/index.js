import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MainScreen = props => {
  return (
    <View style={styles.container}>
      <Text>This is main screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainScreen;
