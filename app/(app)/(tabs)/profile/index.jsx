import { View, Text, Pressable, ScrollView, Alert } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import Container from '../../../../components/ui/Container';
import { logout } from '../../../../services/auth';
import Feather from '@expo/vector-icons/Feather';
import { useColorScheme } from 'nativewind';


export default function index() {
  const { colorScheme } = useColorScheme()
  const handleLogout = async () => {

    Alert.alert('Cerrar sesión', '¿Estás seguro de cerrar sesión?', [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Cerrar sesión',
        style: 'destructive',
        onPress: async () => {
          const response = await logout()
          if (response?.status === 'error') return Alert.alert('Error', response?.message)
          router.push('/sign-in')
        }
      }
    ])


  }

  return (
    <ScrollView className="h-full">
      <Container className={"h-screen justify-center"}>
        <View className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link asChild href={"/profile/edit"}>
            <Pressable className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row">
              <Ionicons name="information-circle-outline" size={22} color={colorScheme === "dark" ? "#e5e7eb" :"#111827"} />
              <Text className="ml-3 text-base font-medium tracking-tight text-gray-900 dark:text-gray-200">Tu información</Text>
            </Pressable>
          </Link>
          <Pressable onPress={handleLogout} className="p-6 border-b border-gray-200 dark:border-gray-700 flex-row">
            <Feather name="log-in" size={22} color="red" />
            <Text className="ml-3 text-base font-medium tracking-tight text-red-500 ">Cerrar Sessión</Text>
          </Pressable>
        </View>
      </Container>
    </ScrollView>

  )
}