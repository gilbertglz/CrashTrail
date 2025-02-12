import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TabBarIconWithLabel from '../components/TabBarIconWithLabel';
import { useTheme } from '../hooks/ThemeContext'; // Import useTheme
 
interface TabNavigatorProps {
  height: number
}
  const Tab = createBottomTabNavigator({
    initialRouteName: 'Home',
    tabBar: () => null,
    screenOptions: {
      headerShown: false,
    },
    screens: {
      Home: HomeScreen,
      AddExpense: AddExpenseScreen,
    },
    taBarLabelPosition:'below-icon',
    
    //tabBarIcon:
  });



const TabNavigator: React.FC<TabNavigatorProps> = ({height}) => {
  const { theme } = useTheme(); // Access theme outside the screenOptions

  return (
    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = 'layers';
            let label = route.name;

            switch(route.name)
            {
              case 'Home':
                break;
              case 'Add Expense':
                iconName = 'add-to-list';
                break;
            }

            return <TabBarIconWithLabel iconName={iconName} label={label} color={color} size={size} />;
          },
          tabBarLabel: () => null,
          tabBarStyle: {
            height:100,
            padding:25,
            backgroundColor: theme.backgroundColor,
            justifyContent:'center',
            borderColor: theme.backgroundColor
          },
          tabBarActiveTintColor: theme.textColor,
          tabBarInactiveTintColor: theme.textColor,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Expense" component={AddExpenseScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
