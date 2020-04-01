import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CText } from '../components/text';
import { COLORS } from '../common/colors';

const resetPasswordScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Ionicons name="ios-arrow-round-back" size={32} />
        <CText
          title={'Reset Password'}
          color={COLORS.title}
          fontSize={24}
          lineHeight={36}
          marginTop={37}
        />
        <TextInput
          label='New Password'
          placeholder={'New Password'}
          style={styles.input}
        />
        <TextInput
          label='Confirm New Password'
          placeholder={'Confirm New Password'}
          style={[styles.input, { marginTop: 20}]}
        />
        <View style={styles.box}>
          <View />
          <View style={styles.iconView}>
            <Ionicons name="ios-checkmark" size={40} color={COLORS.white}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default resetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 31,
  },
  input: {
    borderBottomColor: COLORS.bottom,
    borderBottomWidth: 1,
    marginTop: 110,
    color: COLORS.title,
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 12
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.dark,
  }
})