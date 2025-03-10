import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Label from '../Form/Label'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).replace(/^\w/, (c) => c.toUpperCase());
}

export default function CardPedidos({ item }) {
    return (
        <Link asChild href={`/pedidos/${item.id}`} >
            <Pressable className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl flex-1 flex-row items-center">
                <View className="flex-1 flex-row items-center">
                    <MaterialCommunityIcons name="shopping-outline" size={28} color="#F59E0B" />
                    <View className="ml-3">
                        <Label className={'text-lg font-bold'}>{item.cliente_nombre}</Label>
                        <Label className={'text-gray-500 dark:text-gray-300 text-[13px] font-semibold'}>{item.total_items} items</Label>
                        <Label className={'text-gray-500 dark:text-gray-300 text-[13px] font-semibold'}>
                            {formatDate(item.fecha)}
                        </Label>
                    </View>
                </View>
                <View className='items-end justify-end '>
                    <Label className={'text-gray-500 dark:text-gray-300 text-[15px] font-bold'}>${item.total}</Label>
                </View>
            </Pressable>
        </Link>
    )
}