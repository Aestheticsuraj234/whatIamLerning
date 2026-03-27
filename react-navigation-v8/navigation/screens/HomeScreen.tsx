import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const navigation = useNavigation()
  
    return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPressIn={()=>navigation.navigate("Settings")}>Go to settings</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})