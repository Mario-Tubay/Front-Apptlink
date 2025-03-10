import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardDetalle({ item, onPress }) {
    return (
        <View className="mt-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="text-gray-900 dark:text-white font-semibold">{item.nombre}</Text>
                    <Text className="text-gray-500 dark:text-gray-300">Cantidad: {item.cantidad}</Text>
                    <Text className="text-gray-500 dark:text-gray-300">Precio: ${item.precio_unitario}</Text>
                </View>
                <Pressable className="bg-red-100 p-2 rounded-lg"
                    onPress={onPress}
                >
                    <AntDesign name="delete" size={18} color="#ef4444" />
                </Pressable>
            </View>
        </View>
    )
}