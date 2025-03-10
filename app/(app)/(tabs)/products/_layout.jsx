import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';

export default function ProductsLayout() {
    const { colorScheme } = useColorScheme()
    return (
        <Stack screenOptions={{
            headerShown: false,
        }} >
            <Stack.Screen name="index" options={{
                title: 'Productos',
                headerShown: true,
                headerTitle: 'Productos',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />
            <Stack.Screen name="create" options={{
                title: 'Crear',
                headerShown: true,
                headerTitle: 'Crear producto',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />

            <Stack.Screen name="[id]" options={{
                title: 'Editar',
                presentation: "modal",
                headerShown: false,
                headerTitle: 'Editar producto',
                headerStyle: { backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff', },
                headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            }} />
            {/* factura/ */}
            {/* <Stack.Screen
                name="borrarcuenta"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="informacion"
                options={{
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="deshabilitarcuenta"
                options={{
                    presentation: 'modal',
                }}
            /> */}
        </Stack>
    );
}