import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILlogo} from '../../assets';

export default function Splash() {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});