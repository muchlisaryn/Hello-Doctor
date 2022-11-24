import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {Background, Logo} from '../../assets';
import {Button} from '../../component';
import Gap from '../../component/atoms/Gap';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={Background} style={styles.pages}>
      <View>
        <Logo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          title="Sign in"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pages: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    marginTop: 91,
    fontSize: 23,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
