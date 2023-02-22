import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors} from '../../../utils';

export default function Header({title, onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon" IconType="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.black,
  },
});
