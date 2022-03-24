import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

import React from 'react'

const HamburgerMenu = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={ () => console.log('hi')}>
      <Image style={styles.icon} source={ require('../assets/icons/bar_menu_icon.png')}/>
    </TouchableOpacity>
  )
}

export default HamburgerMenu

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: getStatusBarHeight() + 20,
        right : 20,
    },
    icon: {
      width: 24,
      height: 24
    }
})