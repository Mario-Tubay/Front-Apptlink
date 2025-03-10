import { View, Text, Pressable, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import Container from '../../../../components/ui/Container'
import { Link, useFocusEffect } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { getPedidos } from '../../../../services/pedidos';
import CardPedidos from '../../../../components/ui/CardPedidos';

export default function index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const result = await getPedidos()
    setLoading(false)
    setData(result)
  }

  useFocusEffect(
    useCallback(() => {
      getData()
    }, [])
  );

  const memoizedData = useMemo(() => data, [data]);

  return (
    <Container className={`h-full`}>
      <View className="flex flex-col items-end justify-end mt-3">
        <Link asChild href="/pedidos/create" >
          <Pressable className="bg-blue-50 px-2 py-1 rounded-md  items-center flex flex-row justify-center">
            <Entypo name="plus" size={20} color="#1e3a8a" />
            <Text className="text-blue-900 font-bold text-sm">Crear</Text>
          </Pressable>
        </Link>
      </View>

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getData}
          />}
        style={{ marginTop: 10 }}
        data={memoizedData}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <CardPedidos item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  )
}