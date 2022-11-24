import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Link({text, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
