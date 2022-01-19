import React from 'react';
import { Text, View } from 'react-native';
import { colors, formStyles } from '../constants';

const FormInput = ({
  children,
  label = '',
  errorMessage = (v) => '',
  value = null,
}) => {
  const error = errorMessage(value);

  return (
    <View style={{ marginBottom: 15, alignItems: 'flex-start' }}>
      {label !== '' && (
        <Text
          style={{
            ...formStyles.text,
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: 3,
            color: dark ? colors.white : colors.grey,
          }}
        >
          {label}
        </Text>
      )}

      {children}

      {error !== '' && (
        <Text style={{ ...formStyles.errorText, alignSelf: 'center' }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default FormInput;
