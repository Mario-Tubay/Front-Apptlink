import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from './Input'
import { searchProducts } from '../../services/products'

export default function Buscadorproducto({ setSelectedProduct }) {
    const [searchResults, setSearchResults] = useState([])
    const [text, setText] = useState(selectProduct ? selectProduct.nombre : '')
    const handleSearch = async (text) => {
        setText(text)
        if (text.length === 0) return
        const response = await searchProducts(text)
        setSearchResults(response)
    }

    const selectProduct = (product) => {
        setText(product.nombre)
        setSelectedProduct(product)
        setSearchResults([])
    }
    return (
        <>
            <Input
                placeholder="Buscar producto (minimo 3 caracteres)"
                value={text}
                onChangeText={(text) => handleSearch(text)}
            />
            {searchResults.length > 0 && (
                <View className="absolute top-[70px] z-50 w-full bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-lg max-h-56">
                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => selectProduct(item)}
                                className="p-3 border-b border-gray-200 dark:border-gray-600"
                            >
                                <Text className="font-semibold dark:text-white">{item.nombre}</Text>
                                <Text className="text-sm text-gray-500 dark:text-gray-400">
                                    Precio: ${item.precio} | Stock: {item.stock}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </>
    )
}