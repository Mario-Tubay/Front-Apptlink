import * as SecureStore from 'expo-secure-store';

export const create = async (form) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const getProducts = async () => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const getProductById = async (id) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const update = async (form) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const searchProducts = async (search) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/search/products?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const searProductReport = async (search) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/kardex/kardex/producto/movimientos?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const deleteProduct = async (id) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({id})
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}

export const getTotalProducts = async () => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/productos/productos/total_items`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        return {
            status: "error",
            message: "Ocurrio un error",
            errorMessage: error.message,
        }
    }
}