import { Avatar, List } from 'react-native-paper';

export type Props = {
  onSelectPatient(patient: string): void;
};

const PatientItem: React.FC<Props> = ({ onSelectPatient }) => {
  return (
    <List.Item
      title='Polad Mammadov'
      description='addaddddddddddddd'
      onPress={() => onSelectPatient('patient')}
      right={() => (
        <Avatar.Image size={50} source={{ uri: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg' }} />
      )}
    />
  );
};

export default PatientItem;
