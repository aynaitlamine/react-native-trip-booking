import { StyleSheet,  View } from 'react-native'
import React from 'react'

const Background = ({ style, children }) => {
  return (
    <View style={[ styles.container, style ]}>
      { children }
    </View>
  )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})