import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { CText } from '../components/text';
import { COLORS } from '../common/colors';

const registerScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Ionicons name="ios-arrow-round-back" size={32} />
        <CText
          title={'Signup now to get access to all of Narau\'s features'}
          color={COLORS.title}
          fontSize={24}
          lineHeight={36}
          marginTop={37}
        />
        <View style={{ flexDirection: 'row'}}>
          <View style={styles.btn}>
            <CText title={'Customer'} color={COLORS.white} fontSize={14}/>
          </View>
          <View style={[styles.btn, { backgroundColor: COLORS.lightgrey}]}>
            <CText title={'Host'} fontSize={14} color={COLORS.title}/>
          </View>
        </View>
        <TextInput
          placeholder={'Full Name'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Phone number'}
          style={styles.input}
        />
        <View>
          <TextInput
            placeholder={'Date of birth'}
            style={styles.input}
            editable={false}
          />
          <TouchableOpacity style={styles.icon}>
            <SimpleLineIcons name="calendar" size={21} />
          </TouchableOpacity>
        </View>
       
        <TextInput
          placeholder={'Occupation'}
          style={styles.input}
        />
        <View style={styles.box}>
          <CText
            title={'By Click Next, I accept the privacy policy and terms of service'}
            color={COLORS.title}
            opacity={0.5}
            lineHeight={16}
          />
           <View style={styles.iconView}>
            <Ionicons name="ios-arrow-round-forward" size={30} color={COLORS.white}/>
          </View>
        </View>
        <CText title={'Already have an account? Login'} color={COLORS.sky} fontSize={14} marginTop={29}/>
      </SafeAreaView>
    </>
  );
};

export default registerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 31,
  },
  input: {
    borderBottomColor: COLORS.bottom,
    borderBottomWidth: 1,
    marginTop: 23,
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
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: 115,
    height: 40,
    backgroundColor: COLORS.dark,
    marginRight: 16
  },
  icon: {
    position: 'absolute',
    bottom: 14,
    right: 20,
  }
})