import { Stack } from 'expo-router';

export default function ProfileLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }} >
            <Stack.Screen name="index" options={{ title: 'Profile' }} />
            <Stack.Screen name="edit" options={{ presentation: 'modal', title: 'Tu informacion' }} />

        </Stack>
    );
}