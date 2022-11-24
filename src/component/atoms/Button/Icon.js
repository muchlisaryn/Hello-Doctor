import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconArrowBack} from '../../../assets';

export default function Icon({onPress, iconType}) {
  const IconOnly = () => {
    if (iconType === 'back-dark') {
      return <IconArrowBack />;
    }
    if (iconType === 'back-light') {
      return <IconArrowBack />;
    }
    return <IconArrowBack />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <IconOnly />
    </TouchableOpacity>
  );
}
