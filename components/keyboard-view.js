import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function KeyboardView({ children = [], style = {} }) {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        enableAutomaticScroll
        contentContainerStyle={{
          flexGrow: 1,
          ...style,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default KeyboardView;
