import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Paket anda telah diantar menuju alamat tujuan' },
    { id: 2, message: 'Paket anda sedang di proses' },
    { id: 3, message: 'Paket yang anda incar hampir habis' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem message={item.message} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const NotificationItem = ({ message }) => (
  <View style={styles.notification}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notification: {
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default Notifications;
