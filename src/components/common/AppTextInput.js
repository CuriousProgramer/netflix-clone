import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const AppTextInput = ({ placeholder,placeholderTextColor, value, onChangeText,...otherProps }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#8e8e8e',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        fontSize: 20,
        color: colors.text
      },
});

export default AppTextInput;
