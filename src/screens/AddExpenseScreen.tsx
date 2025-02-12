import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Appearance } from 'react-native';
import { useTheme } from '../hooks/ThemeContext'; // Import the useTheme hook

const AddExpenseScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme(); // Get the system color scheme (light or dark)
    
    // Set theme based on the system color scheme
    if (colorScheme === 'dark') {
      toggleTheme(); // Switch to dark theme
    }

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === 'dark') {
        toggleTheme(); // Switch to dark theme if system switches to dark
      } else {
        toggleTheme(); // Switch to light theme if system switches to light
      }
    });

    // Cleanup on unmount
    return () => subscription.remove();
  }, []); // Runs only once on component mount

  return (
    <View style={[styles.container, { backgroundColor: theme.secondaryDarkBlue }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>
        Add Expense
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  }
});

export default AddExpenseScreen;


