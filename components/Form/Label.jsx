import { View, Text } from 'react-native'
import React from 'react'

export default function Label({ children, props, className }) {
    return (
        <Text {...props} className={`block mb-2 text-base text-gray-900 dark:text-white ${className}`}>
            {children}
        </Text>

    )
}