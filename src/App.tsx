import React from 'react';
import { ThemeProvider } from './hooks/ThemeContext';  // Import the ThemeProvider
import TabNavigator from './navigation/AppNavigator'  // Import your TabNavigator
import { Dimensions } from 'react-native';


const { height, width } = Dimensions.get('window');  // Get screen height and width
const dynamicHeight = height * 0.15;  // 10% of the screen height

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TabNavigator height={dynamicHeight}/>
    </ThemeProvider>
  );
};

export default App;
