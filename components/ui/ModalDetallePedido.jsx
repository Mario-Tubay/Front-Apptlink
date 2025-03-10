import { View, Text, Modal, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Label from '../Form/Label';
import Input from '../Form/Input';
import { useColorScheme } from 'nativewind';
import Buscadorproducto from '../Form/Buscadorproducto';

export default function ModalDetallePedido({ modalVisible, setModalVisible, form, setForm }) {

    const [selectedProduct, setSelectedProduct] = useState(null)
    const handleClose = () => {
        setModalVisible(false)
        setSelectedProduct(null)
    }
    const handleAgregar = () => {
        if (!selectedProduct) return
        const subtotal_0 = selectedProduct.iva === 0 ? selectedProduct.precio * selectedProduct.cantidad : 0
        const subtotal_impuesto = selectedProduct.iva === 1 ? selectedProduct.precio * selectedProduct.cantidad : 0
        const impuesto = selectedProduct.iva === 1? selectedProduct.precio * selectedProduct.cantidad * 0.16 : 0
        setForm({
            ...form,
            detalle: [...form.detalle, {
                id: selectedProduct.id,
                id_producto: selectedProduct.id,
                nombre: selectedProduct.nombre,
                cantidad: selectedProduct.cantidad,
                precio_unitario: selectedProduct.precio,
                subtotal_0: subtotal_0.toFixed(2, 2),
                subtotal_impuesto: subtotal_impuesto.toFixed(2, 2) ,
                descuento: 0,
                impuesto: impuesto.toFixed(2, 2),
                total: (subtotal_0 + subtotal_impuesto).toFixed(2, 2),
            }]
        })
        setModalVisible(false)
        setSelectedProduct(null)
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View className="flex-1 justify-center bg-black/50 px-3">
                <View className="bg-white dark:bg-gray-800 rounded-3xl p-4">
                    <View className="flex-row justify-center items-center mb-3">
                        <Text className="text-lg font-bold dark:text-white text-gray-800">Agregar Producto</Text>
                    </View>

                    <View className="space-y-4">
                        <View>
                            <Label className={'font-semibold'}>Producto</Label>
                            <Buscadorproducto setSelectedProduct={setSelectedProduct} form={form} setForm={setForm} />
                        </View>

                        <View>
                            <Label className={'font-semibold'}>Cantidad</Label>
                            <Input
                                placeholder="Ingrese cantidad"
                                keyboardType="numeric"
                                value={selectedProduct?.cantidad}
                                onChangeText={(text) => setSelectedProduct({ ...selectedProduct, cantidad: text })}
                            />
                        </View>

                        <View>
                            <Label className={'font-semibold'}>Precio</Label>
                            <Input
                                placeholder="Ingrese precio"
                                keyboardType="numeric"
                                value={selectedProduct?.precio}
                                onChangeText={(text) => setSelectedProduct({ ...selectedProduct, precio: text })}
                            />
                        </View>
                    </View>
                    <View className="flex flex-row justify-between mt-3">
                        <Pressable onPress={handleClose} className="py-2 bg-red-50 px-3 rounded-xl">
                            <Text className="ml-1 text-red-500 text-base font-bold">Cancelar</Text>
                        </Pressable>
                        <Pressable onPress={handleAgregar} className="py-2 bg-cyan-50 px-3 rounded-xl">
                            <Text className="text-cyan-500 text-base font-bold">Guardar</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}