import React from 'react'
import App from '../App'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false, title: "Login" }} />
      <App />
    </>
  )
}