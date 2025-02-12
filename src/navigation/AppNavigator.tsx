import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TabBarIconWithLabel from '../components/TabBarIconWithLabel';
import { useTheme } from '../hooks/ThemeContext';

interface TabNavigatorProps {
  height: number;
}

const Tab = createBottomTabNavigator();

const iconNames: Record<string, string> = {
  Home: 'layers',
  'Add Expense': 'add-to-list',
};

const TabNavigator: React.FC<TabNavigatorProps> = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 115,
            paddingTop: 20,
            justifyContent: 'center',
            backgroundColor: theme.backgroundColor,
            borderColor: theme.secondaryDarkBlue,
          },
          tabBarActiveTintColor: theme.textColor,
          tabBarInactiveTintColor: theme.textColor,
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => {
            const iconName = iconNames[route.name];
            return (
              <TabBarIconWithLabel
                iconName={iconName}
                label={route.name}
                color={color}
                size={size}
              />
            );
          },
        })}
      >

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: { backgroundColor: theme.backgroundColor },
            headerTintColor: theme.textColor,
          }}
        />

        <Tab.Screen
          name="Add Expense"
          component={AddExpenseScreen}
          options={{
            headerStyle: { backgroundColor: theme.backgroundColor },
            headerTintColor: theme.textColor,
          }}
        />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default TabNavigator;
