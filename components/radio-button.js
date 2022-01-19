import React from 'react';
import { View } from 'react-native';
import CheckBox from './checkbox';

const RadioButton = ({
  value,
  setValue = (v) => {},
  options = [],
  style = {},
}) => {
  return (
    <View style={style}>
      {options.map((option, index) => (
        <CheckBox
          key={`radio_button_${index}`}
          checked={option.value === value}
          onPress={() => setValue(option.value)}
          text={option.text}
          style={{ justifyContent: 'center' }}
        />
      ))}
    </View>
  );
};

export default RadioButton;
