import { Redirect, Stack } from "expo-router";
import { useSession } from "../../hooks/useSession";
import PageLoading from "../../components/ui/PageLoading";


export default function AppLayout() {
    const { status, data } = useSession()
    if (status === "loading")  return  <PageLoading />
    if(status === "unauthorized") return <Redirect href="/sign-in" />
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )

}