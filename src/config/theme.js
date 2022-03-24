import { DefaultTheme, configureFonts } from "react-native-paper";

export const  theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#5390ff", // Blue
    secondary: "#cacfd9", // Gray
    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#eff2f5",
    gray: "#8b9097",
  },
  fonts: configureFonts(fontConfig),
};


const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
    },
    black: {
      fontFamily: 'Roboto-Black',
      fontWeight: 	800,
    },
  },
  ios: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
    },
    black: {
      fontFamily: 'Roboto-Black',
      fontWeight: 	800,
    },
  },
  android: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'bold',
    },
    black: {
      fontFamily: 'Roboto-Black',
      fontWeight: 	800,
    },
  }
};

