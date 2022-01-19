import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { theme } from '../constants';
import FormInput from './form-input';

const CustomTextInput = ({
  autoCapitalize = 'sentences',
  errorMessage = (v) => '',
  inputStyle = {},
  keyboardType = 'default',
  label = '',
  onBlur = () => {},
  onChange = (text) => {},
  onFocus = () => {},
  onSubmit = () => {},
  placeholder,
  getRef = (r) => {},
  returnKeyType = 'next',
  value = null,
}) => {
  const [hasFocus, setFocus] = useState(false);
  const [hasUserInput, setUserInput] = useState(false);

  const handleBlur = () => {
    setFocus(false);
    setUserInput(true);
    onBlur?.();
  };

  const handleFocus = () => {
    setFocus(true);
    onFocus?.();
  };

  const { colors } = theme;

  const style = {
    backgroundColor: colors.dark_gray,
    borderColor: hasFocus ? colors.primary : colors.border,
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'stretch',
    fontSize: 16,
    color: colors.white,
    flex: 1,
    ...inputStyle,
  };

  return (
    <FormInput
      errorMessage={hasUserInput ? errorMessage : (v) => ''}
      label={label}
      value={value}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          maxHeight: 52,
        }}
      >
        <TextInput
          autoCapitalize={autoCapitalize}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChange}
          onSubmitEditing={onSubmit}
          placeholder={placeholder}
          placeholderTextColor={`${colors.light_gray}99`}
          keyboardType={keyboardType}
          ref={(r) => getRef?.(r)}
          returnKeyType={returnKeyType}
          style={style}
          textAlign='left'
          value={value}
        />
      </View>
    </FormInput>
  );
};

export default CustomTextInput;
