import { TextInput, View, Pressable, Text } from 'react-native'
import { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';


export default function Input({ secure = false, placeholder, onChangeText, value = "", error = "", keyboardType }) {

  const [show, setShow] = useState(secure)
  const stylesDefect = {
    defect: `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full px-2.5
     py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 pr-6`,
    error: `bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 
     py-3 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500`
  }

  return (
    <>
      <View className="w-full">
        <TextInput keyboardType={keyboardType ?? null} error={error} value={value} onChangeText={onChangeText} secureTextEntry={show} className={`${error === "" ? stylesDefect.defect : stylesDefect.error} pr-6`}
          placeholder={placeholder} />
        {
          secure && (
            <Pressable onPress={() => setShow(!show)} className="absolute right-0 top-0 h-full flex items-center justify-center px-2">
              {
                !show ?
                  <Feather name="eye" size={20} color={"#9CA3AF"} />
                  : <Feather name="eye-off" size={20} color="#9CA3AF" />
              }
            </Pressable>
          )
        }
      </View >
      {
        error !== "" && <Text className='text-red-500 text-sm font-bold'>{error}</Text>
      }
    </>
  )
}