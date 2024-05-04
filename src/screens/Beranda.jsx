import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import IconMenu from '../components/IconMenu';

const Penjualan = [
  { id: 1, nama: 'Sepatu Nike', harga: 'Rp 500.000'},
  { id: 2, nama: 'Tas Branded', harga: 'Rp 1.200.000'},
  { id: 3, nama: 'Jam Tangan', harga: 'Rp 800.000' },
  { id: 4, nama: 'Kemeja Pria', harga: 'Rp 350.000' },
  { id: 5, nama: 'Celana Wanita', harga: 'Rp 400.000'},
  { id: 6, nama: 'Baju anak cewek', harga: 'Rp 100.000'},
  { id: 7, nama: 'Baju anak cowok', harga: 'Rp 90.000'},
  { id: 8, nama: 'HP Realme C53', harga: 'Rp 1.999.000.000'},
  { id: 9, nama: 'Case Hp', harga: 'Rp 20.000'},
  { id: 10, nama: 'Sarung Tenun', harga: 'Rp 70.000'},
];

const Beranda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produk Baru</Text>
      
      <FlatList
        data={Penjualan}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.nama}</Text>
            <Text style={styles.itemPrice}>{item.harga}</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatListContainer: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '47%',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btn: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
