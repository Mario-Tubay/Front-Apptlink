import { View, Text } from 'react-native'
import React from 'react'
import Label from './Label'

export default function FooterValores({ form }) {
    return (
        <View className="mt-4 border-t pt-2 border-gray-200">
            <View className="flex flex-row justify-between">
                <Label className={'font-semibold'}>Subtotal 0</Label>
                <Label className={'font-bold'}>
                    ${form?.subtotal_0}
                </Label>
            </View>
            <View className="flex flex-row justify-between">
                <Label className={'font-semibold'}>Subtotal Imp.</Label>
                <Label className={'font-bold'}>
                    ${form?.subtotal_impuesto}
                </Label>
            </View>
            <View className="flex flex-row justify-between">
                <Label className={'font-semibold'}>IVA</Label>
                <Label className={'font-bold'}>
                    $ {form?.iva}
                </Label>
            </View>
            <View className="flex flex-row justify-between">
                <Label className={'font-semibold'}>Total</Label>
                <Label className={'font-bold'}>
                    ${form?.total}
                </Label>
            </View>
        </View>
    )
}