import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    width: Dimensions.get("window").width,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ABABAB",
    height: 60
  },
  footerTab: {
    backgroundColor: "#F7F7F7",
    paddingTop: 5

  },
  scrollIndicator: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 50
  }
  
})