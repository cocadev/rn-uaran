import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CText } from '../components/text';
import { COLORS } from '../common/colors';
import { images } from '../common/images';

const loginScreen = props => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={images.logo} style={{ width: 80, height: 80 }} />
        <CText
          title={'Login to\nyour Narau account'}
          color={COLORS.title}
          fontSize={24}
          lineHeight={36}
          marginTop={100}
        />
        <TextInput
          label='Email'
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          label='Password'
          placeholder={'Password'}
          style={styles.input}
        />
        <View style={styles.box}>
          <CText title={'Forgot Password? Reset'} fontSize={14} />
        </View>
        <View style={styles.btn}>
          <CText
            title={'Login'}
            color={COLORS.white}
            fontSize={14}
            fontWeight={'500'}
          />
        </View>
        <TouchableOpacity
          style={styles.bottom}
          onPress={() => props.navigation.replace('Register')}
        >
          <CText title={'First time here? Sign up'} color={COLORS.sky} fontSize={14} marginTop={52} />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
  },
  input: {
    borderBottomColor: COLORS.bottom,
    borderBottomWidth: 1,
    marginTop: 29,
    color: '#24272c',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 12
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  btn: {
    backgroundColor: COLORS.dark,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})