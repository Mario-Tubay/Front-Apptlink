import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { getTotalProducts } from '../../services/products';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { getTotalCost } from '../../services/pedidos';
export default function CardLink() {
    const [data, setData] = useState(null)
    const [pedidos, setPedidos] = useState(null)
    const getData = async () => {
        const response = await getTotalProducts()
        setData(response)
    }
    const getPedidos = async () => {
        const response = await getTotalCost()
        setPedidos(response)
    }
    useEffect(() => {
        getPedidos()
        getData()
    }, [])
    return (
        <View className="mt-4 flex flex-col items-center justify-between gap-4">
            <View className="bg-yellow-200 p-4 rounded-lg w-full">
                <View className="flex flex-row justify-between items-center">
                    <View>
                        <Feather name="shopping-bag" size={25} color="#a16207" />
                        <Text className="mt-2 font-semibold text-yellow-700">Productos</Text>
                    </View>
                    <View className="w-12 h-12 rounded-full bg-white items-center justify-center">
                        <Text className="text-yellow-800 font-bold text-xl">
                            {data?.total_productos}
                        </Text>
                    </View>
                </View>
                <Link asChild href="/products" className='w-[30%] mt-3'>
                    <Pressable className="bg-yellow-50 rounded-full px-4 py-2 flex-row text-center justify-center">
                        <Text className="text-yellow-950 font-bold">Ir</Text>
                        <Entypo name="chevron-right" size={18} color="#422006" />
                    </Pressable>
                </Link>
            </View>


            <View className="bg-blue-200 p-4 rounded-lg w-full">
                <View className="flex flex-row justify-between items-center">
                    <View>
                        <AntDesign name="filetext1" size={25} color={"#1d4ed8"} />
                        <Text className="mt-2 font-semibold text-blue-700">Pedidos</Text>
                    </View>
                    <View className="w-12 h-12 rounded-full bg-white items-center justify-center">
                        <Text className="text-blue-800 font-bold text-xl">
                            {pedidos?.total_pedidos}
                        </Text>
                    </View>
                </View>
                <Link asChild href="/products" className='w-[30%] mt-3'>
                    <Pressable className="bg-blue-50 rounded-full px-4 py-2 flex-row text-center justify-center">
                        <Text className="text-blue-950 font-bold">Ir</Text>
                        <Entypo name="chevron-right" size={18} color="#422006" />
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}