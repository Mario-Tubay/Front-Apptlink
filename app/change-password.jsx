import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/ui/Container'
import Label from '../components/Form/Label'
import Input from '../components/Form/Input'
import Button from '../components/ui/Button'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { resetAccountPass } from '../services/auth'

export default function ChangePassword() {
    const { email, token } = useLocalSearchParams()
    const { colorScheme } = useColorScheme()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        password: "",
        confirm_password: ""
    })

    const handleSubmit = async () => {
        setLoading(true)
        const response = await resetAccountPass({
            email: email,
            token: token,
            password: form?.password,
            confirm_password: form?.confirm_password
        })
        setLoading(false)
        if (response?.status === "error") return Alert.alert('Error', response.message)
        Alert.alert('Exito', response.message)
        return router.push('/sign-in')

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
            <Container className={'h-full flex items-center justify-center'}>
                <View className="w-full">
                    <View>
                        <Label className={'font-semibold'}>Nueva contraseña</Label>
                        <Input secure={true} value={form?.password} onChangeText={text => setForm({ ...form, password: text})} />
                    </View>
                    <View className="mt-3">
                        <Label className={'font-semibold'}>Repetir Nueva contraseña</Label>
                        <Input secure={true} value={form?.confirm_password} onChangeText={text => setForm({...form, confirm_password: text})}  />
                    </View>
                    <View className="mt-3">
                        <Button loading={loading} onPress={handleSubmit}>
                            Cambiar contraseña
                        </Button>
                    </View>
                </View>
            </Container>
        </>

    )
}