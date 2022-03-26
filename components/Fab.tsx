import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export type Props = {
  onPress(): void;
};

export default function Fab(props: Props) {
  return <FAB style={styles.fab} icon='plus' onPress={props.onPress} />;
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#673ab7',
  },
});
