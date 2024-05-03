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

const Produk = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifikasi')}
        style={styles.btn}>
        <Text style={styles.txt}>Tab Ke Notifikasi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  btn: {
    margin: 9,
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  txt: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'black',
  },
});
