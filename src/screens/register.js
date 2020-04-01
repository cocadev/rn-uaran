import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CText } from '../components/text';
import { COLORS } from '../common/colors';
import { images } from '../common/images';

const registerScreen = () => {
  const [user, setUser] = useState(true);
  const [terms, setTerms] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={images.logo} style={{ width: 80, height: 80 }} />
        <CText
          title={'Signup now to get access to all of Narau\'s features'}
          color={COLORS.title}
          fontSize={24}
          lineHeight={36}
          marginTop={37}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[styles.btn, {
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              backgroundColor: user ? COLORS.dark : COLORS.lightgrey
            }]}
            onPress={() => setUser(true)}
          >
            <CText
              title={'Customer'}
              color={user ? COLORS.white : COLORS.dark}
              fontSize={14}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, {
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              backgroundColor: user ? COLORS.lightgrey : COLORS.dark
            }]}
            onPress={() => setUser(false)}
          >
            <CText
              color={user ? COLORS.dark : COLORS.white}
              title={'Host'}
              fontSize={14}
              color={user ? COLORS.title : COLORS.white}
            />
          </TouchableOpacity>
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

        <TouchableOpacity
          onPress={()=>setTerms(terms ? false : true)}
          style={styles.box}
        >
          <MaterialIcons 
            name={terms ? "check-box" : "check-box-outline-blank"} 
            size={25} 
            style={{ opacity: 0.5}}
          />
          <CText
            title={'I accept Narau\'s terms of service and privacy policy'}
            color={COLORS.title}
            opacity={0.5}
            lineHeight={16}
            marginLeft={5}
          />
        </TouchableOpacity>

        <View style={styles.rBtn}>
          <CText
            title={'Register'}
            color={COLORS.white}
            fontSize={14}
            fontWeight={'500'}
          />
        </View>
        <View style={styles.bottom}>
          <CText
            title={'Already have an account? Login'}
            color={COLORS.sky}
            fontSize={14}
            marginTop={29}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default registerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 31,
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
    flex: 1,
    height: 40,
  },
  rBtn: {
    backgroundColor: COLORS.dark,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },
  icon: {
    position: 'absolute',
    bottom: 14,
    right: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})