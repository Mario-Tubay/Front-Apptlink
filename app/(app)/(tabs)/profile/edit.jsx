import { View, Text, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../../components/ui/Container'
import Label from '../../../../components/Form/Label'
import Input from '../../../../components/Form/Input'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { useSession } from '../../../../hooks/useSession'
export default function edit() {
  const { data: session } = useSession()
  const router = useRouter()
  const insets = useSafeAreaInsets()
  return (
    <>
      <Container style={{ paddingTop: Platform?.OS != "ios" && insets.top }}
        className={" flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700"}>
        
        <View className="w-14" />
        <Label className={"font-bold"}>Información</Label>
        <Pressable onPress={() => router.back('products')} className="py-5 ">
          <Text className="text-red-500 text-base font-bold">Cancelar </Text>
        </Pressable>
      </Container>
      <Container type='scroll'>
        <View className="mt-4">
          <Label>Nombres</Label>
          <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600  dark:text-white pr-6">
            {session?.nombres}
          </Text>
        </View>
        <View className="mt-4">
          <Label>Apellidos</Label>
          <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600  dark:text-white pr-6">
            {session?.apellidos}
          </Text>
        </View>
        <View className="mt-4">
          <Label>Correo</Label>
          <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600  dark:text-white pr-6">
            {session?.email}
          </Text>
        </View>

        <View className="mt-4">
          <Label>Fecha creación perfil</Label>
          <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600  dark:text-white pr-6">
            {new Date(session?.created_at).toLocaleString()}
          </Text>
        </View>
      </Container>
    </>

  )
}