import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import IconMenu from '../components/IconMenu';

const Keranjang = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconMenu name="cart-outline" size={30} color="black" />
      <Text style={styles.text}>baju anak cewek</Text>
    </TouchableOpacity>
  );
};

export default Keranjang;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black', 
  },
});
