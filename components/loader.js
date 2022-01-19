import React from 'react';
import { ActivityIndicator } from 'react-native';
import { theme } from '../constants';

const Loader = ({ color = theme.colors.primary }) => {
  return <ActivityIndicator color={color} />;
};

export default Loader;
