import { Button, Headline, Divider, List } from 'react-native-paper';
import * as React from 'react';
import { View } from './components/Themed';
import { StyleSheet } from 'react-native';
import ModalScreen from './ModalScreen';

export type Props = {
  visible: boolean;
  onHide(): void;
};

export default function ClientProfile(props: Props) {
  return (
    <ModalScreen visible={props.visible} onHide={props.onHide}>
      <View style={styles.header}>
        <View style={styles.clientMainInfo}>
          <Headline>Polad Mammadov</Headline>
        </View>
        <View style={styles.actions}>
          <Button>About</Button>
          <Button>Services</Button>
          <Button>Appointments</Button>
        </View>
        <Divider />
      </View>
      <View style={styles.content}>
        <List.Item title='Baku, Azerbaijan' left={(props) => <List.Icon {...props} icon='home-city-outline' />} />
        <List.Item title='21.07.1994' left={(props) => <List.Icon {...props} icon='cake' />} />
        <List.Item title='+31630303030' left={(props) => <List.Icon {...props} icon='phone-outline' />} />
        <List.Item title='Extra info...' left={(props) => <List.Icon {...props} icon='information-outline' />} />
      </View>
    </ModalScreen>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  clientMainInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    flex: 3,
  },
});
