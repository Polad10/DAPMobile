import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Searchbar, List, Avatar, Divider } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import PatientItem from '../components/items/PatientItem';
import Fab from '../components/Fab';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar placeholder='Client name' onChangeText={onChangeSearch} value={searchQuery} />
      <PatientItem />
      <Divider />
      <PatientItem />
      <Divider />
      <PatientItem />
      <Divider />
      <PatientItem />
      <Divider />
      <PatientItem />
      <Divider />
      <Fab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
