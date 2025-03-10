import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';

export default function ProductsLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerShown: false,
        }} >
            <Stack.Screen name="index" options={{
                title: 'Pedidos',
                headerShown: true,
                headerTitle: 'Pedidos',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />
            <Stack.Screen name="create" options={{
                title: 'Crear',
                headerShown: false,
                headerTitle: 'Crear',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />

            <Stack.Screen name="[id]" options={{
                title: 'Editar',
                headerShown: false,
                headerTitle: 'Editar',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />
        </Stack>
    );
}