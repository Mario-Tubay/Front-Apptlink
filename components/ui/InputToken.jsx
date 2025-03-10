import { View, Text, TextInput } from 'react-native'
import { forwardRef } from 'react'

const InputToken = forwardRef(({ value, onChangeText }, ref) => {
    return (
        <TextInput
            ref={ref}
            className="w-12 h-12 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500  text-center text-base mr-2"
            maxLength={1}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize="characters"
            keyboardType="numeric"
        />
    )
})

export default InputToken