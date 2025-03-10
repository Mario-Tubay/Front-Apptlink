
import { Text, Pressable, ActivityIndicator } from 'react-native'
import { useState } from 'react'

export default function Button({ type = "default", children, onPress, loading = false, classText="" }) {
      const [press, setPress] = useState(false)
      const stylesDefect = `font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 focus:outline-none`
      const styles = {
            default: ` bg-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-500 dark:focus:ring-cyan-500`,
            secondary: ` bg-secondary hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`,
            danger: ` bg-red-400 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`,
            success: ` bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`,
            disabled: ` bg-gray-400 dark:bg-gray-600`,
            defaultText: `text-cyan-500 dark:text-white`
      }
      return (
            <Pressable
                  disabled={loading}
                  onPressIn={() => setPress(true)} onPressOut={() => setPress(false)}
                  onPress={onPress} className={`${stylesDefect} ${ loading ? styles.disabled : styles[type]} ${press && 'opacity-50'}`}>
                  {
                        loading
                              ? <ActivityIndicator color="#ffffff" />
                              : <Text className={ type === "defaultText" ? `${styles.defaultText} ${classText}` : "text-white text-center font-semibold"}>{children}</Text>

                  }
            </Pressable>
      )
}