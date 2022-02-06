import { Avatar, List } from "react-native-paper";

export default function PatientItem() {
    return (
        <List.Item 
        title='Polad Mammadov'
        description='addaddddddddddddd'
        right={() => <Avatar.Image size={50} source={{uri: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'}}/>}
      />
    )
}