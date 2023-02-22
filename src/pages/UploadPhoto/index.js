import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Link} from '../../component';
import {BtnAddPhoto, DefaultPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

export default function UploadPhoto() {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={DefaultPhoto} style={styles.avatar} />
            <BtnAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profesi}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <View style={{height: 30}}></View>
          <Link text="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.grey3,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.black,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profesi: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    color: colors.grey3,
  },
});
