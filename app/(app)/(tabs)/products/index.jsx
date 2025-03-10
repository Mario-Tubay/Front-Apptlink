import { View, Text, Pressable, FlatList, RefreshControl } from 'react-native'
import Container from '../../../../components/ui/Container'
import { Link } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import IndexProducto from './IndexProducto';
import HeaderTabs from '../../../../components/ui/HeaderTabs';
import { useState } from 'react';
import StockReport from './StockReport';
import Input from '../../../../components/Form/Input'
export default function index() {
  const [activeTab, setActiveTab] = useState("productos");
  const tabNames = [
    {
      name: "productos",
      title: "Productos",
    },
    {
      name: "reporte",
      title: "Reporte",
    },
  ];

  return (
    <Container className={`h-full`}>
      <View className="flex flex-col items-end justify-end mt-3">
        <Link asChild href="/products/create">
          <Pressable className="bg-blue-50  px-2 py-1 rounded-md  items-center flex flex-row justify-center">
            <Entypo name="plus" size={20} color="#1e3a8a" />
            <Text className="text-blue-900 font-bold text-sm">Crear</Text>
          </Pressable>
        </Link>
      </View>

      <HeaderTabs items={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
      {
        activeTab === "productos" ?
          <IndexProducto /> :
          <StockReport />
      }

    </Container>
  )
}