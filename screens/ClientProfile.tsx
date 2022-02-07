import { Avatar, Card, Portal, Modal } from 'react-native-paper';
import * as React from 'react';

export default function ClientProfile() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal visible={visible}>
        <Card>
          <Card.Title
            title='Polad Mammadov'
            left={() => (
              <Avatar.Image
                size={25}
                source={{
                  uri: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
                }}
              />
            )}
          />
        </Card>
      </Modal>
    </Portal>
  );
}
