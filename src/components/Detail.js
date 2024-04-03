import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const Detail = () => {
    const [isColor] = useContext(AppContext)
    console.log(isColor);
  return (
    <View style={{backgroundColor:isColor}}>
      <Text >Detail</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})