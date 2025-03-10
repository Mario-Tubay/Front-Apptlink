import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import Container from '../components/ui/Container'
import Label from '../components/Form/Label'
import Input from '../components/Form/Input'
import Button from '../components/ui/Button'

import { useColorScheme } from 'nativewind'
import { register } from '../services/auth'


export default function ScrennRegister() {
  const { colorScheme } = useColorScheme()
  const [form, setForm] = useState(null)
  const registrarse = async () => {
    const response = await register(form)
    if (response?.status === "error") return Alert.alert('Error', response.message)
    Alert.alert('Registrado', 'Usuario registrado correctamente')
    return router.replace('/')
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Registrese",
          headerStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#fff',
          },
          headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',

        }} />
      <Container type='scroll'>
        <View className="mt-4">
          <Label>CI</Label>
          <Input value={form?.ci} onChangeText={(text) => setForm({ ...form, ci: text })} />
        </View>
        <View className="mt-4">
          <Label>Nombres</Label>
          <Input value={form?.nombres} onChangeText={(text) => setForm({ ...form, nombres: text })} />
        </View>
        <View className="mt-4">
          <Label>Apellidos</Label>
          <Input value={form?.apellidos} onChangeText={(text) => setForm({ ...form, apellidos: text })} />
        </View>
        <View className="mt-4">
          <Label>Correo</Label>
          <Input keyboardType={"email-address"} value={form?.email} onChangeText={(text) => setForm({ ...form, email: text })} />
        </View>
        <View className="mt-4">
          <Label>Password</Label>
          <Input secure={true} value={form?.password} onChangeText={(text) => setForm({ ...form, password: text })} />
        </View>
        <View className="mt-4">
          <Label>Confirmar Password</Label>
          <Input secure={true} value={form?.confirm_password} onChangeText={(text) => setForm({ ...form, confirm_password: text })} />
        </View>
      </Container>
      <Container className={"py-4 border-t border-gray-200 absolute bottom-0 w-full"}>
        <Button onPress={registrarse}>Registrarse</Button>
      </Container>
    </>
  )
}