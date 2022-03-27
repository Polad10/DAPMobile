import { List } from 'react-native-paper';

export type Props = {
  onSelectPatient(patient: string): void;
};

export default function PatientItem(props: Props) {
  return (
    <List.Item
      title='Polad Mammadov'
      description='addaddddddddddddd'
      onPress={() => props.onSelectPatient('patient')}
    />
  );
}
