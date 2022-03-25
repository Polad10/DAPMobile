import { Avatar, List } from 'react-native-paper';

export type Props = {
  onSelectPatient(patient: string): void;
};

const PatientItem: React.FC<Props> = ({ onSelectPatient }) => {
  return (
    <List.Item title='Polad Mammadov' description='addaddddddddddddd' onPress={() => onSelectPatient('patient')} />
  );
};

export default PatientItem;
