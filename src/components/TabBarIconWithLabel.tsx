import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';  // Icon library
import { useTheme } from '../hooks/ThemeContext'; // Import the useTheme hook

// Update the type declaration to include the color prop
interface TabBarIconWithLabelProps {
  iconName: string;
  label: string;
  size: number;
  color?: string; // Optionally allow `color` to be passed in, otherwise use theme color
}

const TabBarIconWithLabel: React.FC<TabBarIconWithLabelProps> = ({ iconName, label, size, color }) => {
  const { theme } = useTheme();  // Access current theme

  // If color is passed as a prop, use that, otherwise use theme text color
  const iconColor = color || theme.textColor;

  return (
    <View style={[styles.container, { justifyContent: 'center' }]} >
      <Entypo name={iconName} size={size} color={iconColor} />
      <Text style={{ color: iconColor, fontSize: 12, marginTop: 5, textAlign: 'center', flexWrap:'nowrap'}}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    width:100
    //justifyContent:'flex-start'
    //height: '100%',
  },
});

export default TabBarIconWithLabel;
