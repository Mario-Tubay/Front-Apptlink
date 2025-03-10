import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { useColorScheme } from 'nativewind'
import Container from '../components/ui/Container'
import Label from '../components/Form/Label'
import Input from '../components/Form/Input'
import Button from '../components/ui/Button'
import { forgotPassword } from '../services/auth'

export default function RecoveryPassword() {
    const [loading, setLoading] = useState(false)
    const { colorScheme } = useColorScheme()
    const [form, setForm] = useState(null)
    const recuperar = async () => {
        setLoading(true)
        const response = await forgotPassword(form?.email)
        setLoading(false)
        if (response?.status === "error") return Alert.alert('Error', response.message)
        Alert.alert('Exito', response.message)
        return router.push({
            pathname: '/screen-token',
            params: {
                email: form?.email
            }
        })
    }
    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "Olvisate de tu contraseña",
                    headerStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#fff',
                    },
                    headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',

                }} />

            <Container className={"h-full flex justify-center items-center"}>
                <View className="w-full mt-[-50] mb-4">
                    <Label className={'font-bold text-xl mb-9'}>Olvisate de tu contraseña o tienes bloqueado tu usuario</Label>

                    <Label>Escriba su email</Label>
                    <Input value={form?.email} onChangeText={text => setForm({ email: text })} keyboardType={"email-address"} />
                </View>
                <View className="w-full">
                    <Button loading={loading} className="mt-4 w-full" onPress={recuperar}>
                        Recuperar
                    </Button>
                </View>
            </Container>

        </>
    )
}