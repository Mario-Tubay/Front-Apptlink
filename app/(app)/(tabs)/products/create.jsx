import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../../components/ui/Container'
import Label from '../../../../components/Form/Label'
import Input from '../../../../components/Form/Input'
import Button from '../../../../components/ui/Button'
import { create } from '../../../../services/products'
import { router } from 'expo-router'
import Checkbox from 'expo-checkbox'

export default function ScreenCreate() {
    const [form, setForm] = useState({
        iva: 0,
    })
    const handleSubmit = async () => {
        const response = await create(form)
        if (response?.status === "error") return Alert.alert('Error', response?.message)
        Alert.alert('Exito', 'Producto creado correctamente')
        return router.back()
    }
    return (
        <>
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
                    <Input value={form?.stock} keyboardType={"numeric"} onChangeText={(text) => setForm({ ...form, stock: text })} />
                </View>

            </Container>
            <View className="absolute bottom-0 w-full px-2">
                <Button onPress={handleSubmit}  >
                    Guardar
                </Button>
            </View>
        </>

    )
}