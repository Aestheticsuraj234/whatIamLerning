import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductScreen = ({route}:any) => {
    const {id , name} = route.params;
  return (
      <View style={{flex:1 , justifyContent:"center" , alignItems:"center" , gap:20}}>
      <Text>Product ID: {id}</Text>
      <Text>Name: {name}</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})