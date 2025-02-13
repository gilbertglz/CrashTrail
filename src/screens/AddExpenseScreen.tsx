import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Appearance, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from '../hooks/ThemeContext'; // Import the useTheme hook
import FormRow from '../components/FormRow';
import Button from '../components/Button';

const AddExpenseScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [notes, setNote] = useState('');

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[styles.container, { backgroundColor: theme.secondaryDarkBlue }]}>
        <FormRow label="Name" value={name} onChange={setName} type="text" />
        <FormRow label="Price" value={price} onChange={setPrice} type="number" />
        <FormRow label="Category" value={category} onChange={setCategory} type="text" />
        <FormRow label="Notes" value={notes} onChange={setNote} type="text" />
        
        <Button title='Add Expense' onPress={() => console.log("Button Pressed")}/>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingInline:45,
    paddingTop:50
  }
});

export default AddExpenseScreen;


