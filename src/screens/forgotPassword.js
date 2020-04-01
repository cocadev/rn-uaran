import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CText } from '../components/text';
import { COLORS } from '../common/colors';

const forgotPasswordScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Ionicons name="ios-arrow-round-back" size={32} />
        <CText
          title={'Forgot Password'}
          color={COLORS.title}
          fontSize={24}
          lineHeight={36}
          marginTop={37}
        />
        <TextInput
          label='Enter Email'
          placeholder={'Email'}
          style={styles.input}
        />
        <View style={styles.box}>
          <CText
            title={'You will receive an password reset link on above email address.'}
            color={COLORS.title}
            opacity={0.5}
            lineHeight={16}
          />
           <View style={styles.iconView}>
            <Ionicons name="ios-arrow-round-forward" size={30} color={COLORS.white}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default forgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 31,
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
    marginTop: 26
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