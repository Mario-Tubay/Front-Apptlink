import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTotalCost } from '../../services/pedidos'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export default function CardPresentacion() {
    const [data, setData] = useState(null)
    const getData = async () => {
        const response = await getTotalCost()
        setData(response)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View className="bg-blue-400 p-3 rounded-xl">
            <Text className="text-white text-2xl font-bold">
                Total Pedidos
            </Text>
            <Text className="text-white text-2xl font-semibold">
                {data?.total_ventas ? `$ ${parseFloat(data?.total_ventas).toFixed(2, 2)}` : '$ 0.00'}
            </Text>
            <View className="flex flex-row mt-4">
                <View className="flex items-center justify-center">
                    <View className="w-12 h-12 rounded-full bg-white items-center justify-center">
                        <FontAwesome6 name="dollar" size={24} color="#172554" />
                    </View>
                    <Text className="font-semibold text-blue-950 text-sm mt-2">Pedidos</Text>
                </View>
            </View>
        </View>
    )
}