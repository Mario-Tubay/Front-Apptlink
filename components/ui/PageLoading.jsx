import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import Container from './Container'
import { useColorScheme } from 'nativewind'
// import LoadingImage from './LoadingImage'
import Label from '../Form/Label'
import LoadingImage from './LoadingImage'
import { Stack } from 'expo-router'

export default function PageLoading() {
  const { colorScheme } = useColorScheme();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Container >
        <View className="items-center justify-center h-screen">
          <LoadingImage width={500} />
          <View className="mt-3" />
          <Label className='text-xs mt-5'>Cargando por favor espere...</Label>
          <ActivityIndicator size="small" color={colorScheme === "light" ? "#1F2937" : "#ffffff"} />
        </View>
      </Container>
    </>

  )
}