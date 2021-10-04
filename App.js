import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/screens/StartScreen';
import NavTabs from './src/screens/NavTab';
import Analysis from './src/screens/AnalysisScreen';
import Search from './src/screens/SearchScreen';
import Map from './src/screens/MapScreen';
import Mypage from './src/screens/MypageScreen';

// Screens

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={'Home'} headerMode="none">
        {/* <MainStack.Screen name="Start" component={Start} /> */}
        <MainStack.Screen
          name="NavTabs"
          component={NavTabs}
          option={{headerShown: false}}
        />
        <MainStack.Screen
          name="Analysis"
          component={Analysis}
          option={{headerShown: false}}
        />
        <MainStack.Screen
          name="Search"
          component={Search}
          option={{headerShown: false}}
        />
        <MainStack.Screen
          name="Map"
          component={Map}
          option={{headerShown: false}}
        />
        <MainStack.Screen
          name="Mypage"
          component={Mypage}
          option={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
