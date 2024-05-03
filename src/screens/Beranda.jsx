import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import IconMenu from '../components/IconMenu'; // Sesuaikan dengan lokasi komponen IconMenu

const Penjualan = [
  { id: 1, nama: 'Sepatu Nike', harga: 'Rp 500.000', image: require },
  { id: 2, nama: 'Tas Branded', harga: 'Rp 1.200.000', image: require },
  { id: 3, nama: 'Jam Tangan', harga: 'Rp 800.000', image: require },
  { id: 4, nama: 'Kemeja Pria', harga: 'Rp 350.000', image: require },
  { id: 5, nama: 'Celana Wanita', harga: 'Rp 400.000', image: require },
];

const Data = [
  { id: 1, label: 'Top Up', image: require('../assets/dana.jpg') },
  { id: 2, label: 'Diskon', image: require('../assets/diskon.png') },
  { id: 3, label: 'Go Food', image: require('../assets/gofood.png') },
  { id: 4, label: 'Grab', image: require('../assets/grab.png') },
  { id: 5, label: 'Gojek', image: require('../assets/gojek.png') },
];

const Beranda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beranda</Text>
      
      {/* Penjualan */}
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

      {/* Kategori */}
      <FlatList
        data={Data}
        renderItem={({ item }) => <IconMenu label={item.label} />}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Produk')}
        style={styles.btn}>
        <Text style={styles.txt}>Lihat Produk</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatListContainer: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: '45%',
    margin: 5,
    backgroundColor: '#fff',
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
