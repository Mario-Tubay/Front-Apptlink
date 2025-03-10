import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import { getProducts } from '../../../../services/products';
import { useFocusEffect } from 'expo-router';
import CardProducts from '../../../../components/ui/CardProducts';

export default function IndexProducto() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const result = await getProducts()
    setLoading(false)
    setData(result)
  }
  useFocusEffect(
    useCallback(() => {
      getData()
    }, [])
  );
  const memoizedData = useMemo(() => data, [data]);

  if(data.length === 0) return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-500 dark:text-gray-300 text-[13px] font-semibold">No hay productos</Text>
    </View>
    )

  return (
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
          <CardProducts item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
  )
}