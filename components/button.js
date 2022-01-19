import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Loader from './loader';
import { theme } from '../constants';

const Button = ({
  children = [],
  color = theme.colors.primary,
  disabled = false,
  loading = false,
  onPress = () => {},
  outline = false,
  rounded = false,
  style = {},
  text = '',
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={theme.activeOpacity}
      style={{
        margin: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        minWidth: 50,
        backgroundColor: outline ? theme.colors.transparent : color,
        borderWidth: outline ? 1 : 0,
        borderColor: color,
        borderRadius: rounded ? 100 : 5,
        ...style,
      }}
      onPress={onPress}
    >
      {loading ? (
        <Loader color={outline ? color : theme.colors.white} />
      ) : (
        children || (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {text !== null && (
              <Text
                style={{
                  ...formStyles.text,
                  marginHorizontal: 3,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: outline ? color : theme.colors.white,
                }}
              >
                {text}
              </Text>
            )}
          </View>
        )
      )}
    </TouchableOpacity>
  );
};

export default Button;
