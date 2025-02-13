import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { darkColors } from '../constants/colors';

interface FormRowProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: 'text' |'number';
  options?: string[]; // For dropdowns
}

const FormRow: React.FC<FormRowProps> = ({ label, value, onChange, type = 'text', options }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      {
      type === 'text' ? (
        <TextInput 
          style={styles.input} 
          value={value} 
          onChangeText={onChange} 
          placeholder={`Enter ${label.toLowerCase()}`} 
          placeholderTextColor={darkColors.textColor}
        />
      ) : (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => {
              // Regex to allow numbers with max 2 decimal places
              if (/^\d*\.?\d{0,2}$/.test(text)) {
                onChange(text);
              }
            }}
            keyboardType="numeric"
            placeholder="0.00"
            placeholderTextColor={darkColors.textColor}
          />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',

  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color:darkColors.textColor
  },
  input: {
    color:darkColors.textColor,
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontStyle:'italic',
    fontSize: 18,
  },
});

export default FormRow;

