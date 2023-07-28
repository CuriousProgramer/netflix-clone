import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../utils/colors'

export default function TextComponent({children,style,headingLarge,headingSmall}) {

  if(headingLarge){
    return (
      <Text style={{color: colors.text,fontSize: 32,...style}}>
          {children}
      </Text>
    )
  }

  if(headingSmall){
    return (
      <Text style={{color: colors.text,fontSize: 18,fontWeight: 'bold',...style}}>
          {children}
      </Text>
    )
  }

  return (
    <Text style={{color: colors.text,fontSize: 16,...style}}>
        {children}
    </Text>
  )
}



