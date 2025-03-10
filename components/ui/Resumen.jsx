import { View } from 'react-native'
import React from 'react'
import Label from '../Form/Label'

export default function Resumen({ data }) {
    return (
        <View className="flex flex-row justify-between my-2 dark:bg-gray-700 bg-gray-50 rounded-lg">
            <View className="border-r-2 border-r-gray-600 p-2 items-center w-[25%]">
                <Label className={"uppercase font-bold text-sm"}>Producto</Label>
                <Label className={"text-sm font-semibold"}>{data?.producto?.nombre}</Label>
            </View>

            <View className="border-r-2 border-r-gray-600 p-2 items-center w-[25%]">
                <Label className={"uppercase font-bold text-sm"}>Stock</Label>
                <Label className={"text-sm font-semibold"}>{data?.producto?.stock_actual}</Label>
            </View>
            
            <View className="border-r-2 border-r-gray-600 p-2 items-center w-[25%]">
                <Label className={"uppercase font-bold text-sm"}>$ Prom.</Label>
                <Label className={"text-sm font-semibold"}>{data?.resumen?.ultimo_costo}</Label>
            </View>
            <View className="p-2 items-center w-[25%]">
                <Label className={"uppercase font-bold text-sm"}>Total</Label>
                <Label className={"text-sm font-semibold"}>{data?.resumen?.costo_total_inventario}</Label>
            </View>
        </View>
    )
}