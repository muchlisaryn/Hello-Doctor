import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderUser, KonsultasiMenu} from '../../component';
import {colors} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import TopDoctor from '../../component/molecules/TopRatedDoctor';

export default function Doctor() {
  return (
    <View style={styles.page}>
      <ScrollView>
        <HeaderUser
          image="https://img.okezone.com/content/2022/05/24/65/2599329/studi-jenjang-pendidikan-dokter-sampai-jadi-profesor-makan-waktu-berapa-lama-1NDnWT2wUd.jpg"
          name="Seyna"
          age="21"
        />
        <View style={styles.menu}>
          <Text style={styles.textHeader}>
            Mau Konsultasi dengan siapa hari ini?
          </Text>
          <KonsultasiMenu />
        </View>
        <TopDoctor />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  textHeader: {
    fontSize: 20,
    maxWidth: 215,
    fontFamily: 'Nunito-Bold',
    color: colors.black,
    marginBottom: 15,
  },
  menu: {
    marginLeft: 20,
    marginTop: 30,
  },
});
