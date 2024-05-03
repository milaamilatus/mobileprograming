import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Notifications = () => {
  // Dummy data for notifications
  const notifications = [
    { id: 1, message: 'New order received' },
    { id: 2, message: 'Payment processed' },
    { id: 3, message: 'Item shipped' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
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
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default Notifications;
