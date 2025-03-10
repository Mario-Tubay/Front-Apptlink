import { View, Text, Alert, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../../components/ui/Container'
import Label from '../../../../components/Form/Label'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import ModalView from '../../../../components/ui/ModalView'
import { useColorScheme } from 'nativewind'
import AntDesign from '@expo/vector-icons/AntDesign';
import BuscadorCliente from '../../../../components/ui/BuscadorCliente'
import DateTime from '../../../../components/Form/DateTime'
import { ScrollView } from 'react-native-gesture-handler'
import ModalDetallePedido from '../../../../components/ui/ModalDetallePedido'
import FooterValores from '../../../../components/Form/FooterValores'
import CardDetalle from '../../../../components/Form/CardDetalle'
import { deletePedido, getPedidosById, update } from '../../../../services/pedidos'
import { Linking } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
export default function ScreenEdit() {
    const { id } = useLocalSearchParams()
    const date = new Date()
    const formattedDate = date.toISOString().split('T')[0]
    const [form, setForm] = useState({
        fecha: formattedDate,
        detalle: [],
        subtotal_0: 0.00,
        subtotal_impuesto: 0.00,
        iva: 0.00,
        impuesto: 0.00,
        descuento: 0.00,
        total: 0.00
    })
    const calculateTotals = () => {
        const { detalle } = form
        const subtotal_0 = detalle.reduce((acc, item) => acc + parseFloat(item?.subtotal_0), 0)
        const subtotal_impuesto = detalle.reduce((acc, item) => acc + parseFloat(item?.subtotal_impuesto), 0)
        const subtotal = subtotal_0 + subtotal_impuesto
        const iva = detalle.reduce((acc, item) => acc + parseFloat(item?.impuesto), 0)
        const total = subtotal + iva
        setForm({
            ...form,
            subtotal_0: subtotal_0.toFixed(2, 2),
            subtotal_impuesto: subtotal_impuesto.toFixed(2, 2),
            iva: iva.toFixed(2, 2),
            total: total.toFixed(2, 2)
        })
    }

    const [modalVisible, setModalVisible] = useState(false)
    const modalRef = useRef()
    const { colorScheme } = useColorScheme()
    const handleSubmit = async () => {
        const response = await update(form)
        if (response?.status === "error") return Alert.alert('Error', response?.message)
        Alert.alert('Exito', 'Pedido actualizado correctamente')
        return router.back('/products')
    }

    const handleDelete = (index) => {
        const newDetalle = form.detalle.filter((_, i) => i !== index)
        setForm({ ...form, detalle: newDetalle })
    }
    const getData = async () => {
        const response = await getPedidosById(id);
        if (response?.status === "error") return Alert.alert('Error', response?.message)
        setForm(response)
    }
    const eliminarPedido = async () => {

        Alert.alert('Eliminar', '¿Estas seguro de eliminar este pedido?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'Eliminar', onPress: async () => {
                    const response = await deletePedido(id)
                    if (response?.status === "error") return Alert.alert('Error', response?.message)
                    Alert.alert('Exito', 'Pedido eliminado correctamente')
                    return router.back('/pedidos')
                }
            }
        ])
    }


    useEffect(() => {
        calculateTotals()
    }, [form.detalle])

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff' },
                headerShown: true,
                headerShadowVisible: true,
                headerTitle: 'Editar Pedido',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} className="flex-row items-center">
                        <AntDesign name="left" size={18} color="#ef4444" />
                        <Text className="ml-1 text-red-500 text-base font-bold">Regresar</Text>
                    </Pressable>
                ),
                headerRight: () => (
                    <Pressable onPress={handleSubmit} className="">
                        <Text className="text-cyan-500 text-base font-bold">Editar</Text>
                    </Pressable>
                ),
            }} />
            <Container className={`h-full`}>
                <View className="flex flex-row justify-between my-2">
                    <Pressable onPress={eliminarPedido}
                        className=" px-3 py-2 rounded-lg flex-row items-center self-end">
                        <Feather name="trash-2" size={18} color="#ef4444" />
                        <Text className="text-red-500 font-semibold text-sm ml-1">Eliminar</Text>
                    </Pressable>

                    <Pressable onPress={() => Linking.openURL(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/${id}/pdf`)}
                        className="bg-red-50 px-3 py-2 rounded-lg flex-row items-center self-end">
                        <AntDesign name="pdffile1" size={18} color="#ef4444" />
                        <Text className="text-red-500 font-semibold text-sm ml-1">Ver PDF</Text>
                    </Pressable>
                </View>
                <View className="">
                    <Label className={'font-semibold'}>Cliente</Label>
                    <TouchableOpacity onPress={() => modalRef.current.present()}>
                        <Text className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full px-2.5 py-3 dark:bg-gray-700 dark:border-gray-600  dark:text-white pr-6">
                            {form.cliente && `${form?.cliente?.nombres} ${form?.cliente?.apellidos}`}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-4">
                    <Label className={'font-semibold'}>Fecha</Label>
                    <DateTime setForm={setForm} form={form} value={form?.fecha} />
                </View>

                <View className="flex flex-row justify-between mt-4 items-center">
                    <Label className={"text-lg font-semibold"}>Detalles</Label>
                    <Pressable onPress={() => setModalVisible(true)} className="bg-green-50 px-2 py-1 rounded-lg">
                        <Text className="text-green-500 font-bold text-sm">Agregar</Text>
                    </Pressable>
                </View>


                <ScrollView>
                    {form.detalle.length === 0 && <Text className="mt-4 text-gray-500 text-sm">No hay detalles</Text>}
                    {form.detalle.map((item, index) => <CardDetalle key={index} item={item} onPress={() => handleDelete(index)} />)}
                </ScrollView>

                <FooterValores form={form} />

            </Container>

            <ModalView reference={modalRef}>
                <BuscadorCliente modalRef={modalRef} form={form} setForm={setForm} />
            </ModalView>

            <ModalDetallePedido setModalVisible={setModalVisible}
                modalVisible={modalVisible} form={form} setForm={setForm} />
        </>
    )
}