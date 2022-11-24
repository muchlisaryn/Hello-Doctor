import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Logo} from '../../assets/ilustration';
import {Button, Input, Link, Gap} from '../../component';

export default function Login() {
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Login" />
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    color: 'black',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 40,
    maxWidth: 153,
  },
});
