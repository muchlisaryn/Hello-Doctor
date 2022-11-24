import {Text, StyleSheet} from 'react-native';
import React from 'react';

// import {TouchableOpacity} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import Icon from './Icon';
import {colors} from '../../../utils';

export default function Button({title, type, onPress, IconType}) {
  if (type === 'icon') {
    return <Icon IconType={IconType} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.blue,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? colors.black : colors.white,
  }),
});
