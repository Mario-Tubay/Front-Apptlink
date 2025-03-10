import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { searProductReport } from '../../../../services/products'
import Label from '../../../../components/Form/Label'
import Input from '../../../../components/Form/Input'
import { ScrollView } from 'react-native-gesture-handler'
import Resumen from '../../../../components/ui/Resumen'
import CardMovimiento from '../../../../components/ui/CardMovimiento'

export default function StockReport() {
  const [data, setData] = useState([])
  const [text, setText] = useState('')
  const searProducto = async () => {
    const result = await searProductReport(text)
    setData(result)
  }

  useEffect(() => {
    if (text.trim() === '') {
      setData([])
      return
    }
    searProducto()
  }, [text])
  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-5">
        <Input
          label="Buscar Producto"
          placeholder="Buscar Producto"
          value={text}
          onChangeText={setText}
        />

        {
          data.length === 0 ? (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500 dark:text-gray-300 text-[13px] font-semibold">
                Busque primero el producto
              </Text>
            </View>
          ) : (
            <Resumen data={data} />

          )
        }

        {
          data?.movimientos?.map((item, index) => (
            <CardMovimiento key={index} item={item} />
          ))
        }

      </View>
    </ScrollView>
  )
}