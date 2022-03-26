import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import { Searchbar, Divider } from 'react-native-paper';
import { View } from '../components/Themed';
import PatientItem from '../components/items/PatientItem';
import Fab from '../components/Fab';
import ClientProfile from './ClientProfile';
import { ClientProfileInterface } from './ClientProfile';
import { useRef } from 'react';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const handleSelectPatient = (patient: string) => {
    Keyboard.dismiss();
    clientProfileRef?.current?.showModal(patient);
  };

  const clientProfileRef = useRef<ClientProfileInterface>(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Searchbar placeholder='Client name' onChangeText={handleChangeSearch} value={searchQuery} />
        <PatientItem onSelectPatient={handleSelectPatient} />
        <Divider />
        <PatientItem onSelectPatient={handleSelectPatient} />
        <Divider />
        <PatientItem onSelectPatient={handleSelectPatient} />
        <Divider />
        <PatientItem onSelectPatient={handleSelectPatient} />
        <Divider />
        <PatientItem onSelectPatient={handleSelectPatient} />
        <Divider />
        <Fab onPress={() => console.log('pressed')} />
        <ClientProfile ref={clientProfileRef} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
