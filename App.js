import axios from 'axios';
import React, { useState } from 'react';
import styles from './styles';
import { Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ChatbotScreen from './api';

// Home
const HomeScreen = () => (
  <View style={styles.pages}>
    <Text>Home Screen</Text>
  </View>
);

// Journal
const JournalScreen = () => (
  <View style={styles.pages}>
    <Text>Journal Screen</Text>
  </View>
);

// Chatbot
// const ChatbotScreen = () => (
//   <View style={styles.pages}>
//     <Text>Chatbot Screen</Text>
//   </View>
// );

// Calendar
const CalendarScreen = () => (
  <View style={styles.pages}>
    <Text>Calendar Screen</Text>
  </View>
);

// Settings
const SettingsScreen = () => {
  const s1 = () => {
    // Handle button press logic here
    console.log('s1 button pressed!');
  };

  const s2 = () => {
    // Handle button press logic here
    console.log('s2 button pressed!');
  };

  const s3 = () => {
    // Handle button press logic here
    console.log('s3 button pressed!');
  };

  const s4 = () => {
    // Handle button press logic here
    console.log('s4 button pressed!');
  };

  const s5 = () => {
    // Handle button press logic here
    console.log('s5 button pressed!');
  };

  // Outputs to Screen Settings Page
  return (
    <View style={styles.pages}>
      <View style={styles.topContainer}>
        <View style={styles.leftAligned}>
          <Image source={require('./images/profilePicture.jpg')} style={styles.profilePicture} />
        </View>
        <View style={styles.rightAligned}>
          <Text style={{ fontSize: 20 }}>Olivia Smith</Text>
          <Text>Joined May 2023</Text>
        </View>
      </View>
      <TouchableOpacity onPress={s1} style={styles.settings}>
        <Text style={styles.settingsText}>Change Profile Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={s2} style={styles.settings}>
        <Text style={styles.settingsText}>Change Name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={s3} style={styles.settings}>
        <Text style={styles.settingsText}>Set Date & Time</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={s4} style={styles.settings}>
        <Text style={styles.settingsText}>Delete All Journal Entries</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={s5} style={styles.settings}>
        <Text style={styles.settingsText}>Log Out</Text>
      </TouchableOpacity>

      <Text>Thera</Text>
      <Text>Created by Vi Dang</Text>
      <Text>Version 1.0</Text>
    </View>
  );
};

// Navigation Bar
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={styles.navBar}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = focused
                ? require('./images/Home.png')
                : require('./images/Home.png');
            } else if (route.name === 'Journal') {
              iconSource = focused
                ? require('./images/Journal.png')
                : require('./images/Journal.png');
            } else if (route.name === 'Chatbot') {
              iconSource = focused
                ? require('./images/Turtwig.png')
                : require('./images/Turtwig.png');
            } else if (route.name === 'Calendar') {
            iconSource = focused
              ? require('./images/Calendar.png')
              : require('./images/Calendar.png');
            } else if (route.name === 'Settings') {
              iconSource = focused
                ? require('./images/Settings.png')
                : require('./images/Settings.png');
            }

            return <Image source={iconSource} style={styles.navIcon} />;
          },
          tabBarLabel: '',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} />
        {/* <Tab.Screen name="Calendar" component={CalendarScreen} /> */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
