import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from './Container'
import Label from '../Form/Label'
import Input from '../Form/Input'
import { getBuscadorCliente } from '../../services/pedidos'

export default function BuscadorCliente({ form, setForm, modalRef }) {
    const [results, setResults] = useState([])
    const [search, setSearch] = useState(form.cliente && `${form?.cliente?.ci}`)
    const handleSearch = async () => {
        const response = await getBuscadorCliente(search)
        setResults(response)
    }
    useEffect(() => {
        handleSearch(search)
    }, [search])


    return (
        <Container>
            <View>
                <Label className={"font-semibold"}>Buscar cliente</Label>
                <Input
                    className={"mt-2"}
                    placeholder={"Buscar por nombre o cédula"}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            <View className="mt-2 min-h-[40vh]">
                {results.length > 0 && (
                    <FlatList
                        data={results}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setForm({ ...form, id_cliente: item.id, cliente: item })
                                    modalRef.current.close()
                                }}
                                className="py-3 border-b border-gray-200 dark:border-gray-700"
                            >
                                <Text className="font-bold dark:text-white">{item.nombres} {item.apellidos}</Text>
                                <Text className="text-gray-600 dark:text-gray-400">CI: {item.ci}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>

        </Container>
    )
}