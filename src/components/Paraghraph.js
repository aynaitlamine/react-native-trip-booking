import { Paragraph as Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React from 'react'

const Paraghraph = ({style, ...props}) => {
  return (
      <Text style={[styles.text, style]} {...props}/>
  )
}

export default Paraghraph

const styles = StyleSheet.create({
    text: {
        fontSize: 12
    }
})