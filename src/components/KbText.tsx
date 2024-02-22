import { View, Text } from 'react-native'
import React from 'react'

export default function KbText(props:{text:string}) {
  return (
      <Text>{props.text}</Text>
  )
}