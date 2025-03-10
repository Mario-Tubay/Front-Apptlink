import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import Label from './components/Form/Label';
import { Link, router } from 'expo-router';
import Button from './components/ui/Button';
import Input from './components/Form/Input';
import LoginImage from './components/ui/LoginImage';
import { useState } from 'react';
import './global.css';
import { signIn } from './services/auth';


export default function App() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    setLoading(true)
    const response = await signIn(form.email, form.password)
    setLoading(false)
    if(response?.status === "error") return Alert.alert('Error', response.message)
    return router.push('/')
  }
  return (
    <>
      <View className="max-w-[440px] flex-1 justify-center bg-white px-4 h-screen dark:bg-gray-800">
        <View className="items-center justify-center">
          <LoginImage width={400} />
          <Label className='mt-4'>Iniciar Sesión</Label>
        </View>
        <View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View className="mb-5">
              <Label>Correo electrónico</Label>
              <Input keyboardType={"email-address"} value={form.email} onChangeText={value => setForm({ ...form, email: value })} />
            </View>
            <View className="mb-5">
              <Label>Contraseña</Label>
              <Input value={form.password} onChangeText={value => setForm({ ...form, password: value })} secure />
            </View>
          </KeyboardAvoidingView>
          <View className="flex items-end">
            <Link asChild href="/forgot-password">
              <Text className="text-sm text-cyan-600 underline">¿Olvidaste tu contraseña?</Text>
            </Link>
          </View>
          <View className="mt-5">
            <Button loading={loading} onPress={handleLogin}>
              Iniciar Sesión
            </Button>
          </View>
        </View>
      </View>
      <View className="absolute flex items-center flex-row justify-center py-5 border-t border-gray-300 bottom-0 w-full">
        <Label className='font-light' >No tienes una cuenta? </Label>
        <Link asChild href="/register">
          <Text className="mb-2 text-base text-cyan-400">Registrarse</Text>
        </Link>
      </View>
    </>
  );
}
