import {
  StyleSheet
} from "react-native"

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  loginOptions: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 25,
    paddingHorizontal: 25,

  },
  loginOption: {
    backgroundColor: "#fff",
    borderRadius: 23,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    height: 50,
    flexDirection: "row", 
    elevation: 3
  },
  loginOptionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#26559A"
  },
  loginForm: {
    marginVertical: 15,
    paddingHorizontal: 25,
  },
  controller: {
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButton: {
    backgroundColor: "#FEE180",
    borderRadius: 23,
    marginHorizontal: 25,
    marginVertical: 10,
    width: 350,
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#935CAE",
    fontSize: 16,
    fontWeight: "bold"
  },
  
});

