import { View, Text, Pressable, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Container from '../../../../components/ui/Container'
import Label from '../../../../components/Form/Label'
import Input from '../../../../components/Form/Input'
import { getProductById, update } from '../../../../services/products'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Checkbox from 'expo-checkbox'

export default function ProductById() {
    const { id } = useLocalSearchParams()
    const [form, setForm] = useState()
    const insets = useSafeAreaInsets()
    const router = useRouter();
    const getData = async () => {
        const response = await getProductById(id)
        return setForm(response)
    }

    const handleSubmit = async () => {
        const response = await update(form)
        if (response?.status === "error") return alert(response.message)
        alert('Producto actualizado correctamente')
        return router.replace('products')
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Container  style={{ paddingTop: Platform?.OS != "ios" && insets.top }} className={" flex-row justify-between items-center border-b border-gray-200 dark:border-gray-700"}>
                <Pressable onPress={() => router.back('products')} className="py-5 ">
                    <Text className="text-red-500 text-base font-bold">Cancelar </Text>
                </Pressable>
                <Label className={"font-bold"}>Editar producto</Label>
                <Pressable onPress={handleSubmit} className="py-5 ">
                    <Text className="text-yellow-500 text-base font-bold">Editar</Text>
                </Pressable>
            </Container>


            <Container type='scroll' className={`h-full`}>
                <View className="mt-4">
                    <Label>Codigo</Label>
                    <Input value={form?.codigo} onChangeText={(text) => setForm({ ...form, codigo: text })} />
                </View>
                <View className="mt-4">
                    <Label>Nombre</Label>
                    <Input value={form?.nombre} onChangeText={(text) => setForm({ ...form, nombre: text })} />
                </View>
                <View className="mt-4">
                    <Label>Descripción</Label>
                    <Input value={form?.descripcion} onChangeText={(text) => setForm({ ...form, descripcion: text })} />
                </View>
                <View className="mt-4">
                    <Label>Precio</Label>
                    <Input value={form?.precio} keyboardType={"numeric"} onChangeText={(text) => setForm({ ...form, precio: text })} />
                </View>

                <View className="mt-4">
                    <Label>Iva</Label>
                    <Checkbox
                        value={form?.iva === 0 ? false : true}
                        onValueChange={(isChecked) => setForm({...form, iva: isChecked? 1 : 0 })}
                        color={form?.iva === 1 ? '#3ba9cd' : undefined}
                    />
                </View>
                <View className="mt-4">
                    <Label>Stock</Label>
                    <Input value={`${form?.stock}`} keyboardType={"numeric"} onChangeText={(text) => setForm({ ...form, stock: text })} />
                </View>

            </Container>

        </>
    )
}