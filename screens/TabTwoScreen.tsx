import { StyleSheet } from 'react-native';
import * as React from 'react';
import { Searchbar, List, Avatar, Divider } from 'react-native-paper';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <View>
      <Searchbar 
        placeholder='Patient name'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
        <List.Item 
          title='Polad Mammadov'
          description='addaddddddddddddd'
          right={() => <Avatar.Image size={50} source={{uri: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'}}/>}
        />
        <Divider />
        <List.Item 
          title='Faxri Imanov'
          description='addaddddddddddddd'
          right={() => <Avatar.Image size={50} source={{uri: 'http://thispix.com/wp-content/uploads/2015/06/portrait-profile-008.jpg'}} />}
        />
        <Divider />
        <List.Item 
          title='Fuad Imanzade'
          description='addaddddddddddddd'
          right={() => <Avatar.Image size={50} source={{uri: 'http://thispix.com/wp-content/uploads/2015/06/Edit-3700-1.jpg'}} />}
        />
        <Divider />
        <List.Item 
          title='Farid Mammadov'
          description='addaddddddddddddd'
          right={() => <Avatar.Image size={50} source={{uri: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg'}} />}
        />
        <Divider />
        <List.Item 
          title='Emin Mammadov'
          description='addaddddddddddddd'
          right={() => <Avatar.Image size={50} source={{uri: 'https://www.perfocal.com/blog/content/images/2020/07/Perfocal_Male_Dating_Profile_Portrait_Asian.jpg'}} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
