import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../constants';

const Icon = ({
  color = theme.colors.white,
  name = '',
  size = 25,
  style = {},
}) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};

export default Icon;
