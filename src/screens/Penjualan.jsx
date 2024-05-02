import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Diskon'},
  {id: 3, label: 'Go Food'},
  {id: 4, label: 'Grab'},
  {id: 5, label: 'Gojek'},
];

const Penjualan = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Akun')}
        style={styles.btn}>
        <Text style={styles.txt}>Tab Ke Akun</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Penjualan;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
