import { View, ScrollView } from 'react-native'
import React from 'react'

export default function Container({children, className, type="normal", style}) {
   const classDefect = "bg-white px-4  dark:bg-gray-800"
   if(type === "scroll"){
      return (
         <ScrollView style={style}  className={`${classDefect} ${className}`}>
            {children}
         </ScrollView>
      )
   }

  return (
   <View style={style}  className={`${classDefect} ${className}`}>
      {children}
   </View>
  )
}