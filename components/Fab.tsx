import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Fab() {
  return <FAB style={styles.fab} icon='plus' onPress={() => console.log('Pressed')} />;
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
