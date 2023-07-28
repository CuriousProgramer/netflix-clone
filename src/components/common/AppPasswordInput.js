import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const AppPasswordInput = ({ placeholder,placeholderTextColor,secureTextEntry=true, value, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={styles.input}
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

export default AppPasswordInput;
