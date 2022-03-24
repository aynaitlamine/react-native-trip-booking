import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'


const Header = ({ style, ...props }) => {
  return (
    <Text style={[styles.header, style]} {...props}/>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})