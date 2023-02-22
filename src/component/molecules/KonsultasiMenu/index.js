import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {
  IconDokterAnak,
  IconDokterUmum,
  IconObat,
  IconPsikiater,
} from '../../../assets';
import {colors} from '../../../utils';

export default function KonsultasiMenu() {
  return (
    <ScrollView horizontal={true}>
      <TouchableOpacity>
        <View style={styles.container}>
          <IconDokterUmum />
          <View>
            <Text style={styles.text}>Saya butuh</Text>
            <Text style={styles.title}>Dokter umum</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <IconDokterAnak />
          <View>
            <Text style={styles.text}>Saya butuh</Text>
            <Text style={styles.title}>Dokter Anak</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <IconPsikiater />
          <View>
            <Text style={styles.text}>Saya butuh</Text>
            <Text style={styles.title}>Psikiater</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <IconObat />
          <View>
            <Text style={styles.text}>Saya butuh</Text>
            <Text style={styles.title}>Obat</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.blue1,
    height: 130,
    width: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginRight: 10,
  },

  title: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: colors.black,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Nunito-Light',
    color: colors.black,
  },
});
