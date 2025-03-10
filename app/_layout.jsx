import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function layout() {
  const { colorScheme } = useColorScheme()
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <Stack screenOptions={
          {
            tabBarStyle: {
              backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff',
            }
          }
        } >
          <Stack.Screen name="sign-in"  options={{ title: 'Login' }} />
          <Stack.Screen name="register" options={{ title: 'Registrarse' }} />
          <Stack.Screen name="forgot-password" options={{ title: 'Registrarse' }} />
          <Stack.Screen name="screen-token" options={{ title: 'Token' }} />
          <Stack.Screen name="change-password" options={{ title: 'Cambio de password' }} />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}