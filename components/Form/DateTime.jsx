import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DateTime({ value, setForm, form }) {
    const [showDatePicker, setShowDatePicker] = useState(true)
    const handleDateChange = (event, selectedDate) => {
        const currentDate = new Date()
        setShowDatePicker(false)
        if (selectedDate > currentDate) {
            Alert.alert('Error', 'La fecha no puede ser mayor a la actual')
            return 
        }

        const formattedDate = selectedDate.toISOString().split('T')[0]
        setForm({ ...form, fecha: formattedDate })
    }
    return (
        <>
            <TouchableOpacity
                className="bg-gray-50 border border-gray-300 rounded-lg dark:bg-[rgb(62,68,81)] dark:border-gray-600 w-full py-0.5"
            >
                <DateTimePicker
                    design="material"
                    value={value && new Date(value) || new Date()}
                    mode="date"
                    onChange={handleDateChange}
                    maximumDate={new Date()}
                    locale="es-ES"
                    style={{
                        width: '100%',
                        height: 45,
                        fontSize: 12,
                    }}
                />
            </TouchableOpacity>

        </>
    )
}