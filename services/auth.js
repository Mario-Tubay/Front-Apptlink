import * as SecureStore from 'expo-secure-store';


export const signIn = async (email, password) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (data?.status === "error") return data

        await SecureStore.setItemAsync("token_api", data.token);
        return data
    } catch (err) {
        return { error: true, message: err.message }
    }
}

export const getSession = async () => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        if (!token) return { status: "unauthorized", message: "No hay session" }

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()
        if (data?.status === "error" && data?.message === "Unauthorized") {
            await logout()
            return { status: "unauthorized", message: "No hay session" }
        }
        return { status: "authenticated", data }
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const logout = async () => {
    const token = await SecureStore.getItemAsync("token_api");
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    if (data?.status === "success") await SecureStore.deleteItemAsync("token_api");
    return data
}

export const register = async (form) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        return data
    } catch (err) {
        return { error: true, message: err.message }
    }
}

export const forgotPassword = async (email) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        return data
    } catch (error) {
        return {
            success: "error",
            message: 'Error al enviar el correo de recuperación',
            errorMessage: error.message
        };
    }
}

export const verifyToken = async (form) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/verify-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        return data
    } catch (error) {
        return {
            success: "error",
            message: 'Error al verificar el token',
            errorMessage: error.message
        };
    }
}

export const resetAccountPass = async (form) => {
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await response.json();
        return data
    } catch (error) {
        return {
            success: "error",
            message: 'Error al restablecer la contraseña',
            errorMessage: error.message
        };
    }
}