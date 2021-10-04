import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Mypage from './MypageScreen';
import Analysis from './AnalysisScreen';
import Search from './SearchScreen';
import Map from './MapScreen';

const Tab = createBottomTabNavigator();

const NavTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: '10%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Analysis"
        component={Analysis}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Text
                style={{
                  color: focused ? 'blue' : 'gray',
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                이미지 분석
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Text
                style={{
                  color: focused ? 'blue' : 'gray',
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                탐색
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Map}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Text
                style={{
                  color: focused ? 'blue' : 'gray',
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                지도
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={Mypage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Text
                style={{
                  color: focused ? 'blue' : 'gray',
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                마이페이지
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: 50,
    height: 50,
  },
});

export default NavTabs;
