import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { formStyles, theme } from '../constants';
import Icon from './icon';

const CheckBox = ({
  checked = false,
  onPress = () => console.log('Button pressed !'),
  iconRight = false,
  text = '',
  style = {},
}) => {
  const { colors } = theme;

  return (
    <TouchableOpacity
      activeOpacity={theme.activeOpacity}
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: iconRight ? 'row-reverse' : 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        ...style,
      }}
    >
      <View
        style={{
          borderColor: colors.border,
          borderRadius: 5,
          width: 25,
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
          ...(checked
            ? { backgroundColor: colors.primary, borderWidth: 0 }
            : { backgroundColor: colors.transparent, borderWidth: 1 }),
          ...(iconRight ? { marginLeft: 10 } : { marginRight: 10 }),
        }}
      >
        {checked && <Icon name='check' color='white' />}
      </View>
      {!!text && <Text style={formStyles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default CheckBox;
