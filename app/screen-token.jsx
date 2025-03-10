import { View, Text, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { useColorScheme } from 'nativewind'
import InputToken from '../components/ui/InputToken'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import { verifyToken } from '../services/auth'

export default function SreenToken() {
    const { email } = useLocalSearchParams()
    const [loading, setLoading] = useState(false)
    const { colorScheme } = useColorScheme()
    const [token, setToken] = useState(['', '', '', ''])
    const input1Ref = useRef()
    const input2Ref = useRef()
    const input3Ref = useRef()
    const input4Ref = useRef()

    const handleChange = (text, index) => {
        const newToken = [...token]
        newToken[index] = text.toUpperCase()
        setToken(newToken)
        if (text && index === 0) input2Ref.current.focus()
        if (text && index === 1) input3Ref.current.focus()
        if (text && index === 2) input4Ref.current.focus()
    }

    const handleSubmit = async () => {
        setLoading(true)
        const response = await verifyToken({email, token: token.join('')})
        setLoading(false)
        if(response?.status === "error") return Alert.alert('Error', response.message)
        Alert.alert('Exito', response.message)
        return router.push({
            pathname: '/change-password', 
            params: {
                email: email, 
                token: token.join('')
            }
        })
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: "Token",
                    headerStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#fff',
                    },
                    headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',

                }} />
            <Container className="flex-1 justify-center items-center ">
                <Text className="text-2xl font-bold mb-8 dark:text-white">Ingrese el código</Text>
                <View className="flex-row space-x-4">
                    <InputToken ref={input1Ref} value={token[0]} onChangeText={(text) => handleChange(text, 0)} />
                    <InputToken ref={input2Ref} value={token[1]} onChangeText={(text) => handleChange(text, 1)} />
                    <InputToken ref={input3Ref} value={token[2]} onChangeText={(text) => handleChange(text, 2)} />
                    <InputToken ref={input4Ref} value={token[3]} onChangeText={(text) => handleChange(text, 3)} />
                </View>
                <View className="mt-3 w-[50%]">
                    <Button loading={loading} onPress={handleSubmit}>
                        Verificar
                    </Button>
                </View>
            </Container>
        </>

    )
}