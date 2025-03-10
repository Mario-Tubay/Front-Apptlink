import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../../components/ui/Container'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Label from '../../../components/Form/Label'
import CardPresentacion from '../../../components/ui/CardPresentacion'
import { useSession } from '../../../hooks/useSession'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'
import CardLink from '../../../components/ui/CardLink'
export default function index() {
  const insets = useSafeAreaInsets()
  const { status, data } = useSession()
  return (
    <Container style={{ paddingTop: insets.top }} type='scroll' className={`h-full`}>
      <View className="bg-gray-100 dark:bg-gray-900 px-5 py-3 rounded-xl flex flex-row items-center justify-between mb-4">
        <View>
          <Text className="text-3xl text-gray-800 dark:text-gray-200">Hola, </Text>
          <Text className="text-3xl font-semibold text-gray-800 dark:text-gray-200">{data?.nombres}</Text>
        </View>
        <Link href="/profile" className="text-blue-500 dark:text-blue-400  w-10">
          <Ionicons name="settings-outline" size={24} color="#3b82f6" />
        </Link>
      </View>
      <CardPresentacion />
      <CardLink />
    </Container>
  )
}