import React, { useEffect } from 'react';
import { SafeAreaView, Image, StyleSheet } from 'react-native';
import { images } from '../common/images';

const splashScreen = props => {
  useEffect(() => {
    setTimeout(() => props.navigation.replace('Login'), 1000);
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={images.logo} style={styles.img} />
      </SafeAreaView>
    </>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 120,
    height: 120
  }
})