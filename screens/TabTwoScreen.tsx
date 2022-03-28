import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import { Searchbar, Divider } from 'react-native-paper';
import { View } from './components/Themed';
import PatientItem from './components/items/PatientItem';
import Fab from './components/Fab';
import ClientProfile from './ClientProfile';
import { useNavigation } from '@react-navigation/native';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [clientProfileVisible, setClientProfileVisible] = React.useState(false);

  const navigation = useNavigation();

  const handleChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
  const handleSelectPatient = (patient: string) => {
    Keyboard.dismiss();
    //setClientProfileVisible(true);
    navigation.navigate('ClientProfile');
  };

  const handleHideClientProfile = () => setClientProfileVisible(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Searchbar
          placeholder='Client name'
          onChangeText={handleChangeSearch}
          value={searchQuery}
          style={styles.searchbar}
        />
        <Divider />
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchbar: {
    backgroundColor: 'transparent',
  },
});
