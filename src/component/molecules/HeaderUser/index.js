import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

export default function HeaderUser({image, name, age}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={{marginLeft: 15}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age} Years</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 99,
  },
  name: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'Nunito-SemiBold',
  },
  age: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: colors.grey1,
  },
});
