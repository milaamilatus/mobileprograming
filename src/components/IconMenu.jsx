import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconMenu = ({label}) => {
  return (
    <TouchableOpacity style={StyleSheet.container}>
      <View style={styles.box}>
        <Text style={StyleSheet.textIcon}>Icon</Text>
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    width: 72,
    height: 72,
    alignItems: 'center',
    borderRadius: 10,
  },
});
