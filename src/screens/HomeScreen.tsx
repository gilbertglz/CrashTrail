import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Appearance, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/ThemeContext'; // Import the useTheme hook

const HomeScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme(); // Get the system color scheme (light or dark)
    
    // Set theme based on the system color scheme
    if (colorScheme === 'dark') {
      toggleTheme(); // Switch to dark theme
    }

    // Optionally, listen for changes in system color scheme
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
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.text, { color: theme.textColor }]}>
          Home Screen
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
