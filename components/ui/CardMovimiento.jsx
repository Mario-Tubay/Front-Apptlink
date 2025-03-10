import { View, Text } from 'react-native'
import React from 'react'
import Label from '../Form/Label'

export default function CardMovimiento({ item }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).replace(/^\w/, (c) => c.toUpperCase());
    }
    let bgColor = item?.tipo_movimiento === "entrada"? "bg-green-800" : "bg-red-500"
    return (
        <View className={`w-full p-3 rounded-lg ${item?.tipo_movimiento === "entrada" ? "bg-green-100" : "bg-red-100"}`}>
            <View className="flex flex-row">
                <View className={`w-4 h-4 rounded-full ${bgColor}`}/>
                <Text className="text-green-800 ml-3 uppercase font-bold">{item?.concepto}</Text>
            </View>
            <View className={`flex flex-row ml-1.5 mt-[-4] `}>
                <View className={`w-1 ${bgColor} rounded-full`} />
                <View className="ml-4 mt-3 gap-1">
                    <Text className="text-gray-500 font-semibold">{formatDate(item?.fecha)}</Text>
                    <View className="flex-row gap-5">
                        <Text className="text-gray-500 font-semibold">Cantidad: {item?.cantidad}</Text>
                        <Text className="text-gray-500 font-semibold">Saldo: {item?.saldo_cantidad}</Text>
                    </View>
                    <Text className="text-gray-500 font-semibold">P/U: {item?.valor_unitario}</Text>
                    <Text className="text-gray-500 font-semibold">V. Promedio: {item?.saldo_valor_unitario}</Text>

                    
                </View>

            </View>
        </View>
    )
}

// <View className="relative my-5 grid grid-cols-[30px_1fr] gap-4">
//     <View className="flex flex-col items-center gap-2">
//         <View className="rounded-full bg-[#bae5fd] p-1"></View>
//         <View className="h-full w-0 border border-[#bae5fd]"></View>
//     </View>
//     <View className="flex flex-col gap-2">
//         <View className="flex gap-4"> 
//         <Text className="text-xl font-bold text-[#0181c8]"> 
//             Desarrollador NextJs
//         </Text>
//         </View>
//         <View className="grid">
//             <Text className="text-sm text-[#0181c8]">
//                 Sep-2023 / Mar-2024
//             </Text>
//             <Text className="relative right-0 text-[#0181c8] mt-3 font-bold w-max bg-[#e0f2fe] rounded-full px-3 py-1">
//                 Freelance
//             </Text>
//         </View>
//         <Text className="text-md max-w-[80ch] font-[400]">
//             Desarrollé una aplicación web para la venta y visualización de terrenos, utilizando React, NextJs y TailwindCSS.
//         </Text>
//         <Text className="text-md max-w-[80ch] font-[400]">
//             aaaaa
//         </Text>
//     </View>
// </View>