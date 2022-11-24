import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.Input} />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey2,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: colors.grey1,
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
