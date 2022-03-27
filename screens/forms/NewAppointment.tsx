import * as React from 'react';
import { StyleSheet } from 'react-native';
import ModalScreen from '../ModalScreen';
import { DatePickerInput } from 'react-native-paper-dates';

export type Props = {
  visible: boolean;
  onHide(): void;
};

export type DateParams = {
  date: Date | undefined;
};

export default function NewAppointment(props: Props) {
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const confirmDate = (params: DateParams) => {
    setDate(params.date);
  };

  return (
    <ModalScreen visible={props.visible} onHide={props.onHide}>
      <DatePickerInput locale='en' label='Date' value={date} onChange={(d) => setDate(d)}></DatePickerInput>
    </ModalScreen>
  );
}

const styles = StyleSheet.create({});
