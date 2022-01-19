import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '../components';
import { theme } from '../constants';
import { HomeScreen } from '../screens';

const Drawer = createDrawerNavigator();

const AppNavigator = (props) => {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        initialRouteName='Main'
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ padding: 10 }}
              activeOpacity={theme.activeOpacity}
            >
              <Icon name='menu' />
            </TouchableOpacity>
          ),
        })}
      >
        <Drawer.Screen
          name='Main'
          options={{
            title: 'Racines / Préfixes / Suffixes',
          }}
          component={HomeScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
