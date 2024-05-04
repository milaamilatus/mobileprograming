import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Profil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mimil.jpg')} 
        style={styles.gambarProfil}
      />
      <Text style={styles.namaPengguna}>Nama Pengguna</Text>
      <Text style={styles.email}>amilatussholehah6@gmail.com</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfil')}
        style={styles.tombolEdit}>
        <Text style={styles.teksTombol}>EditProfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Pengaturan')}
        style={styles.tombolPengaturan}>
        <Text style={styles.teksTombol}>Pengaturan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambarProfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  namaPengguna: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  tombolEdit: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  tombolPengaturan: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  teksTombol: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profil;
