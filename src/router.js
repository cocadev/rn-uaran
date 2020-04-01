import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import searchResultDetailScreen from '../src/screens/searchResultDetail';
import loginScreen from '../src/screens/login';
import forgotPasswordScreen from './screens/forgotPassword';
import resetPasswordScreen from './screens/resetPassword';
import registerScreen from './screens/register';
import splashScreen from './screens/splash';
import { images } from './common/images';
import { COLORS } from './common/colors';

const AuthNavigator = createStackNavigator(
  {
    Splash: { screen: splashScreen },
    Login: { screen: loginScreen },
    Register: { screen: registerScreen },
    ForgotPassword: { screen: forgotPasswordScreen },
    ResetPassword: { screen: resetPasswordScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Register',
  },
);

const HomeNavigator = createStackNavigator(
  {
    SearchResultDetail: { screen: searchResultDetailScreen },
  },
  {
    headerMode: 'none',
    initialRouteName: 'SearchResultDetail',
  },
);

const HomeStack = createStackNavigator(
  {
    Home: searchResultDetailScreen
  },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <>
            {focused && <View style={styles.tab}>
              <Image
                source={images.search}
                style={styles.img1}
              />
            </View>}
            {!focused && <Image
              source={images.search}
              style={styles.img2}
            />}
          </>
        );
      },
    }),
  },
);


const BookingsStack = createStackNavigator(
  { Home: searchResultDetailScreen },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <>
            {focused && <View style={styles.tab}>
              <Image
                source={images.bookings}
                style={styles.img3}
              />
            </View>}
            {!focused && <Image
              source={images.bookings}
              style={styles.img4}
            />}
          </>
        );
      },
    }),
  },
);

const InboxStack = createStackNavigator(
  { Home: searchResultDetailScreen },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <>
            {focused && <View style={styles.tab}>
              <Image
                source={images.inbox}
                style={styles.img3}
              />
            </View>}
            {!focused && <Image
              source={images.inbox}
              style={styles.img4}
            />}
          </>
        );
      },
    }),
  },
);

const AccountStack = createStackNavigator(
  { Home: searchResultDetailScreen },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <>
            {focused && <View style={styles.tab}>
              <Image
                source={images.account}
                style={styles.img1}
              />
            </View>}
            {!focused && <Image
              source={images.account}
              style={styles.img2}
            />}
          </>
        );
      },
    }),
  },
);

const AppStack = createBottomTabNavigator(
  {
    Search: {
      screen: HomeStack,
    },
    Bookings: {
      screen: BookingsStack,
    },
    Inbox: {
      screen: InboxStack,
    },
    Account: {
      screen: AccountStack,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.blue,
      inactiveTintColor: COLORS.opacity,
      style: {
        padding: 8,
        height: 64,
        fontFamily: 'Rubik-Bold'
      },
    },
  },
);

export const Router = createAppContainer(
  createSwitchNavigator({
    // Auth: AuthNavigator,
    // Home: HomeNavigator,
    App: AppStack,
  }),
);

const styles = StyleSheet.create({
  tab: {
    backgroundColor: COLORS.blue,
    width: 29,
    height: 29,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img1: {
    tintColor: COLORS.white, 
    width: 12, 
    height: 12
  },
  img2: {
    tintColor: COLORS.opacity, 
    width: 20, 
    height: 20
  },
  img3: {
    tintColor: COLORS.white, 
    width: 14, 
    height: 11
  },
  img4: {
    tintColor: COLORS.opacity, 
    width: 25, 
    height: 20
  }
})