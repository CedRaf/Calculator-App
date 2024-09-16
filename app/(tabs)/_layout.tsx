import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <StatusBar hidden={true}/>
    <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            display: route.name === 'index' ? 'none' : 'flex', // Hide tab bar on "index" screen
          },
        })}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
    </Tabs>
    </>
  );
}
