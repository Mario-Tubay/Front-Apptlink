import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export const getBuscadorCliente = async (searchTerm) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/users/search?search=${searchTerm}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }

}

export const create = async (pedido) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(pedido)
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error", error: e}
    }
}

export const deletePedido = async (id) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }
}

export const getPedidos = async () => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }
}

export const getPedidosById = async (id) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }
}

export const update = async (pedido) => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/${pedido.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(pedido)
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }
}

export const getTotalCost = async () => {
    try {
        const token = await SecureStore.getItemAsync("token_api");
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/pedidos/total/cost`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data;
    } catch (e) {
        return { status: "error", message: "Ocurrio un error" };
    }
}