import { Portal, Modal, IconButton, Button, Surface, Headline, Divider, List } from 'react-native-paper';
import * as React from 'react';
import { Ref } from 'react';
import { View } from '../components/Themed';
import { Image } from 'react-native';

export interface ClientProfileInterface {
  showModal(patient: string): void;
  hideModal(): void;
}

const ClientProfile = React.forwardRef((props, ref: Ref<ClientProfileInterface>) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = (patient: string) => setVisible(true);
  const hideModal = () => setVisible(false);

  React.useImperativeHandle(ref, () => ({ showModal, hideModal }));

  return (
    <Portal>
      <Modal visible={visible} contentContainerStyle={{ flex: 1, justifyContent: 'flex-start' }} onDismiss={hideModal}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <IconButton icon='close' size={30} onPress={hideModal} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Headline style={{ marginLeft: 20 }}>Polad Mammadov</Headline>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 10 }}>
            <Button>About</Button>
            <Button>Services</Button>
            <Button>Appointments</Button>
          </View>
          <Divider />
        </View>
        <View style={{ flex: 3 }}>
          <List.Item title='Baku, Azerbaijan' left={(props) => <List.Icon {...props} icon='home-city-outline' />} />
          <List.Item title='21.07.1994' left={(props) => <List.Icon {...props} icon='cake' />} />
          <List.Item title='+31630303030' left={(props) => <List.Icon {...props} icon='phone-outline' />} />
          <List.Item title='Extra info...' left={(props) => <List.Icon {...props} icon='information-outline' />} />
        </View>
      </Modal>
    </Portal>
  );
});

export default ClientProfile;
