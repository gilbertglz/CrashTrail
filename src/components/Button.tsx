import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/ThemeContext';  // Import the useTheme hook

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const { theme } = useTheme();  // Access the current theme

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.buttonBackground }]}  // Dynamically set background color
      onPress={onPress}>
      <Text style={[styles.text, { color: theme.buttonText }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 35
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Button;
