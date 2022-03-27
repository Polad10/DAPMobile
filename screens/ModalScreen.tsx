import { Portal, Modal, IconButton } from 'react-native-paper';
import * as React from 'react';
import { View } from './components/Themed';
import { StyleSheet } from 'react-native';

export type Props = {
  visible: boolean;
  onHide(): void;
  children: React.ReactNode;
};

export default function ModalScreen(props: Props) {
  return (
    <Portal>
      <Modal visible={props.visible} contentContainerStyle={styles.modal} onDismiss={props.onHide}>
        <View style={styles.close}>
          <IconButton icon='close' size={30} onPress={props.onHide} />
        </View>
        {props.children}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  close: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
