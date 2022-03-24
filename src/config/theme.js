import { DefaultTheme } from "react-native-paper";

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
  regular: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  header: {
    fontFamily: "Roboto-Black",
    fontSize: 50,
  },
  h1: { fontFamily: "Roboto-Black", fontSize: 30 },
  h2: { fontFamily: "Roboto-Bold", fontSize: 22 },
  h3: { fontFamily: "Roboto-Bold", fontSize: 16 },
  h4: { fontFamily: "Roboto-Bold", fontSize: 14 }, 
};

