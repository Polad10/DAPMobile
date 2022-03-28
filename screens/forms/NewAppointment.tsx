import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { DatePickerInput } from 'react-native-paper-dates';

export type DateParams = {
  date: Date | undefined;
};

export default function NewAppointment() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const confirmDate = (params: DateParams) => {
    setDate(params.date);
  };

  return (
    <View style={styles.container}>
      <DatePickerInput locale='en' label='Date' value={date} onChange={(d) => setDate(d)}></DatePickerInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
