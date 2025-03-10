import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useColorScheme } from 'nativewind';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {

    const { colorScheme } = useColorScheme()


    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#77B1D0',
            headerShown: false,
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff',
                    },
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={20} color={color} />,
                }}
            />
            <Tabs.Screen
                name="pedidos"
                options={{
                    title: 'Pedidos',
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff',
                    },
                    tabBarIcon: ({ color }) =><AntDesign name="filetext1" size={20} color={color} />,
                }}
            />

            <Tabs.Screen
                name="products"
                options={{
                    title: 'Productos',
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff',
                    },
                    tabBarIcon: ({ color }) => <Feather name="shopping-bag" size={20} color={color} />,
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarStyle: {
                        backgroundColor: colorScheme === 'dark' ? '#1A202C' : '#fff',
                    },
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={20} color={color} />,
                }}
            />
        </Tabs>
    );
}
