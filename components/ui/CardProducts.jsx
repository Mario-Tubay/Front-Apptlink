import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import Label from '../Form/Label'
import { Swipeable } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated';
import { Link } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { deleteProduct } from '../../services/products';

export default function CardProducts({ item }) {
    const deleteProd = async (id) => {
        Alert.alert(
            "Eliminar producto",
            "¿Desea eliminar este producto?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Eliminar",
                    onPress: async () => {
                        const response = await deleteProduct(id)
                        if (response.status === "error") return Alert.alert("Error", response.message)

                        Alert.alert("Éxito", response.message)
                    },
                },
            ]
        );

    }

    const renderRightActions = (progress, dragX) => {
        return (
            <View className="rounded-lg" style={styles.actionsContainer}>
                <Animated.View >
                    <Link asChild href={`products/1`}>
                        <Pressable className="bg-yellow-500 items-center justify-center px-5 h-full" >
                            <Feather name="edit" size={20} color="#713f12" />
                        </Pressable>
                    </Link>

                </Animated.View>
                <Animated.View >
                    <Pressable style={{ opacity: 100 }} onPress={() => deleteProd(1)} className="bg-red-500 items-center justify-center px-5 h-full rounded-r-lg" >
                        <Feather name="trash-2" size={20} color="#fff" />
                    </Pressable>
                </Animated.View>
            </View>
        );
    };
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View className="flex-row justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                <View className="">
                    <Label className='text-lg font-bold'>{item?.codigo}</Label>
                    <Label className='text-sm font-semibold'>{item?.nombre}</Label>
                    {
                        item?.estado === 1 ?
                            <View className={'bg-green-50 px-2 rounded-full'}>
                                <Text className="text-sm font-bold text-green-700">
                                    Activo
                                </Text>
                            </View>
                            :
                            <View className={'bg-red-50 px-2 rounded-full'}>
                                <Text className="text-sm font-bold text-red-700">
                                    Inactivo
                                </Text>
                            </View>
                    }
                </View>
                <Label className='text-sm font-semibold'>$ {parseFloat(item?.precio).toFixed(2, 2)}</Label>

            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
    },
});