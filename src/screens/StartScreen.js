import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { Background, HamburgerMenu, Header, Paraghraph, Button } from '../components'
import { theme } from '../config/theme'

const StartScreen = () => {
  return (
    <Background style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <HamburgerMenu />
      <View style={styles.imageContainer}>
        <Image style={styles.image} resizeMode="contain" source={ require('../assets/images/onboarding_image.jpg')}/>
      </View>
      <Header style={{ color: theme.colors.black, marginVertical: 24 }}>Digital Ticket</Header>
      <Paraghraph style={{ textAlign: 'center', marginHorizontal: 24, color: theme.colors.gray }}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Paraghraph>
      <Button style={{  marginTop: 48 , shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }
      , text :  { fontSize: 16, fontWeight: 'bold', color: theme.colors.white } }}/>
    </Background>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  imageContainer: {
    width: 280,
    height: 180
  },
  image: {
    width: '100%',
    height: '100%'
  }
})